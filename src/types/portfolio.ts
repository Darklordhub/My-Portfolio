export type Theme = 'dark' | 'light';

export type PageKey =
  | 'home'
  | 'governance'
  | 'experience'
  | 'case-studies'
  | 'technical'
  | 'credentials'
  | 'contact';

export interface NavigationItem {
  id: PageKey;
  label: string;
  path: string;
}

export interface Profile {
  monogram: string;
  name: string;
  role: string;
  tagline: string;
  location: string;
}

export interface FoundationContent {
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface GovernanceCapability {
  number: string;
  title: string;
  description: string;
  themes: string[];
}

export interface GovernanceApproachStage {
  number: string;
  title: string;
  description: string;
  activities: string[];
}

export interface GovernancePrinciple {
  title: string;
  description: string;
}

export interface ExperienceRole {
  period: string;
  role: string;
  organisation: string;
  summary: string;
  highlights: string[];
  tags: string[];
  isCurrent?: boolean;
  metric?: string;
}

export interface ExperienceTheme {
  title: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  number: string;
  category: string;
  title: string;
  intro: string;
  context: string;
  challenge: string;
  approach: string[];
  outcome: string;
  tags: string[];
  optionalMetric?: string;
}

export interface TechnicalArea {
  title: string;
  description: string;
  technologies: string[];
  governanceRelevance?: string[];
}

export interface TechnicalGovernanceMapping {
  area: string;
  understanding: string;
  governanceRelevance: string;
}
