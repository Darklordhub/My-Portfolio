import type { CSSProperties } from 'react';
import { Reveal } from '../../components/effects/Reveal';
import { CredentialRail } from '../../components/home/CredentialRail';
import { FocusChapter } from '../../components/home/FocusChapter';
import { ScrollCue } from '../../components/home/ScrollCue';
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
        <section className="home-chapter home-intro" aria-labelledby="hero-title">
          <div className="site-container start-composition">
            <p className="chapter-label">00 / Start</p>
            <div className="start-identity">
              <p className="profile-name">{profile.name}</p>
              <p className="profile-role">{homeContent.hero.identity}</p>
            </div>
            <h1 id="hero-title">
              {homeContent.hero.headline.map((line) => <span key={line}>{line}</span>)}
            </h1>
            <div className="start-lower">
              <div className="start-context">
                <p>{homeContent.hero.introduction}</p>
                <p>{homeContent.hero.availability}</p>
              </div>
              <div className="intro-actions" aria-label="Overview actions">
                <a className="editorial-link" href={sitePath('experience/')}>Experience <span aria-hidden="true">↗</span></a>
                <a className="editorial-link" href={sitePath('contact/')}>Contact <span aria-hidden="true">↗</span></a>
              </div>
              <ScrollCue />
            </div>
          </div>
        </section>

        <CredentialRail />

        <section className="home-chapter focus-chapter" id="focus" aria-labelledby="focus-title">
          <Reveal className="site-container focus-layout">
            <h2 className="chapter-label section-chapter-label" id="focus-title">01 / Focus</h2>
            <FocusChapter />
          </Reveal>
        </section>

        <section className="home-chapter journey-chapter" aria-labelledby="journey-title">
          <Reveal className="site-container journey-layout">
            <h2 className="chapter-label section-chapter-label" id="journey-title">02 / Journey</h2>
            <ol className="journey-path" aria-label="Career progression">
              {homeContent.career.progression.map((stage, index) => (
                <li key={stage} style={{ '--journey-order': index } as CSSProperties}>
                  <span className="journey-number" aria-hidden="true">{String(index).padStart(2, '0')}</span>
                  <span className="journey-stage">{stage}</span>
                  {index < homeContent.career.progression.length - 1 && <span className="journey-arrow" aria-hidden="true">↓</span>}
                </li>
              ))}
            </ol>
            <a className="editorial-link journey-link" href={sitePath('experience/')}>View Experience <span aria-hidden="true">↗</span></a>
          </Reveal>
        </section>

        <section className="home-chapter connect-chapter" aria-labelledby="connect-title">
          <Reveal className="site-container connect-composition">
            <p className="chapter-label">03 / Connect</p>
            <div className="connect-heading">
              <h2 id="connect-title">Open to selected<br />professional opportunities<br />and advisory work.</h2>
            </div>
            <ul className="connect-focus" aria-label="Professional areas">
              <li>IT Governance</li>
              <li>Technology Risk</li>
              <li>Assurance</li>
              <li>Digital Transformation</li>
            </ul>
            <div className="connect-links">
              <a className="editorial-link" href={sitePath('contact/')}>Contact <span aria-hidden="true">↗</span></a>
              {linkedIn && <a className="editorial-link" href={linkedIn.href} rel="noopener noreferrer" target="_blank">LinkedIn <span aria-hidden="true">↗</span></a>}
              <a className="editorial-link" href={`mailto:${contactDetails.email}`}>Email me <span aria-hidden="true">↗</span></a>
            </div>
          </Reveal>
        </section>
      </div>
    </PageShell>
  );
}
