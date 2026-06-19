import {
  FiActivity,
  FiAward,
  FiBarChart2,
  FiCode,
  FiCompass,
  FiDatabase,
  FiDollarSign,
  FiFeather,
  FiGlobe,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMusic,
  FiPhone,
  FiPieChart,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiWind,
} from 'react-icons/fi';

export const profile = {
  name: 'Belise Swartwood',
  firstName: 'Belise',
  lastName: 'Swartwood',
  roles: [
    'Mathematics & Finance at MIT',
    'Corporate Finance & Asset Management',
    'Global Macro & Quantitative Research',
    'Sales & Trading',
  ],
  tagline:
    'Building quantitative and fundamental tools across corporate finance, asset management, and global macro — where rigorous analysis meets real conviction.',
  location: 'Cambridge, Massachusetts',
  email: 'belise@mit.edu',
  phone: '+1 (808) 748-9812',
  linkedin: 'https://www.linkedin.com/in/belise-swartwood/',
  linkedinHandle: 'belise-swartwood',
  resume: '/Belise_Swartwood_Resume.pdf',
  availability: 'Open to Summer 2027 / 2028 roles in quantitative finance & banking',
};

export const navLinks = [
  { id: 'about', label: 'About', index: '01' },
  { id: 'experience', label: 'Experience', index: '02' },
  { id: 'capabilities', label: 'Capabilities', index: '03' },
  { id: 'work', label: 'Selected Work', index: '04' },
  { id: 'approach', label: 'Approach', index: '05' },
  { id: 'education', label: 'Education', index: '06' },
  { id: 'beyond', label: 'Beyond', index: '07' },
  { id: 'contact', label: 'Contact', index: '08' },
];

// Scrolling capability tape — domain tags, not market prices.
export const tickerItems = [
  'Corporate Finance',
  'M&A',
  'LBO Modeling',
  'DCF Valuation',
  'Global Macro',
  'Merger Arbitrage',
  'Monetary Policy',
  'FX / Rates',
  'Equities',
  'Credit',
  'Python',
  'R',
  'Bloomberg',
  'Statistics',
];

export const pillars = [
  {
    title: 'Corporate Finance',
    description:
      'Valuation, capital structure, and deal analysis grounded in MIT laboratory coursework and hands-on modeling.',
    icon: FiTrendingUp,
    accent: 'forest',
  },
  {
    title: 'Asset Management',
    description:
      'Portfolio construction and risk-adjusted strategy design across equities, credit, and currency markets.',
    icon: FiPieChart,
    accent: 'brass',
  },
  {
    title: 'Global Macro & Trading',
    description:
      'Thesis-driven, relative-value ideas with disciplined entry, target, and stop-loss frameworks.',
    icon: FiCompass,
    accent: 'oxblood',
  },
];

export const stats = [
  { value: 285, suffix: '+', label: 'M&A deals backtested' },
  { value: 5, suffix: '', label: 'Quant models & memos' },
  { value: 3, suffix: '', label: 'Research & finance roles' },
  { value: 2028, suffix: '', label: 'MIT class year', isYear: true },
];

export const aboutHighlights = [
  { label: 'Degree', value: 'B.S. Mathematics & Finance' },
  { label: 'Institution', value: 'MIT — Class of 2028' },
  { label: 'Toolkit', value: 'Python · R · Bloomberg · Excel' },
  { label: 'Focus', value: 'Macro · FX · DCF · Markets' },
];

export const experiences = [
  {
    role: 'MISTI Eurasia Summer Intern',
    company: 'Central Bank of Armenia (CBA)',
    location: 'Dilijan, Armenia',
    period: 'Jun 2026 — Aug 2026',
    icon: FiDollarSign,
    accent: 'forest',
    points: [
      'Analyzed the relationship between exchange-rate volatility, monetary policy, and financial stability in an emerging-market context.',
      'Modeled optimal foreign-currency deposit allocation using the Minimum Variance Portfolio framework on long-term AMD/USD exchange-rate and price data, estimating the equilibrium dollarization level that minimizes macroeconomic risk.',
      'Authored a central-bank research paper on financial dollarization dynamics, translating quantitative findings into policy recommendations on FX reserve management and monetary transmission.',
    ],
    tags: ['Monetary Policy', 'FX & Exchange Rates', 'Portfolio Theory', 'Research'],
  },
  {
    role: 'ML Neuroscience Researcher',
    company: 'Massachusetts General Hospital',
    location: 'Boston, Massachusetts',
    period: 'Feb 2025 — Dec 2025',
    icon: FiActivity,
    accent: 'brass',
    points: [
      'Developed a LASSO regression model (R-squared = 0.71) identifying the top 8 predictors of clinically significant depression treatment response across 2 fMRI datasets.',
      'Validated findings with a classification model (AUC = 0.84); results presented at the Gerontological Society of America Conference 2025.',
      'First author of a manuscript; research covers brain-connectivity network patterns in treatment-resistant depression.',
    ],
    tags: ['LASSO Regression', 'Classification', 'fMRI', 'Python'],
  },
  {
    role: 'Undergraduate Researcher',
    company: 'Growing Islands — Rebuilding Beaches & Protecting Coastlines, MIT',
    location: 'Cambridge, Massachusetts',
    period: 'Oct 2024 — Feb 2025',
    icon: FiGlobe,
    accent: 'oxblood',
    points: [
      'Designed and tested physical prototypes to minimize sediment displacement by 20% and optimize wave disruption by 15% through controlled lab experiments and numerical simulations.',
      'Trained a machine learning model on coastal imagery to classify and predict sediment transport patterns, informing prototype design iterations.',
    ],
    tags: ['Prototyping', 'Numerical Simulation', 'Computer Vision'],
  },
];

export const skillGroups = [
  {
    title: 'Programming & Analytics',
    icon: FiCode,
    items: ['Python (Pandas, NumPy)', 'R / R-Studio', 'MATLAB', 'Excel & Financial Modeling'],
  },
  {
    title: 'Financial Modeling',
    icon: FiTrendingUp,
    items: ['DCF Modeling', 'Financial Statement Analysis', 'LBO Modeling', 'Sensitivity Analysis'],
  },
  {
    title: 'Macro & Markets',
    icon: FiCompass,
    items: [
      'FX & Exchange-Rate Dynamics',
      'Monetary Policy Analysis',
      'Merger Arbitrage',
      'Portfolio Construction',
    ],
  },
  {
    title: 'Platforms & Data',
    icon: FiDatabase,
    items: ['Bloomberg Terminal', 'FRED / BLS / CME Data', 'Regression & LASSO', 'Statistical Inference'],
  },
];

export const projects = [
  {
    title: 'Macro Investment Memo',
    period: 'June 2026',
    category: 'Global Macro',
    ref: 'M-01',
    icon: FiCompass,
    accent: 'forest',
    summary:
      'Independent macro research recommending a long USD/TRY position in a higher-for-longer rate environment, backed by purpose-built rates and inflation models.',
    points: [
      'Authored an independent macro research memo recommending a long USD/TRY position, building yield-curve, real-yield, and inflation-differential models in Python from FRED, BLS, and CME FedWatch data.',
      'Challenged the conventional thesis that rising US real yields drive emerging-market currency weakness, identifying the Turkey–US inflation differential as the dominant driver (0.75 correlation since 2018).',
      'Constructed a trade with explicit entry, target, stop-loss, and risk scenarios.',
    ],
    metrics: [
      { value: '0.75', label: 'Inflation-diff correlation' },
      { value: '3', label: 'Quant models built' },
    ],
    tags: ['Python', 'FRED / BLS', 'FX Strategy', 'Rates'],
  },
  {
    title: 'Twitter LBO Model',
    period: 'February 2026',
    category: 'Leveraged Buyout',
    ref: 'M-02',
    icon: FiPieChart,
    accent: 'brass',
    summary:
      'A comprehensive leveraged-buyout model evaluating the $44B acquisition of Twitter across multiple exit scenarios.',
    points: [
      'Built a comprehensive LBO model to evaluate the $44B acquisition of Twitter, incorporating multi-tranche debt structures, revolving credit facilities, and interest components to determine IRR and cash-on-cash returns across exit scenarios.',
      'Conducted sensitivity analysis on key value drivers, including daily active user growth and ad-revenue margins.',
      'Assessed the impact of significant cost-cutting measures on the ability to service high-yield debt obligations.',
    ],
    metrics: [
      { value: '$44B', label: 'Acquisition modeled' },
      { value: 'IRR', label: 'Multi-scenario returns' },
    ],
    tags: ['Excel', 'LBO', 'Debt Structuring', 'Sensitivity'],
  },
  {
    title: 'Merger Arbitrage — "ArbiTIM"',
    period: 'Nov — Dec 2025',
    category: 'Statistical Arbitrage',
    ref: 'M-03',
    icon: FiBarChart2,
    accent: 'oxblood',
    summary:
      'A market-neutral statistical-arbitrage strategy backtested across a decade of all-cash M&A deals, engineered for low beta and reduced volatility relative to the S&P 500.',
    points: [
      'Designed and backtested the "ArbiTIM" statistical-arbitrage strategy across 285 all-cash M&A deals ($500M+) from 2015–2024, constructing a market-neutral portfolio achieving low beta and reduced volatility relative to the S&P 500.',
      'Quantified deal-failure probabilities and modeled regulatory execution risk using R and Bloomberg Terminal.',
      'Optimized position sizing based on risk-adjusted return profiles and tail-risk scenarios.',
    ],
    metrics: [
      { value: '285', label: 'Deals analyzed' },
      { value: '2015–24', label: 'Backtest window' },
    ],
    tags: ['R', 'Bloomberg', 'Position Sizing', 'Market-Neutral'],
  },
];

export const approachQuote =
  'Markets reward those who test the consensus — not those who repeat it.';

export const principles = [
  {
    no: '01',
    title: 'Test the consensus',
    body: 'Every thesis starts by challenging the conventional explanation and letting the data settle the argument.',
    icon: FiTarget,
  },
  {
    no: '02',
    title: 'Model the downside first',
    body: 'Risk scenarios, stop-losses, and deal-failure probabilities come before any upside case is written.',
    icon: FiShield,
  },
  {
    no: '03',
    title: 'Quantitative meets fundamental',
    body: 'Pair statistical rigor with a genuine understanding of the business and the macro backdrop.',
    icon: FiLayers,
  },
  {
    no: '04',
    title: 'Communicate with clarity',
    body: 'A model is only as useful as the decision it informs — structure the story first, then the numbers.',
    icon: FiFeather,
  },
];

export const education = {
  school: 'Massachusetts Institute of Technology',
  degree: 'Bachelor of Science in Mathematics and Finance',
  location: 'Cambridge, Massachusetts',
  period: 'Expected May 2028',
  honors: ['Emerson / Harris Scholar', 'MIT Chamber Music Society'],
  coursework: [
    'Probability & Statistics',
    'Real Analysis',
    'Discrete Mathematics',
    'Laboratory in Investments',
    'Corporate Financial Accounting',
    'Taxes & Business Strategy',
    'Laboratory in Corporate Finance',
  ],
};

export const interests = [
  {
    title: 'Varsity Swimming & Diving',
    icon: FiAward,
    blurb:
      'NCAA Division III Finalist and 2025 Scholar All-American on MIT\u2019s Swimming & Diving program — discipline carried from the pool to the desk.',
  },
  {
    title: 'Long-Distance Running',
    icon: FiActivity,
    blurb:
      'Training for a first half-marathon — a study in patience, consistency, and pushing through mental blocks.',
  },
  {
    title: 'Surfing',
    icon: FiWind,
    blurb:
      'Hawaii-raised and most at home in the water — surfing is a study in timing, patience, and reading conditions you can\u2019t control.',
  },
  {
    title: 'Classical Violin',
    icon: FiMusic,
    blurb:
      'Violinist with the MIT Chamber Music Society, studying and performing classical repertoire.',
  },
  {
    title: 'Arts & Craft',
    icon: FiFeather,
    blurb:
      'Hands-on maker — crafting leather journals, drawing, and crocheting away from the screen.',
  },
  {
    title: 'Community Leadership',
    icon: FiUsers,
    blurb:
      'President of the MIT Hawaii Club, building community and connection across campus.',
  },
];

export const contactChannels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: FiMail },
  {
    label: 'LinkedIn',
    value: profile.linkedinHandle,
    href: profile.linkedin,
    icon: FiLinkedin,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^+\d]/g, '')}`,
    icon: FiPhone,
  },
  { label: 'Location', value: profile.location, href: null, icon: FiMapPin },
];
