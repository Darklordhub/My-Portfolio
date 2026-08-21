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
  name: string;
  tagline: string;
}

export interface FoundationContent {
  description: string;
}

