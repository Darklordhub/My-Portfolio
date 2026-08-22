import { PageShell } from '../../components/layout/PageShell';
import { contactDetails } from '../../data/contact';
import '../../styles/contact.css';

export function ContactPage() {
  const linkedIn = contactDetails.socialLinks.find((link) => link.label === 'LinkedIn');
  const github = contactDetails.socialLinks.find((link) => link.label === 'GitHub');

  return (
    <PageShell activePage="contact">
      <div className="contact-page">
        <section className="contact-content" aria-labelledby="contact-title">
          <div className="site-container contact-grid">
            <div>
              <p className="page-label">Contact</p>
              <h1 id="contact-title">Governance.<br />Risk.<br />Technology.</h1>
              <p className="contact-introduction">Open to consulting engagements and professional opportunities in IT governance, technology risk, assurance, compliance and digital transformation.</p>
            </div>
            <div className="contact-details">
              <ul className="contact-links">
                {linkedIn && <li><a href={linkedIn.href} rel="noopener noreferrer" target="_blank">LinkedIn <span aria-hidden="true">{'↗'}</span></a></li>}
                <li><a href={`mailto:${contactDetails.email}`}>Email me <span aria-hidden="true">{'↗'}</span></a></li>
                {github && <li><a href={github.href} rel="noopener noreferrer" target="_blank">GitHub <span aria-hidden="true">{'↗'}</span></a></li>}
              </ul>
              <p className="contact-location">{contactDetails.location}</p>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
