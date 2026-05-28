export const personalInfo = {
  name: "Shweta Sharma",
  title: "Finance & Analytics Professional",
  tagline: "Turning financial data into strategic insight",
  subTagline: "Financial Modeling · Quantitative Research · Business Analytics",
  email: "shweta.sharma@email.com",
  linkedin: "https://linkedin.com/in/shwetasharma",
  location: "India",
  about: `A finance professional with a foundation built on rigorous quantitative economics, 
  advanced financial modeling, and applied data analytics. My journey spans international 
  economics research, equity analysis, and enterprise-level analytics — all converging toward 
  one goal: delivering financial insight that drives decisions.`,
  aboutExtended: `Trained in econometrics at the Gokhale Institute and currently advancing through 
  an MBA in Finance and Business Analytics, I bring an uncommon combination of theoretical depth 
  and practical modeling experience. I believe the best financial analysis lives at the intersection 
  of rigorous methodology and clear communication.`
};

export const competencies = [
  {
    category: "Financial Analysis",
    skills: ["Financial Statement Analysis", "Ratio Analysis", "Valuation & Forecasting", "Cash Flow Analysis", "Industry Benchmarking"]
  },
  {
    category: "Modeling & Valuation",
    skills: ["Excel Financial Models", "DCF Modeling", "Scenario Analysis", "Actual vs Forecast", "Dashboard Design"]
  },
  {
    category: "Quantitative Methods",
    skills: ["Econometrics (OLS, ARIMA, SARIMA)", "Regression Analysis", "Time Series Forecasting", "Hypothesis Testing", "Statistical Inference"]
  },
  {
    category: "Tools & Technology",
    skills: ["Advanced Excel & VBA", "Power BI", "Python (Pandas, NumPy)", "SQL", "Power Query"]
  }
];

export const education = [
  {
    degree: "MBA — Finance & Business Intelligence",
    institution: "Chandigarh University",
    year: "Pursuing",
    highlight: "Dual specialization in Finance and Business Analytics"
  },
  {
    degree: "M.Sc. — International Economics & Finance",
    institution: "Gokhale Institute of Politics and Economics",
    year: "2022",
    highlight: "Econometrics, Financial Theory, Macroeconomic Modeling"
  },
  {
    degree: "B.A. Hons. — Economics",
    institution: "Delhi University",
    year: "2020",
    highlight: "Statistical Analysis, Microeconomics, Research Methodology"
  }
];

export const certifications = [
  "Financial Modeling & Valuation",
  "Microsoft Power BI Desktop for Business Intelligence",
  "Data Analytics with Excel, SQL & Python"
];

export const experience = [
  {
    role: "Data Analyst",
    company: "DockDevelopers",
    period: "Oct 2022 – Jan 2025",
    highlights: [
      "Developed time-series forecasting models achieving 85% prediction accuracy to support financial planning and business strategy decisions",
      "Built fraud detection models using ML techniques, improving detection accuracy by 12% and presenting findings directly to clients",
      "Designed automated ETL workflows using SQL and Python, improving data processing efficiency by 40%",
      "Built interactive Power BI dashboards and KPI reports improving operational response time by 30%",
      "Performed RFM-based customer segmentation contributing to 10% increase in client sales",
      "Led client-facing meetings to gather requirements, deliver project updates, and present analytical outcomes"
    ]
  }
];

// Tata Power Financial Data
export const liquidityData = [
  { year: "FY21", currentRatio: 0.36, quickRatio: 0.28 },
  { year: "FY22", currentRatio: 0.49, quickRatio: 0.33 },
  { year: "FY23", currentRatio: 0.30, quickRatio: 0.17 },
  { year: "FY24", currentRatio: 0.33, quickRatio: 0.20 },
  { year: "FY25", currentRatio: 0.40, quickRatio: 0.25 }
];

export const profitabilityData = [
  { year: "FY21", npm: 4.08, roa: 0.17, roe: 1.23 },
  { year: "FY22", npm: 27.88, roa: 0.89, roe: 6.76 },
  { year: "FY23", npm: 19.06, roa: 0.87, roe: 7.09 },
  { year: "FY24", npm: 13.53, roa: 0.64, roe: 5.51 },
  { year: "FY25", npm: 14.27, roa: 0.66, roe: 6.19 }
];

export const revenueData = [
  { year: "FY21", revenue: 14429.67, netProfit: 537.05 },
  { year: "FY22", revenue: 14095.04, netProfit: 3097.26 },
  { year: "FY23", revenue: 21813.17, netProfit: 3378.97 },
  { year: "FY24", revenue: 21945.75, netProfit: 2718.84 },
  { year: "FY25", revenue: 24848.91, netProfit: 3190.06 }
];

export const leverageData = [
  { year: "FY21", debtToEquity: 2.05, interestCoverage: -4.82 },
  { year: "FY22", debtToEquity: 2.00, interestCoverage: -1.76 },
  { year: "FY23", debtToEquity: 1.17, interestCoverage: 2.20 },
  { year: "FY24", debtToEquity: 1.17, interestCoverage: 10.95 },
  { year: "FY25", debtToEquity: 1.01, interestCoverage: 33.57 }
];

export const efficiencyData = [
  { year: "FY21", inventoryTurnover: 2.70, debtorsTurnover: 13.49, fixedAssetsTurnover: 0.89 },
  { year: "FY22", inventoryTurnover: 4.23, debtorsTurnover: 20.55, fixedAssetsTurnover: 1.28 },
  { year: "FY23", inventoryTurnover: 5.28, debtorsTurnover: 26.04, fixedAssetsTurnover: 1.94 },
  { year: "FY24", inventoryTurnover: 5.22, debtorsTurnover: 46.47, fixedAssetsTurnover: 2.82 },
  { year: "FY25", inventoryTurnover: 5.03, debtorsTurnover: 57.98, fixedAssetsTurnover: 3.18 }
];

export const keyInsights = [
  {
    metric: "Debt-to-Equity",
    from: "2.05x",
    to: "1.01x",
    label: "FY21 → FY25",
    insight: "Significant deleveraging over 5 years, signaling improved capital structure discipline",
    positive: true
  },
  {
    metric: "Interest Coverage",
    from: "-4.82x",
    to: "33.57x",
    label: "FY21 → FY25",
    insight: "Dramatic recovery from negative coverage to strong debt servicing capacity",
    positive: true
  },
  {
    metric: "Revenue Growth",
    from: "₹14,430 Cr",
    to: "₹24,849 Cr",
    label: "FY21 → FY25",
    insight: "72% revenue growth driven by renewable energy expansion and capacity additions",
    positive: true
  },
  {
    metric: "Net Profit Margin",
    from: "4.08%",
    to: "14.27%",
    label: "FY21 → FY25",
    insight: "Margin expansion reflects operational efficiency gains and debt cost reduction",
    positive: true
  }
];
