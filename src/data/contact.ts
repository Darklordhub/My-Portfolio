import type { SocialLink } from '../types/portfolio';

export const contactDetails = {
  email: 'mohamed.badri95@hotmail.com',
  location: 'Bahrain',
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
