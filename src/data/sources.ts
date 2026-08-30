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
  un: { name: "United Nations", url: "https://www.un.org" },
  brics: { name: "BRICS official portal", url: "https://brics.br" },
  asean: { name: "ASEAN Secretariat", url: "https://asean.org" },
};

// Update this whenever you refresh the dataset — shown across the app
// so users know how fresh time-sensitive facts are.
export const LAST_VERIFIED =
  "2026-01 (model knowledge cutoff — re-check the linked official source before relying on this in an exam answer)";
