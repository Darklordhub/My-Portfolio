import { contactDetails } from '../../data/contact';
import { profile } from '../../data/profile';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-inner">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p>IT Governance · Risk · Assurance</p>
        </div>
        <div className="footer-meta">
          <p>{contactDetails.location}</p>
          <p>© {new Date().getFullYear()}</p>
        </div>
        <div aria-label="Professional links" className="footer-social-links">
          {contactDetails.socialLinks.map((link) => (
            <a href={link.href} key={link.label} rel="noopener noreferrer" target="_blank">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
