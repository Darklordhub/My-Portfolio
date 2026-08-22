import type { ExperienceRole } from '../types/portfolio';

export const experienceContent = {
  hero: {
    headline: ['From technical operations', 'to technology governance.'],
    summary:
      'Experience spanning enterprise IT operations, assurance, digital transformation and technology governance.',
  },
  roles: [
    {
      period: 'February 2026 — Present',
      role: 'Senior Governance Analyst',
      organisation: 'Gulf Air',
      summary:
        'Technology governance, regulatory assurance, risk and control oversight across enterprise technology activities.',
      highlights: [
        'Govern technology contracts, vendors, licensing, renewals and SLAs.',
        'Maintain governance controls, KPIs/KRIs and compliance monitoring.',
        'Support technology risk, remediation, audit readiness and regulatory assurance.',
        'Support resilience governance, BIA and management reporting.',
      ],
      isCurrent: true,
    },
    {
      period: 'March 2024 — January 2026',
      role: 'Senior Digital Transformation & Process Automation Analyst',
      organisation: 'Gulf Air',
      summary:
        'Led and supported enterprise process automation, digital transformation and governance-enabled workflow improvement.',
      highlights: [
        'Led process automation and redesign across enterprise workflows.',
        'Supported procurement and vendor governance with audit-ready traceability.',
        'Developed KPI/SLA visibility and governance mechanisms.',
        'Coordinated change, adoption and technology initiatives.',
      ],
      metric: '40+ processes mapped and redesigned',
    },
    {
      period: 'November 2022 — March 2024',
      role: 'IT Quality Assurance & Compliance Specialist',
      organisation: 'Gulf Air',
      summary: 'Focused on technology compliance, control assurance and regulatory readiness.',
      highlights: [
        'Supported PCI DSS and ISO 27001 compliance activities.',
        'Reviewed contracts, controls and governance requirements.',
        'Supported audit evidence, control validation and remediation.',
        'Coordinated BIA and continuity-readiness activities.',
      ],
    },
    {
      period: 'May 2021 — November 2022',
      role: 'Desktop Engineer',
      organisation: 'Gulf Air',
      summary: 'Enterprise endpoint engineering and operational support in a large aviation environment.',
      highlights: [
        'Supported vulnerability and patch management.',
        'Maintained enterprise endpoint and golden-image standards.',
        'Provided Windows and Mac support across a large user environment.',
      ],
      metric: '2,000+ users supported',
    },
    {
      period: 'October 2019 — December 2020',
      role: 'Information Technology Specialist',
      organisation: 'Shura Council',
      summary: 'Public-sector IT operations, infrastructure and technology project delivery.',
      highlights: [
        'Supported security and infrastructure projects.',
        'Coordinated technology vendors and procurement activities.',
        'Contributed to online parliamentary-session technology delivery during COVID-19.',
        'Supported patch management and virtualisation.',
      ],
    },
  ] satisfies ExperienceRole[],
};
