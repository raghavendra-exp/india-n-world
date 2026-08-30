import { Source } from "./types";

export const SOURCES: Record<string, Source> = {
  myscheme: { name: "myScheme (Govt of India)", url: "https://www.myscheme.gov.in" },
  pib: { name: "Press Information Bureau", url: "https://pib.gov.in" },
  mea: { name: "Ministry of External Affairs", url: "https://www.mea.gov.in" },
  budget: { name: "Union Budget Documents", url: "https://www.indiabudget.gov.in" },
  moa: { name: "Ministry of Agriculture & Farmers Welfare", url: "https://agriwelfare.gov.in" },
  mord: { name: "Ministry of Rural Development", url: "https://rural.gov.in" },
  mohfw: { name: "Ministry of Health & Family Welfare", url: "https://mohfw.gov.in" },
  moha: { name: "Ministry of Housing & Urban Affairs", url: "https://mohua.gov.in" },
  mnre: { name: "Ministry of New and Renewable Energy", url: "https://mnre.gov.in" },
  msde: { name: "Ministry of Skill Development & Entrepreneurship", url: "https://msde.gov.in" },
  dpiit: { name: "Dept. for Promotion of Industry & Internal Trade", url: "https://dpiit.gov.in" },
  meity: { name: "Ministry of Electronics and Information Technology", url: "https://www.meity.gov.in" },
  moe: { name: "Ministry of Education", url: "https://www.education.gov.in" },
  mowcd: { name: "Ministry of Women & Child Development", url: "https://wcd.nic.in" },
  jjm: { name: "Jal Jeevan Mission, Dept. of Drinking Water & Sanitation", url: "https://jaljeevanmission.gov.in" },
  isro: { name: "Indian Space Research Organisation", url: "https://www.isro.gov.in" },
  un: { name: "United Nations", url: "https://www.un.org" },
  unsc: { name: "UN Security Council", url: "https://www.un.org/securitycouncil" },
  wto: { name: "World Trade Organization", url: "https://www.wto.org" },
  imf: { name: "International Monetary Fund", url: "https://www.imf.org" },
  worldbank: { name: "World Bank", url: "https://www.worldbank.org" },
  who: { name: "World Health Organization", url: "https://www.who.int" },
  brics: { name: "BRICS India 2026 (official presidency site)", url: "https://www.brics2026.gov.in" },
  asean: { name: "ASEAN Secretariat", url: "https://asean.org" },
  g20: { name: "G20 official portal", url: "https://www.g20.org" },
  eu: { name: "European Union / EEAS India page", url: "https://www.eeas.europa.eu" },
  iora: { name: "Indian Ocean Rim Association", url: "https://www.iora.int" },
  ukgov: { name: "UK Government (GOV.UK)", url: "https://www.gov.uk" },
};

// Update this whenever you refresh the dataset — shown across the app
// so users know how fresh time-sensitive facts are.
export const LAST_VERIFIED =
  "Web-verified against current sources as of August 2026 — re-check the linked official source before relying on this in an exam answer, since rosters (BRICS, SCO, G20 presidency order) and bilateral developments change frequently.";
