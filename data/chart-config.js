// Maps each CANADA_DATA key to a category and chart-rendering config.
// type: 'line' | 'bar' | 'horizontalBar'
const CHART_CONFIG = {
  economy: {
    label: "Economy & Productivity",
    desc: "Output, sectoral composition, productivity relative to peers, and trade exposure.",
    charts: [
      { key: "living_standards", type: "line" },
      { key: "gdp_by_sector", type: "line" },
      { key: "capital_allocation", type: "line" },
      { key: "sector_snapshot", type: "horizontalBar" },
      { key: "productivity_g7", type: "line" },
      { key: "trade", id: "trade", type: "line",
        seriesSubset: ["Exports (% of GDP)", "Imports (% of GDP)", "US Share of Exports (%)"],
        title: "Canada: Trade as % of GDP & US Export Concentration (2000–2026) | %",
        subtitle: "Exports, imports, and the share of exports going to the US — all percentages. ~75% of goods exports go to one country." },
      { key: "trade", id: "trade-balance", type: "line",
        seriesSubset: ["Current Account Balance ($B)"],
        title: "Canada: Current Account Balance (2000–2026) | $B",
        subtitle: "Persistent deficit means Canada finances current consumption by borrowing from or selling assets to foreigners." },
      { key: "trade", id: "trade-fx", type: "line",
        seriesSubset: ["CAD/USD Exchange Rate"],
        title: "Canada: CAD/USD Exchange Rate (2000–2026)",
        subtitle: "Canadian dollar value relative to the US dollar." }
    ]
  },
  debt_fiscal: {
    label: "Debt & Fiscal",
    desc: "Household and sovereign debt, housing costs, monetary policy, federal spending.",
    charts: [
      { key: "household_debt", type: "line" },
      { key: "fed_debt_deficit", id: "fed_debt_deficit", type: "line",
        seriesSubset: ["Fed Net Debt (% of GDP)"],
        title: "Canada: Federal Net Debt (1970–2026) | % of GDP",
        subtitle: "Federal net debt as a share of GDP. The 1995 fiscal crisis (peak ~67%) and the 2020 COVID shock are the two defining inflection points." },
      { key: "fed_debt_deficit", id: "fed_debt_deficit-balance", type: "line",
        seriesSubset: ["Annual Surplus/ Deficit ($B)"],
        title: "Canada: Annual Federal Surplus / Deficit (1970–2026) | $B",
        subtitle: "Annual budgetary balance, nominal dollars. The 2020 deficit of -$327.7B is the largest in Canadian history." },
      { key: "housing", id: "housing", type: "line",
        seriesSubset: ["House Price Index (2005=100)"],
        title: "Canada: House Price Index (1990–2026) | 2005 = 100",
        subtitle: "National composite house price index, indexed to 2005." },
      { key: "housing", id: "housing-dollars", type: "line",
        seriesSubset: ["Median Household Income ($000s)", "Avg Home Price ($000s)"],
        title: "Canada: Median Income vs. Average Home Price (1990–2026) | $000s",
        subtitle: "Same unit ($000s), directly comparable — the growing gap between the two lines is the affordability crisis." },
      { key: "housing", id: "housing-ratio", type: "line",
        seriesSubset: ["Price-to- Income Ratio"],
        title: "Canada: House Price-to-Income Ratio (1990–2026)",
        subtitle: "Average home price divided by median household income. Rose from 3.3× (1996) to 11.8× (2021)." },
      { key: "inflation_boc", type: "line" },
      { key: "dept_funding", type: "horizontalBar" },
      { key: "dept_spending_hist", type: "line" }
    ]
  },
  demographics: {
    label: "Demographics",
    desc: "Population growth, fertility, and provincial divergence.",
    charts: [
      { key: "population", id: "population", type: "line",
        seriesSubset: ["Pop Growth (000s)", "Permanent Residents (000s)", "Non-Permanent Residents (000s)"],
        title: "Canada: Population Growth & Immigration Flows (1990–2026) | Thousands",
        subtitle: "Annual net population growth, permanent resident admissions, and non-permanent residents (NPR) — same unit (000s). The post-2022 NPR surge explains most of the per-capita GDP divergence shown elsewhere." },
      { key: "population", id: "population-total", type: "line",
        seriesSubset: ["Total Population (Millions)"],
        title: "Canada: Total Population (1990–2026) | Millions",
        subtitle: "Total resident population." },
      { key: "population", id: "population-rate", type: "line",
        seriesSubset: ["Pop Growth Rate (%)", "Immigration Share of Growth (%)"],
        title: "Canada: Population Growth Rate & Immigration's Share of Growth (1990–2026) | %",
        subtitle: "Annual population growth rate and immigration's share of total growth — both percentages." },
      { key: "fertility", id: "fertility", type: "line",
        seriesSubset: ["Total Fertility Rate (TFR)", "Replacement Threshold", "Immigrant TFR", "Canadian-Born TFR", "2nd-Gen TFR Convergence"],
        title: "Canada: Fertility Rate (1960–2026) | Births per Woman",
        subtitle: "TFR vs. the 2.1 replacement threshold, split by immigrant, Canadian-born, and second-generation cohorts." },
      { key: "fertility", id: "fertility-dependency", type: "line",
        seriesSubset: ["Age Dependency Ratio (%)"],
        title: "Canada: Age Dependency Ratio (1960–2026) | %",
        subtitle: "Ratio of dependents (children + seniors) to working-age population." },
      { key: "provincial", type: "horizontalBar" }
    ]
  },
  labour_inequality: {
    label: "Labour & Inequality",
    desc: "Employment, wages, wealth distribution, and corporate concentration.",
    charts: [
      { key: "labour_market", id: "labour_market", type: "line",
        seriesSubset: ["Unemployment Rate (%)", "Labour Force Participation (%)", "Real Wage Growth (% YoY)", "Youth Unemp. Rate (%)"],
        title: "Canada: Labour Market Rates (2000–2026) | %",
        subtitle: "Unemployment, participation, real wage growth, and youth unemployment — all percentages. Participation falling while unemployment looks stable is the key signal." },
      { key: "labour_market", id: "labour_market-earnings", type: "line",
        seriesSubset: ["Avg Weekly Earnings ($)"],
        title: "Canada: Average Weekly Earnings (2000–2026) | $",
        subtitle: "Nominal average weekly earnings." },
      { key: "wealth_inequality", type: "line" },
      { key: "corporate_concentration", type: "line" }
    ]
  },
  social_fabric: {
    label: "Social Fabric",
    desc: "Trust, education outcomes, energy architecture, and government efficiency.",
    charts: [
      { key: "social_cohesion", type: "line" },
      { key: "education", type: "line" },
      { key: "energy", type: "line" },
      { key: "govt_efficiency", type: "line" }
    ]
  }
};

const PALETTE = ["#c9a44c","#8ba888","#a87c7c","#7c8ba8","#b89a6e","#6e9ab8","#a8a36e"];
