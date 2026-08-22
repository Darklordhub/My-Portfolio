export type Theme = 'dark' | 'light';

export type PageKey = 'home' | 'experience' | 'contact';

export interface NavigationItem {
  id: PageKey;
  label: string;
  path: string;
}

export interface Profile {
  monogram: string;
  name: string;
  role: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface ExperienceRole {
  period: string;
  role: string;
  organisation: string;
  summary: string;
  highlights: string[];
  isCurrent?: boolean;
  metric?: string;
}
