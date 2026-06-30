// Maps each CANADA_DATA key to a category and chart-rendering config.
// type: 'line' | 'bar' | 'horizontalBar'
const CHART_CONFIG = {
  economy: {
    label: "Economy & Productivity",
    desc: "Output, sectoral composition, and productivity relative to peers.",
    charts: [
      { key: "living_standards", type: "line" },
      { key: "gdp_by_sector", type: "line" },
      { key: "capital_allocation", type: "line" },
      { key: "sector_snapshot", type: "horizontalBar" },
      { key: "productivity_g7", type: "line" }
    ]
  },
  debt_fiscal: {
    label: "Debt & Fiscal",
    desc: "Household and sovereign debt, housing costs, monetary policy, federal spending.",
    charts: [
      { key: "household_debt", type: "line" },
      { key: "fed_debt_deficit", type: "line" },
      { key: "housing", type: "line" },
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
      { key: "labour_market", type: "line" },
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
