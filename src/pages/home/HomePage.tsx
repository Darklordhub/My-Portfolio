import { Reveal } from '../../components/effects/Reveal';
import { TiltCard } from '../../components/effects/TiltCard';
import { PageShell } from '../../components/layout/PageShell';
import { contactDetails } from '../../data/contact';
import { homeContent } from '../../data/home';
import { profile } from '../../data/profile';
import { sitePath } from '../../utils/paths';
import '../../styles/home.css';

export function HomePage() {
  const linkedIn = contactDetails.socialLinks.find((link) => link.label === 'LinkedIn');

  return (
    <PageShell activePage="home">
      <div className="homepage">
        <section className="home-hero" aria-labelledby="hero-title">
          <div className="site-container home-hero-grid">
            <div>
              <p className="profile-name">{profile.name}</p>
              <p className="profile-role">{profile.role}</p>
              <h1 id="hero-title">
                {homeContent.hero.headline.map((line) => <span key={line}>{line}</span>)}
              </h1>
              <div className="home-introduction">
                <p>{homeContent.hero.introduction}</p>
                <p>{homeContent.hero.perspective}</p>
                <p className="availability-line">{homeContent.hero.availability}</p>
              </div>
              <div className="home-actions">
                <a className="button-link button-link--primary" href={sitePath('experience/')}>
                  View Experience <span aria-hidden="true">{'→'}</span>
                </a>
                <a className="button-link" href={sitePath('contact/')}>Contact</a>
              </div>
            </div>
            <TiltCard className="hero-focus-panel">
              <aside aria-label="Professional focus and current role">
                <p className="panel-label">Professional focus</p>
                <ul className="professional-focus-list">
                  <li>IT Governance</li>
                  <li>Technology Risk</li>
                  <li>Assurance</li>
                  <li>Digital Transformation</li>
                </ul>
                <div className="current-role-panel">
                  <p className="panel-label">Current role</p>
                  <p className="current-role-title">{homeContent.career.role}</p>
                  <p>{homeContent.career.organisation}</p>
                  <p>{homeContent.career.period}</p>
                </div>
              </aside>
            </TiltCard>
          </div>
        </section>

        <section className="home-section" aria-labelledby="focus-title">
          <Reveal className="site-container">
            <h2 id="focus-title">Areas of focus</h2>
            <div className="focus-list">
              {homeContent.focusAreas.map((area) => (
                <TiltCard className="focus-item" key={area.title}>
                  <article>
                    <h3>{area.title}</h3>
                    <p>{area.description}</p>
                  </article>
                </TiltCard>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="home-section" aria-labelledby="career-title">
          <Reveal className="site-container career-snapshot">
            <div>
              <h2 id="career-title">Career snapshot</h2>
              <p className="snapshot-date">{homeContent.career.period}</p>
            </div>
            <div>
              <h3>{homeContent.career.role}</h3>
              <p className="snapshot-organisation">{homeContent.career.organisation}</p>
              <p className="career-progression">{homeContent.career.progression.join(' \u2192 ')}</p>
              <a className="text-link" href={sitePath('experience/')}>View Experience <span aria-hidden="true">{'→'}</span></a>
            </div>
          </Reveal>
        </section>

        <section className="home-section credentials-strip" aria-labelledby="credentials-title">
          <Reveal className="site-container">
            <h2 id="credentials-title">Credentials</h2>
            <ul className="credential-list">
              {homeContent.credentials.map((credential) => <li key={credential}>{credential}</li>)}
            </ul>
          </Reveal>
        </section>

        <section className="home-section home-contact" aria-labelledby="home-contact-title">
          <Reveal className="site-container home-contact-content">
            <div>
              <p className="page-label">Open to conversations</p>
              <h2 id="home-contact-title">Consulting engagements and professional opportunities.</h2>
            </div>
            <div>
              <a className="text-link" href={sitePath('contact/')}>Contact <span aria-hidden="true">{'→'}</span></a>
              {linkedIn && <a className="text-link" href={linkedIn.href} rel="noopener noreferrer" target="_blank">LinkedIn <span aria-hidden="true">{'↗'}</span></a>}
            </div>
          </Reveal>
        </section>
      </div>
    </PageShell>
  );
}
