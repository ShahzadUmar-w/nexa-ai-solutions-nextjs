export type ClientProject = {
  name: string;
  industry: string;
  task: string;
  /** File name inside public/companilogo/ */
  img: string;
  icon: string;
};

export const CLIENT_PROJECTS: ClientProject[] = [
  { name: "Ademola", industry: "Word AI Plugin", task: "AI Integration for Review", img: "ademola.png", icon: "AD" },
  { name: "AJ Word Addin", industry: "Word Add-in", task: "Custom Document Tools", img: "ajwordaddin.png", icon: "AJ" },
  { name: "Ally Word", industry: "Legal Tech", task: "Word Add-in Development", img: "ally-word-addin.ico", icon: "AL" },
  { name: "Amafive", industry: "Solution", task: "Custom Add-in Logic", img: "amafive.png", icon: "AM" },
  { name: "Boligfloe", industry: "Real Estate", task: "Outlook Management", img: "boligfloe.png", icon: "BO" },
  { name: "DataHive", industry: "Data Analytics", task: "Excel Data Sync", img: "dataHive.png", icon: "DH" },
  { name: "Doccpet", industry: "Automation", task: "Document Workflows", img: "doccpet.png", icon: "DC" },
  { name: "Ericson", industry: "Enterprise", task: "Excel Customization", img: "ericson.png", icon: "ER" },
  { name: "Excel Ticktack", industry: "Finance", task: "Excel Tool Integration", img: "excel-addinticktack.png", icon: "ET" },
  { name: "Fyendera", industry: "AI Solutions", task: "Email AI Automations", img: "Fyndera.png", icon: "FY" },
  { name: "GesDoc", industry: "Integration", task: "Attachment Management", img: "gesDoc.png", icon: "GD" },
  { name: "GoCanopy", industry: "Outlook", task: "Internal System Link", img: "gocanopy.png", icon: "GC" },
  { name: "Istadraq", industry: "Legal AI", task: "Word Legal Assistant", img: "istadraq.png", icon: "IS" },
  { name: "Kory AI", industry: "Technology", task: "AI Workflow Agent", img: "Kory-ai-logo.png", icon: "KA" },
  { name: "Mail Proven", industry: "Security", task: "Fingerprint Match Add-in", img: "mailproven.png", icon: "MP" },
  { name: "Makhf", industry: "Finance", task: "Outlook Tracker", img: "makhf.png", icon: "MK" },
  { name: "Portant", industry: "Automation", task: "Document Automation", img: "portant.png", icon: "PO" },
  { name: "SharePoint", industry: "Collaboration", task: "Microsoft Integration", img: "sharepoint.png", icon: "SP" },
  { name: "Time Tackle", industry: "Calendar", task: "Schedule Optimization", img: "timetackle.png", icon: "TT" },
  { name: "TransitChat", industry: "Communication", task: "Outlook Integration", img: "transitchat.png", icon: "TC" },
];

export const CLIENT_LOGO_BASE = "/companilogo";
