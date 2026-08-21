import type { SocialLink } from '../types/portfolio';

export const contactDetails = {
  email: 'mohamed.badri@hotmail.com',
  location: 'Bahrain',
  discussionAreas: [
    'IT Governance',
    'Technology Risk',
    'IT Assurance',
    'Regulatory Compliance',
    'Cybersecurity Governance',
    'Digital Governance',
    'Technology Transformation',
  ],
  socialLinks: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mohamed-badri-profile9191/',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/Darklordhub',
    },
  ] satisfies SocialLink[],
};
