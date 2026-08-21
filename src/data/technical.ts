import type { TechnicalArea, TechnicalGovernanceMapping } from '../types/portfolio';

export const technicalContent = {
  hero: {
    eyebrow: 'Technical Depth',
    headline: ['Technical understanding', 'behind the governance.'],
    summary: 'Effective technology governance requires more than knowledge of policies and frameworks. It requires an understanding of how applications, infrastructure, security controls, data and operational processes work in practice.',
    perspective: 'My technical background spans enterprise IT operations, application development, infrastructure, automation, monitoring and security tooling — providing practical context for governance, risk and assurance decisions.',
  },
  foundation: [
    {
      title: 'Enterprise Operations',
      description: 'Experience across enterprise endpoint environments, vulnerability and patch management, golden images, Windows and Mac support, SLA-driven service and large user environments.',
      technologies: ['Endpoint environments', 'Patch management', 'Golden images', 'Windows / Mac', 'SLA support'],
      governanceRelevance: ['Operational dependencies', 'Endpoint risk', 'Service availability', 'Change impact'],
    },
    {
      title: 'Infrastructure Context',
      description: 'Hands-on exposure to virtualisation, systems administration, infrastructure projects, vendor coordination and security-related technology work.',
      technologies: ['Virtualisation', 'Systems administration', 'Infrastructure projects', 'Vendor coordination'],
      governanceRelevance: ['Configuration management', 'Technology ownership', 'Service dependencies', 'Operational risk'],
    },
  ] satisfies TechnicalArea[],
  application: {
    title: 'Application Engineering',
    description: 'Hands-on application development provides practical context for application architecture, APIs, authentication, data models, databases, software change, application controls, deployment and AI integration.',
    technologies: ['React', 'TypeScript', 'JavaScript', '.NET / ASP.NET Core', 'REST APIs', 'PostgreSQL', 'Git / GitHub', 'Docker'],
  },
  infrastructure: {
    title: 'Infrastructure & Observability Lab',
    description: 'A hands-on infrastructure and observability lab used to develop practical understanding of containerisation, service dependencies, configuration, network connectivity, DNS, monitoring, availability and troubleshooting. It is personal technical work, not enterprise production infrastructure.',
    technologies: ['Linux', 'Ubuntu Server', 'Docker', 'Docker Compose', 'Portainer', 'Networking', 'Cloudflare', 'Prometheus', 'Grafana', 'Uptime Monitoring', 'DNS', 'Pi-hole'],
    governanceRelevance: ['Containerisation', 'Service dependencies', 'Configuration', 'Observability', 'Patching lifecycle', 'Operational troubleshooting'],
  } satisfies TechnicalArea,
  security: {
    title: 'Security Monitoring',
    description: 'A controlled security-monitoring lab using Windows telemetry, Sysmon and Wazuh to explore event collection, security monitoring and detection workflows.',
    technologies: ['Wazuh', 'Sysmon', 'Windows event telemetry', 'SIEM concepts', 'Security monitoring', 'Detection', 'Log analysis'],
    governanceRelevance: ['Detective controls', 'Evidence', 'Monitoring', 'Security oversight'],
  } satisfies TechnicalArea,
  automation: {
    title: 'Automation & Digital Workflows',
    description: 'Technical automation knowledge supports the design of digital workflows that make governance requirements operational, visible and traceable.',
    technologies: ['Power Automate', 'SharePoint', 'Digital Workflows', 'Approvals', 'Process Automation', 'API Integration'],
    governanceRelevance: ['Approval routing', 'Ownership', 'Validation', 'Reminders', 'Escalation', 'Audit trails', 'Evidence', 'SLA visibility', 'Process consistency', 'Traceability'],
  } satisfies TechnicalArea,
  analytics: {
    title: 'Data & Analytics',
    description: 'Reporting and data capabilities help turn governance activity into practical management visibility and decision support.',
    technologies: ['Power BI', 'PBIP', 'SQL', 'SharePoint data', 'Dashboards', 'Reporting automation'],
    governanceRelevance: ['KPI reporting', 'KRI reporting', 'Compliance monitoring', 'SLA visibility', 'Management dashboards', 'Trend analysis', 'Audit/action tracking', 'Decision support'],
  } satisfies TechnicalArea,
  governanceMappings: [
    { area: 'Applications', understanding: 'APIs, data, application architecture, authentication and deployment.', governanceRelevance: 'Application controls, data governance, change risk, access and assurance.' },
    { area: 'Infrastructure', understanding: 'Linux, containers, networking, DNS and monitoring.', governanceRelevance: 'Availability, configuration, resilience, change and operational risk.' },
    { area: 'Security', understanding: 'Logs, telemetry, monitoring and detection.', governanceRelevance: 'Detective controls, assurance, evidence and security oversight.' },
    { area: 'Automation', understanding: 'Workflows, approvals and integrations.', governanceRelevance: 'Accountability, control enforcement, traceability and evidence.' },
    { area: 'Analytics', understanding: 'Dashboards, SQL and reporting.', governanceRelevance: 'KPIs, KRIs, management visibility and oversight.' },
  ] satisfies TechnicalGovernanceMapping[],
  closing: {
    headline: ['Technology understood.', 'Governance applied.'],
    summary: 'Hands-on technical experience provides the practical context needed to design governance requirements that are realistic, measurable and aligned with how technology actually operates.',
  },
};
