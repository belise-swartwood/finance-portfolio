import {
  FiActivity,
  FiAward,
  FiBarChart2,
  FiBriefcase,
  FiCode,
  FiCompass,
  FiDatabase,
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
  'Equities',
  'Credit',
  'FX / Rates',
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
  { value: 3, suffix: '', label: 'Research & policy roles' },
  { value: 2028, suffix: '', label: 'MIT class year', isYear: true },
];

export const aboutHighlights = [
  { label: 'Degree', value: 'B.S. Mathematics & Finance' },
  { label: 'Institution', value: 'MIT — Class of 2028' },
  { label: 'Toolkit', value: 'Python · R · MATLAB · Excel' },
  { label: 'Focus', value: 'DCF · LBO · M&A · Macro' },
];

export const experiences = [
  {
    role: 'ML Neuroscience Researcher',
    company: 'Massachusetts General Hospital',
    location: 'Boston, Massachusetts',
    period: 'Feb 2025 — Dec 2025',
    icon: FiActivity,
    accent: 'forest',
    points: [
      'Developed a continuous LASSO regression model reaching a 0.71 R-squared to identify the top 8 factors driving clinically significant depression treatment response.',
      'Validated clinical significance with a classification model achieving an AUC of 0.84.',
      'Processed and annotated 2 fMRI datasets to evaluate brain connectivity network patterns.',
      'Presented at the Gerontological Society of America conference 2025 and served as first author of a manuscript prepared for journal submission.',
    ],
    tags: ['LASSO Regression', 'Classification', 'fMRI', 'Python'],
  },
  {
    role: 'Undergraduate Researcher',
    company: 'Growing Islands — Rebuilding Beaches & Protecting Coastlines, MIT',
    location: 'Cambridge, Massachusetts',
    period: 'Oct 2024 — Feb 2025',
    icon: FiGlobe,
    accent: 'brass',
    points: [
      'Designed and tested physical prototypes that minimized sediment displacement by 20% and optimized wave disruption by 15%.',
      'Conducted controlled lab experiments and numerical simulations to analyze sediment movement.',
      'Trained a machine learning model on coastal imagery to classify and predict sediment transport patterns.',
    ],
    tags: ['Prototyping', 'Numerical Simulation', 'Computer Vision'],
  },
  {
    role: 'Legislative Intern',
    company: 'Hawaii State House of Representatives',
    location: 'Honolulu, Hawaii',
    period: 'Jun 2024 — Aug 2024',
    icon: FiBriefcase,
    accent: 'oxblood',
    points: [
      'Increased social media engagement by 50% and audience reach by 30% through a targeted campaign strategy.',
      'Analyzed voter outreach data to optimize marketing platform usage.',
      'Supported community engagement through canvassing and event coordination.',
    ],
    tags: ['Data Analysis', 'Strategy', 'Communications'],
  },
];

export const skillGroups = [
  {
    title: 'Programming & Analytics',
    icon: FiCode,
    items: [
      { name: 'Python (Pandas, NumPy)', level: 92 },
      { name: 'R / R-Studio', level: 85 },
      { name: 'MATLAB', level: 72 },
      { name: 'Excel & Financial Modeling', level: 94 },
    ],
  },
  {
    title: 'Financial Modeling',
    icon: FiTrendingUp,
    items: [
      { name: 'DCF Valuation', level: 90 },
      { name: 'LBO Modeling', level: 86 },
      { name: 'M&A Analysis', level: 84 },
      { name: 'Financial Statement Analysis', level: 88 },
    ],
  },
  {
    title: 'Quantitative Methods',
    icon: FiBarChart2,
    items: [
      { name: 'Regression & LASSO', level: 82 },
      { name: 'Strategy Backtesting', level: 84 },
      { name: 'Sensitivity Analysis', level: 86 },
      { name: 'Statistical Inference', level: 83 },
    ],
  },
  {
    title: 'Platforms & Data',
    icon: FiDatabase,
    items: [
      { name: 'Bloomberg Terminal', level: 80 },
      { name: 'FRED / BLS / CME Data', level: 82 },
      { name: 'PowerPoint & Reporting', level: 90 },
    ],
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
      'Independent macro research recommending a long USD/TRY position, backed by purpose-built rates and inflation models.',
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
      'A market-neutral merger-arbitrage strategy backtested across a decade of all-cash M&A deals.',
    points: [
      'Developed and backtested the "ArbiTIM" merger-arbitrage strategy using 285 all-cash M&A deals ($500M+ value) from 2015–2024, achieving low market correlation and reduced volatility.',
      'Leveraged R-Studio and Bloomberg Terminal to analyze risk-adjusted returns and deal-failure probabilities.',
      'Identified key regulatory and execution risks to optimize a portfolio designed for long-term institutional investors.',
    ],
    metrics: [
      { value: '285', label: 'Deals analyzed' },
      { value: '2015–24', label: 'Backtest window' },
    ],
    tags: ['R', 'Bloomberg', 'Backtesting', 'Market-Neutral'],
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
    'Laboratory in Corporate Finance',
    'Laboratory in Investments',
    'Corporate Financial Accounting',
    'Taxes & Business Strategy',
    'Economic Analysis for Business Decisions',
    'Mergers, Acquisitions & Private Equity',
    'Probability',
    'Statistics',
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
