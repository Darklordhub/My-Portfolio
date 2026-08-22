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
              <div className="home-actions">
                <a className="button-link button-link--primary" href={sitePath('experience/')}>
                  View Experience <span aria-hidden="true">→</span>
                </a>
                <a className="button-link" href={sitePath('contact/')}>Contact</a>
              </div>
            </div>
            <div className="home-introduction">
              <p>{homeContent.hero.introduction}</p>
              <p>{homeContent.hero.perspective}</p>
            </div>
          </div>
        </section>

        <section className="home-section" aria-labelledby="focus-title">
          <div className="site-container">
            <h2 id="focus-title">Areas of focus</h2>
            <div className="focus-list">
              {homeContent.focusAreas.map((area) => (
                <article className="focus-item" key={area.title}>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section" aria-labelledby="career-title">
          <div className="site-container career-snapshot">
            <div>
              <h2 id="career-title">Career snapshot</h2>
              <p className="snapshot-date">{homeContent.career.period}</p>
            </div>
            <div>
              <h3>{homeContent.career.role}</h3>
              <p className="snapshot-organisation">{homeContent.career.organisation}</p>
              <p className="career-progression">{homeContent.career.progression.join(' → ')}</p>
              <a className="text-link" href={sitePath('experience/')}>View Experience <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        <section className="home-section credentials-strip" aria-labelledby="credentials-title">
          <div className="site-container">
            <h2 id="credentials-title">Credentials</h2>
            <p>{homeContent.credentials.join(' · ')}</p>
          </div>
        </section>

        <section className="home-section home-contact" aria-labelledby="home-contact-title">
          <div className="site-container home-contact-content">
            <h2 id="home-contact-title">Interested in connecting?</h2>
            <div>
              {linkedIn && <a className="text-link" href={linkedIn.href} rel="noopener noreferrer" target="_blank">LinkedIn <span aria-hidden="true">↗</span></a>}
              <a className="text-link" href={`mailto:${contactDetails.email}`}>Email</a>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
