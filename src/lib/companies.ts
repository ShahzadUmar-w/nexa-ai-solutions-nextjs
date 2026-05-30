import companiesData from "@/data/companies.json";

export type Company = {
  /** Unique id (no spaces) — e.g. "acme-corp" */
  id: string;
  /** Company display name */
  name: string;
  /** Short label under the name — e.g. "Finance", "Legal" */
  industry: string;
  /**
   * Logo path from /public folder.
   * Example: put file at public/logos/acme.png → use "/logos/acme.png"
   * Leave empty "" to show name as text only.
   */
  logo: string;
  /** Optional link when user clicks the logo */
  website: string;
  /** Set false to hide without deleting the entry */
  enabled: boolean;
};

type CompaniesFile = {
  companies: Company[];
};

const data = companiesData as CompaniesFile;

/** All companies with enabled: true — edit src/data/companies.json to add more */
export function getCompanies(): Company[] {
  return data.companies.filter((company) => company.enabled);
}

export const COMPANIES_FILE_PATH = "src/data/companies.json";
