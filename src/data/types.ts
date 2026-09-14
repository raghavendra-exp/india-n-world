export interface Scheme {
  id: string;
  name: string;
  ministry: string;
  launchYear: number;
  type: string;
  sector: string;
  target: string;
  benefit: string;
  funding: string;
  dbt: boolean;
  objective: string;
  implementation: string;
  currentStatus: string;
  achievements: string;
  challenges: string;
  convergence: string[];
  sdgs: string[];
  constitutionalLinks: string[];
  prelims: string[];
  mains: string;
  keywords: string[];
  sourceKey: string;
  prelimsRelevance: number;
  mainsRelevance: number;
}

export interface Country {
  id: string;
  name: string;
  region: string;
  capital: string;
  relationship: string;
  trade: string;
  defence: string;
  technology: string;
  diaspora: string;
  security: string;
  organisations: string[];
  strategicSignificance: string;
  challenges: string;
  prelims: string[];
  mains: string;
  sourceKey: string;
}

export interface Organisation {
  id: string;
  name: string;
  established: string;
  headquarters: string;
  members: string[];
  indiaStatus: string;
  purpose: string;
  initiatives: string[];
  indiaRole: string;
  currentIssues: string;
  prelims: string[];
  sourceKey: string;
  lastVerified: string;
  membershipUncertain?: boolean;
}

export interface MCQ {
  id: string;
  topic: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  trap: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

export interface MainsQuestion {
  id: string;
  gsPaper: string;
  topic: string;
  directive: string;
  wordLimit: number;
  time: number;
  question: string;
  keywords: string[];
}

export interface Source {
  name: string;
  url: string;
}

export interface Doctrine {
  id: string;
  name: string;
  period: string;
  announcedBy: string;
  summary: string;
  keyIdeas: string[];
  evolution: string;
  currentRelevance: string;
  prelims: string[];
  mains: string;
  sourceKey: string;
}

export interface CurrentAffair {
  id: string;
  date: string;
  title: string;
  category: string;
  summary: string;
  background: string;
  whatChanged: string;
  indiaInterest: string;
  prelims: string[];
  mains: string;
  staticLinks: string[];
  sourceKey: string;
}

export interface MapNode {
  id: string;
  name: string;
  category: "port" | "chokepoint" | "corridor";
  region: string;
  countryOrBody: string;
  coords: { x: number; y: number }; // SVG coordinates for viewBox 0 0 1000 560
  latLon: { lat: number; lon: number };
  strategicSignificance: string;
  indiaRelevance: string;
  latestStatus: string;
  prelimsFacts: string[];
  linkId?: string; // e.g. "iran", "oman", "indonesia"
  sourceKey: string;
}

export interface PYQItem {
  id: string;
  exam: string;
  year: number;
  topic: string;
  question: string;
  options: string[];
  correctOption: number;
  bookReference: {
    pavneetSingh?: string;
    pushpeshPant?: string;
    officialSource?: string;
    ncertOrPib?: string;
  };
  plainExplanation: string;
  optionElimination: Record<string, string>;
  topperTrick: string;
}
