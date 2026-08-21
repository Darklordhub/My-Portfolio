import type { Credential } from '../types/portfolio';

export const credentialsContent = {
  hero: {
    eyebrow: 'Professional Credentials',
    headline: ['Governance credentials.', 'Technical foundations.'],
    summary: 'A professional credential base spanning IT audit, technology governance, payment-security compliance, cybersecurity, service management and enterprise technology.',
    perspective: 'The combination reflects a career progression from hands-on technology into assurance, transformation and governance.',
  },
  credentials: [
    {
      name: 'CISA',
      issuer: 'ISACA',
      fullName: 'Certified Information Systems Auditor',
      category: 'Audit & Governance',
      relevance: 'IT audit, governance, assurance, risk and control evaluation.',
      group: 'governance',
      supports: ['Control evaluation', 'Evidence', 'Audit readiness', 'Technology assurance'],
    },
    {
      name: 'CPISI Advanced',
      issuer: 'SISA',
      category: 'Payment Security & Compliance',
      relevance: 'Payment security, PCI DSS, security implementation and compliance.',
      group: 'governance',
      supports: ['PCI DSS awareness', 'Payment-security controls', 'Compliance'],
    },
    {
      name: 'Security+',
      issuer: 'CompTIA',
      category: 'Cybersecurity',
      relevance: 'Cybersecurity principles, security controls, risk and technical security foundations.',
      group: 'governance',
      supports: ['Security principles', 'Technology risk', 'Technical controls'],
    },
    {
      name: 'ITIL 4',
      issuer: 'PeopleCert',
      category: 'IT Service Management',
      relevance: 'IT service management, service governance, continual improvement and operational alignment.',
      group: 'governance',
      supports: ['Service governance', 'Operational alignment', 'Continual improvement'],
    },
    {
      name: 'MCSA',
      issuer: 'Microsoft',
      fullName: 'Microsoft Certified Solutions Associate',
      category: 'Systems',
      relevance: 'Enterprise Microsoft technology and systems-administration foundation.',
      group: 'technical',
      supports: ['Enterprise systems', 'Infrastructure understanding'],
    },
    {
      name: 'MCSD',
      issuer: 'Microsoft',
      fullName: 'Microsoft Certified Solutions Developer',
      category: 'Development',
      relevance: 'Application development and software-engineering foundation.',
      group: 'technical',
      supports: ['Application architecture', 'Software-delivery understanding'],
    },
  ] satisfies Credential[],
};
