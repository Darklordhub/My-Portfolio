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
