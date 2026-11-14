export const profile = {
  name: "Amin Ahsan",
  title: "Finance & Accounting Professional",
  tagline: ["Driving Financial Discipline", "Ensuring Compliance", "Adding Business Value"],
  photo: "/amin.png",
  email: "ethanalan786@gmail.com",
  phone: "+92 (307) 4241757",
  address: "Street 1, Awami Villas 6, Phase 8, Bahria Town, Rawalpindi, Pakistan",
  link: "https://bit.ly/2HbhcAs",
  dob: "July 25, 1982",
};

export const banner = {
  big: "8+ Years",
  small: "of Expertise in Accounting & Financial Management",
};

export const skills = [
  { icon: "trend", label: "Accounts & Finance Management" },
  { icon: "calc", label: "Financial Analysis" },
  { icon: "target", label: "Budgeting & Forecasting" },
  { icon: "coins", label: "Cash Flow Management" },
  { icon: "shield", label: "Internal & External Audit" },
  { icon: "chart", label: "Profit & Loss Analysis" },
  { icon: "ship", label: "Import & Export Management" },
  { icon: "alert", label: "Risk Assessment & Mitigation" },
  { icon: "file", label: "Financial Reporting Skills" },
  { icon: "users", label: "Interpersonal Skills" },
  { icon: "chat", label: "Communication & Presentation Skills" },
] as const;

export const qualifications: { code: string; field?: string; detail: string }[] = [
  { code: "CA", field: "Accountancy and Auditing", detail: "Institute of Chartered Accountants of Pakistan (2017 – In Progress)" },
  { code: "APFA", field: "Accounting", detail: "Pakistan Institute of Public Finance Accountants (2009 – 2011)" },
  { code: "B.Com", field: "Commerce", detail: "University of Punjab, Lahore, Pakistan (2007 – 2009)" },
];

export const membership = {
  title: "Fellow Member (FPFA)",
  org: "Pakistan Institute of Public Finance Accountants (2018)",
};

export const summary =
  "Self-motivated, energetic and persuasive Finance & Accounting Professional with strong expertise in audit, taxation, budgeting and financial reporting, and a proven record of improving processes and delivering accurate results.";

export const whyAmin = [
  "**Task-focused analyst:** works across the organisation to meet business goals, streamlines processes, boosts productivity and implements technology solutions.",
  "**Diligent communicator:** builds client relationships, plans workflow to meet deadlines and manages financial reports and controls efficiently.",
  "**CA articleship completed** at Nasir Javaid Maqsood Imran Chartered Accountants, handling projects and audits of multinational companies.",
  "**16+ years** across construction, manufacturing, agriculture, consultancy and brokerage. Roles held: Manager Accounts, Manager Imports & Accounts, Deputy Manager Accounts & Finance and Chief Accountant.",
];

export const careerOpportunity =
  "Open to management-level Accounts & Finance roles across Pakistan (Islamabad, Lahore, Karachi) and remote positions internationally. On-site, hybrid or remote.";

export const areasOfExpertise = [
  { label: "Financial Management & Accounting", text: "Bookkeeping, financial reporting, annual accounts finalization, bank reconciliation, cash flow management, financial statements." },
  { label: "Taxation & Compliance", text: "Income tax, sales tax, withholding tax, return preparation and filing, regulatory compliance." },
  { label: "Imports & Banking", text: "Letters of Credit (LCs), open account payments, import documentation, customs clearance, landed cost evaluation, banking operations." },
  { label: "Tendering & Contracts", text: "Government tenders, bidding processes, bank guarantees, bid securities, performance guarantees, advance payment securities." },
  { label: "Payroll & Administration", text: "Payroll for head office employees and project-site workforce." },
  { label: "Audit & Financial Reporting", text: "External audit coordination, financial controls, compliance with accounting standards." },
];

export const moreSkills = [
  "Income Tax",
  "Corporate Tax",
  "IFRS",
  "US GAAP",
  "Internal Controls",
  "Corporate Finance",
  "Consolidation",
  "Variance Analysis",
  "Account Reconciliation",
  "Financial Planning",
  "Financial Transactions",
  "Cash Inflows & Outflows",
  "Account Administration",
  "Bank Account Maintenance",
  "Executive Financial Management",
  "Department Budget Management",
  "Account Direction",
  "Bookkeeping",
];

export const languages = [
  { name: "English", level: "Full professional proficiency" },
  { name: "Hindi", level: "Full professional proficiency" },
  { name: "Urdu", level: "Full professional proficiency" },
];

export const recommendations = [
  {
    name: "Munawar Almas",
    role: "Principal Consultant at Munawar Law Associates-LLP Lahore",
    context: "May 5, 2015, managed Amin directly",
    quote: "Mr Amin has done good work in my company.",
  },
  {
    name: "Nasir Gulzar",
    role: "Senior Partner at Nasir Javaid Maqsood Imran, Chartered Accountants",
    context: "November 24, 2012, was Amin's client",
    quote: "Amin has deep and detailed knowledge of the subject and is excellent at work.",
  },
];

export const expertise = [
  "Internal & External Audit",
  "Taxation",
  "Corporate Affairs",
  "Asset Verification",
  "Employees Provident Fund",
  "Inventory Management",
  "Payroll Processing",
  "Variance Analysis",
  "Cash Flow Management",
  "Budgeting & Forecasting",
  "Accounts Payable & Receivable",
  "Book Keeping",
  "Financial Reporting",
  "Financial Accounting",
  "Financial Management",
  "Import & Export Management",
  "Letters of Credit",
  "Bank Reconciliation",
  "Financial Analysis",
  "Profit & Loss Analysis",
  "Government Tendering",
  "Bank Guarantees",
];

export const keySkills = [
  "QuickBooks",
  "ERP Implementation",
  "IFRS & ISA",
  "Income Tax & Companies Ordinance",
  "Sales Tax Act",
  "Peachtree",
  "Microsoft Office",
];

export interface Job {
  company: string;
  role: string;
  meta?: string;
  period: string;
  points: string[];
  achievement?: string;
}

export const experience: Job[] = [
  {
    company: "Agency One",
    role: "Manager Accounts",
    meta: "Freelance · United States · Remote",
    period: "Sep 2025 – Present",
    points: [
      "**Agent payments:** scrutiny and verification of sales & purchase records for accurate, transparent and timely settlement.",
      "**Bookkeeping:** day-to-day operations, accurate financial records and proper recording of all transactions.",
      "**Bank reconciliation:** regular reconciliations, resolving discrepancies between bank statements and accounting records.",
      "**Payroll:** accurate salary calculations, timely disbursement and payroll records.",
    ],
  },
  {
    company: "RIAZ & SONS",
    role: "Manager Imports & Accounts",
    meta: "Full-time · Islamabad, Pakistan · On-site",
    period: "Sep 2023 – Aug 2025",
    points: [
      "**Site cash:** cash inflows and outflows at project sites, with records of receipts, payments and site transactions.",
      "**Imports (end-to-end):** opening LCs with various banks, purchase orders, supplier coordination, customs clearance and liaison with clearing agents.",
      "**Accounts:** bookkeeping of income, expenses, assets and liabilities.",
      "**Bank guarantees:** issuance, renewal and banking formalities for Pakistan Public Works Department (Pak PWD) contracts.",
      "**Tendering:** preparation, compilation and submission of tender documents and financial requirements for government departments.",
      "**Payroll:** Head Office staff and project-site workforce, including site workers' wages and records.",
    ],
  },
  {
    company: "ZKB Engineers and Constructors, Islamabad, Pakistan",
    role: "Manager – Accounts & Imports",
    period: "Apr 2015 – Present",
    points: [
      "**Imports:** LC & open-account payments, EI forms, clearing, landed costs and import register.",
      "**Securities:** issuance, renewal, reduction and release of bid, performance and mobilization advance securities for construction contracts.",
      "**Accounts:** book keeping and finalizing annual accounts.",
      "**Procurement:** bank guarantees and inland LC.",
    ],
    achievement:
      "Training needs analysis of employees led to a major cost saving in imports.",
  },
  {
    company: "National Pipe Group, Lahore, Pakistan",
    role: "Chief Accountant",
    period: "Dec 2014 – Mar 2015",
    points: [
      "**Records:** steel pipe & coil sales, HO cash and cheque receipts/payments, bank transactions and factory expenses.",
      "**Imports:** scrutinized import costs and prepared import documents, such as opening LC.",
      "**Tax-purpose financial statements** for Mian Muhammad & Co., Ajmair Steel Industries, Hajvery National Pipe and Seven Star Plastic Industries.",
    ],
  },
  {
    company: "Everfresh Farms (Pvt) Limited, Lahore, Punjab, Pakistan",
    role: "Deputy Manager Accounts & Finance",
    meta: "Full-time · On-site",
    period: "Dec 2016 – Mar 2019",
    points: [
      "**Consolidation:** branch accounts for Lahore and Karachi, complete bookkeeping, accurate records and reconciliation.",
      "**Tax:** withholding tax, income tax and sales tax; preparation and filing of periodic returns.",
      "**Annual accounts:** finalizing financial statements and coordinating with external auditors for the annual audit.",
    ],
  },
  {
    company: "Integrated Equities Pvt. Limited, Lahore, Pakistan",
    role: "Manager – Assurance and Advisory",
    period: "Feb 2013 – Nov 2014",
    points: [
      "**Client support:** accounting, taxation, ERP and corporate law matters.",
      "**Finance:** consultancy & brokerage records, income tax returns, monthly & annual financial statements.",
      "**Corporate filings:** Form A, Form 29 and others.",
      "**Compliance documents:** wealth statement, wealth reconciliation statement and net capital balance adequacy certificate.",
    ],
  },
];

export const additional = {
  text: "Intern – Nasir Javaid Maqsood Imran Chartered Accountants, Lahore, Pakistan",
  period: "Jun 2009 – Jan 2013",
  achievement:
    "Completed CA articleship while handling various projects and audit assignments of multinational companies.",
};