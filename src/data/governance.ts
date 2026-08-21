import type {
  GovernanceApproachStage,
  GovernanceCapability,
  GovernancePrinciple,
} from '../types/portfolio';

export const governanceContent = {
  hero: {
    eyebrow: 'Governance & Technology Advisory',
    headline: ['Turning requirements into', 'effective technology governance.'],
    summary:
      'Governance should enable informed decisions, clear accountability and sustainable technology outcomes — not simply create additional process.',
    detail:
      'My experience spans technology governance, risk and controls, regulatory assurance, vendor and contract governance, resilience, audit readiness and digital transformation.',
    perspective:
      'I apply governance with an understanding of how technology is actually procured, designed, operated, monitored and changed.',
  },
  capabilities: [
    {
      number: '01',
      title: 'IT Governance & Oversight',
      description: 'Supporting governance structures, policies, standards and decision processes that establish clear ownership, accountability and oversight across technology activities.',
      themes: ['Technology Governance', 'Policy & Standards', 'Accountability', 'Approvals', 'Technology Oversight', 'Decision Support', 'Governance Procedures'],
    },
    {
      number: '02',
      title: 'Technology Risk & Controls',
      description: 'Connecting technology risk with practical control design, validation, ownership, remediation and ongoing monitoring.',
      themes: ['Technology Risk', 'Control Objectives', 'Control Design', 'Control Validation', 'KPIs', 'KRIs', 'Risk Treatment', 'Remediation'],
    },
    {
      number: '03',
      title: 'Contract & Vendor Governance',
      description: 'Applying governance and compliance oversight across technology contracts, vendor agreements, licensing, renewals, service obligations and SLAs.',
      themes: ['IT Contracts', 'Vendor Governance', 'Licensing', 'Renewals', 'SLAs', 'Service Obligations', 'Acceptance Criteria', 'Risk Considerations'],
    },
    {
      number: '04',
      title: 'Regulatory & Compliance Assurance',
      description: 'Supporting technology environments in meeting regulatory, information-security and industry-standard obligations through structured controls, evidence and compliance monitoring.',
      themes: ['PCI DSS', 'ISO 27001', 'Compliance Monitoring', 'Evidence', 'Regulatory Readiness', 'Control Effectiveness', 'Audit Readiness'],
    },
    {
      number: '05',
      title: 'Resilience & Continuity Governance',
      description: 'Supporting enterprise resilience through Business Impact Analysis, criticality assessment, dependency understanding, risk evaluation and continuity readiness.',
      themes: ['Business Impact Analysis', 'Criticality Assessment', 'Dependency Mapping', 'Risk Scoring', 'Recovery Requirements', 'Business Continuity', 'Scenario Exercises', 'Organisational Readiness'],
    },
    {
      number: '06',
      title: 'Governance Reporting & Assurance',
      description: 'Creating governance visibility through management reporting, dashboards, indicators, evidence and structured follow-up of risks, compliance activities and audit actions.',
      themes: ['Governance Dashboards', 'Management Reporting', 'Compliance Status', 'Audit Actions', 'Risk Monitoring', 'SLA Monitoring', 'Evidence', 'Escalation'],
    },
  ] satisfies GovernanceCapability[],
  approach: [
    {
      number: '01',
      title: 'Understand',
      description: 'Establish the business, technology and regulatory context before defining governance requirements.',
      activities: ['Business objectives', 'Technology environment', 'Stakeholders', 'Obligations', 'Operational context'],
    },
    {
      number: '02',
      title: 'Assess',
      description: 'Evaluate current-state risk, control effectiveness and areas where governance needs strengthening.',
      activities: ['Technology risk', 'Current controls', 'Governance gaps', 'Ownership', 'Evidence'],
    },
    {
      number: '03',
      title: 'Design',
      description: 'Translate requirements and risk into practical governance structures, controls and measurable expectations.',
      activities: ['Controls', 'Procedures', 'Accountability', 'Reporting', 'Evidence expectations'],
    },
    {
      number: '04',
      title: 'Implement',
      description: 'Embed governance into real operating practices rather than leaving it solely at policy level.',
      activities: ['Operational processes', 'Workflows', 'Approvals', 'Stakeholder ownership', 'Reporting mechanisms'],
    },
    {
      number: '05',
      title: 'Assure',
      description: 'Evaluate whether governance activities are operating effectively and support continued improvement.',
      activities: ['Monitoring', 'KPIs / KRIs', 'Audit readiness', 'Remediation', 'Management visibility'],
    },
  ] satisfies GovernanceApproachStage[],
  stakeholders: ['IT Leadership', 'Business Functions', 'Internal Audit', 'Risk', 'Legal', 'Procurement', 'Information Security', 'Vendors & Technology Partners'],
  transformation: {
    description: 'Digital transformation is more sustainable when governance, ownership, controls, traceability and measurable outcomes are designed into the process from the beginning.',
    themes: ['Procurement governance', 'RFx & evaluation traceability', 'Contract & vendor governance', 'Process redesign', 'Workflow automation', 'Resilience technology', 'KPI dashboards', 'SLA visibility', 'Change adoption', 'Initiative prioritisation'],
  },
  principles: [
    { title: 'Business-Aligned', description: 'Governance should support organisational objectives rather than operate independently from them.' },
    { title: 'Risk-Based', description: 'Control effort should reflect the level and context of technology risk.' },
    { title: 'Accountable', description: 'Ownership and decision responsibility should be explicit.' },
    { title: 'Evidence-Driven', description: 'Governance and controls should produce reliable evidence that demonstrates operation.' },
    { title: 'Practical', description: 'Requirements should be sustainable within the actual technology environment.' },
    { title: 'Measurable', description: 'Governance effectiveness should be visible through meaningful indicators, monitoring and assurance.' },
  ] satisfies GovernancePrinciple[],
};
