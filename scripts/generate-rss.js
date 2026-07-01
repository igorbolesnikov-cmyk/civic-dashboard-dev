#!/usr/bin/env node
/*
 * Northwatch — RSS Feed Generator
 * ---------------------------------
 * Reads the FEED array out of index.html and writes it out as rss.xml
 * at the repo root. Buttondown (or any RSS-to-email service) polls that
 * URL and emails subscribers only when a NEW item (new guid) appears.
 *
 * CADENCE: run this manually after you update the FEED array in
 * index.html — intended to be a monthly step, not per-edit. Frequency
 * of subscriber emails is entirely a function of how often you run this
 * and push the result, not anything automatic/real-time.
 *
 * USAGE:
 *   node scripts/generate-rss.js
 *   -> writes rss.xml
 *   -> commit + push rss.xml along with your index.html FEED update
 *
 * Each FEED entry must have a "date" field (YYYY-MM-DD) — used for the
 * RSS pubDate and to build a stable guid, so re-running this script on
 * unchanged entries does not generate duplicate/new items.
 */

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = path.join(__dirname, "..");
const INDEX_HTML = path.join(ROOT, "index.html");
const OUT_FILE = path.join(ROOT, "rss.xml");

const SITE_URL = "https://northwatchca.github.io/civic-dashboard-dev";
const SITE_TITLE = "Northwatch — What Changed";
const SITE_DESC = "Monthly structural data updates from Northwatch: a Canadian civic data resource.";

function escapeXml(str){
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function extractFeed(){
  const html = fs.readFileSync(INDEX_HTML, "utf8");
  const start = html.indexOf("const FEED = [");
  if(start === -1) throw new Error("Could not find FEED array in index.html");
  const end = html.indexOf("];", start);
  const arrayText = html.slice(start + "const FEED = ".length, end + 1);
  // eslint-disable-next-line no-eval
  return eval(arrayText);
}

function toRfc822(dateStr){
  const d = new Date(dateStr + "T12:00:00Z");
  return d.toUTCString();
}

function guidFor(entry){
  const hash = crypto.createHash("sha1")
    .update(entry.date + "|" + entry.title)
    .digest("hex")
    .slice(0, 16);
  return `${SITE_URL}/#feed-${hash}`;
}

function main(){
  const feed = extractFeed();

  if(!feed.length){
    console.log("FEED array is empty — nothing to write.");
    return;
  }

  const missingDates = feed.filter(e => !e.date);
  if(missingDates.length){
    console.warn(`Warning: ${missingDates.length} FEED entr${missingDates.length===1?"y":"ies"} missing a "date" field — skipped.`);
  }

  const dated = feed.filter(e => e.date).slice().sort((a,b)=> b.date.localeCompare(a.date));

  const items = dated.map(entry => {
    const guid = guidFor(entry);
    return `    <item>
      <title>${escapeXml(entry.title)}</title>
      <description>${escapeXml(entry.note || "")}</description>
      <link>${SITE_URL}/#feed</link>
      <guid isPermaLink="false">${guid}</guid>
      <pubDate>${toRfc822(entry.date)}</pubDate>
    </item>`;
  }).join("\n");

  const buildDate = new Date().toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}/</link>
    <description>${escapeXml(SITE_DESC)}</description>
    <language>en-ca</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  fs.writeFileSync(OUT_FILE, xml);
  console.log(`rss.xml written — ${dated.length} item(s).`);
  console.log(`  ${OUT_FILE}`);
}

main();
