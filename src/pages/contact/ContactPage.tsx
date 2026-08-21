import { PageShell } from '../../components/layout/PageShell';
import { contactDetails } from '../../data/contact';
import '../../styles/contact.css';

export function ContactPage() {
  const linkedIn = contactDetails.socialLinks.find((link) => link.label === 'LinkedIn');
  const github = contactDetails.socialLinks.find((link) => link.label === 'GitHub');

  return (
    <PageShell activePage="contact">
      <div className="contact-page">
        <section className="contact-hero" aria-labelledby="contact-title">
          <div className="site-container contact-hero-layout">
            <div>
              <p className="eyebrow">Contact</p>
              <h1 id="contact-title">Governance.<br />Risk.<br />Technology.</h1>
            </div>
            <div className="contact-hero-copy">
              <p>Interested in strengthening technology governance, regulatory readiness, control effectiveness or digital assurance?</p>
              <p>I&apos;m open to conversations around IT governance, technology risk, cybersecurity assurance, compliance and technology transformation.</p>
              <p className="contact-location">Based in {contactDetails.location}, with professional experience across regulated enterprise technology environments.</p>
            </div>
          </div>
        </section>

        <section className="contact-section interest-section" aria-labelledby="interest-title">
          <div className="site-container">
            <div className="contact-section-header">
              <p className="section-label">01 / Areas of Interest</p>
              <h2 id="interest-title">Professional conversations around technology governance.</h2>
            </div>
            <ul className="interest-list">
              {contactDetails.discussionAreas.map((area, index) => <li key={area}><span>{String(index + 1).padStart(2, '0')}</span>{area}</li>)}
            </ul>
          </div>
        </section>

        <section className="contact-section connect-section" aria-labelledby="connect-title">
          <div className="site-container">
            <div className="contact-section-header">
              <p className="section-label">02 / Connect</p>
              <h2 id="connect-title">Choose the right channel for the conversation.</h2>
            </div>
            <div className="contact-methods">
              {linkedIn && <a className="contact-method contact-method--primary" href={linkedIn.href} rel="noopener noreferrer" target="_blank"><span className="contact-method-label">LinkedIn</span><strong>Connect on LinkedIn <span aria-hidden="true">↗</span></strong><small>Professional profile and direct connection.</small></a>}
              <a className="contact-method" href={`mailto:${contactDetails.email}`}><span className="contact-method-label">Email</span><strong>{contactDetails.email}</strong><small>For professional enquiries and introductions.</small></a>
              {github && <a className="contact-method" href={github.href} rel="noopener noreferrer" target="_blank"><span className="contact-method-label">GitHub</span><strong>View GitHub <span aria-hidden="true">↗</span></strong><small>Technical work and public repositories.</small></a>}
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
