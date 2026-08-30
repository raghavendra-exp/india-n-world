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
