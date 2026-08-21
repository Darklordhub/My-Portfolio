import { PageShell } from '../../components/layout/PageShell';
import { experienceContent } from '../../data/experience';
import { sitePath } from '../../utils/paths';
import '../../styles/experience.css';

export function ExperiencePage() {
  return (
    <PageShell activePage="experience">
      <div className="experience-page">
        <section className="experience-hero" aria-labelledby="experience-title">
          <div className="site-container experience-hero-layout">
            <div>
              <p className="eyebrow">{experienceContent.hero.eyebrow}</p>
              <h1 id="experience-title">{experienceContent.hero.headline.map((line) => <span key={line}>{line}</span>)}</h1>
            </div>
            <div className="experience-hero-copy">
              <p>{experienceContent.hero.summary}</p>
              <p>{experienceContent.hero.perspective}</p>
            </div>
          </div>
        </section>

        <section className="experience-section progression-section" aria-labelledby="progression-title">
          <div className="site-container">
            <div className="experience-section-header">
              <p className="section-label">01 / Career Progression</p>
              <h2 id="progression-title">A career shaped across the technology lifecycle.</h2>
            </div>
            <ol className="career-progression-list">
              {experienceContent.progression.map((stage, index) => <li key={stage}><span>{String(index + 1).padStart(2, '0')}</span>{stage}</li>)}
            </ol>
            <p className="progression-statement">{experienceContent.progressionStatement}</p>
          </div>
        </section>

        <section className="experience-section timeline-section" aria-labelledby="timeline-title">
          <div className="site-container">
            <div className="experience-section-header">
              <p className="section-label">02 / Experience</p>
              <h2 id="timeline-title">Professional progression in practice.</h2>
            </div>
            <ol aria-label="Professional experience timeline" className="experience-timeline">
              {experienceContent.roles.map((role) => (
                <li className={`timeline-entry${role.isCurrent ? ' timeline-entry--current' : ''}`} key={`${role.period}-${role.role}`}>
                  <div className="timeline-marker" aria-hidden="true" />
                  <div className="timeline-date-block">
                    <p>{role.period}</p>
                    {role.isCurrent && <span>Current role</span>}
                  </div>
                  <article className="timeline-content">
                    <p className="timeline-organisation">{role.organisation}</p>
                    <h3>{role.role}</h3>
                    <p className="timeline-summary">{role.summary}</p>
                    {role.metric && <p className="timeline-metric">{role.metric}</p>}
                    <ul className="timeline-highlights">
                      {role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                    <ul aria-label={`${role.role} themes`} className="timeline-tags">
                      {role.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="experience-section through-line-section" aria-labelledby="through-line-title">
          <div className="site-container">
            <div className="experience-section-header">
              <p className="section-label">03 / Through-Line</p>
              <h2 id="through-line-title">Experience across the technology lifecycle.</h2>
            </div>
            <div className="experience-themes">
              {experienceContent.themes.map((theme, index) => (
                <article className="experience-theme" key={theme.title}>
                  <p>{String(index + 1).padStart(2, '0')}</p>
                  <h3>{theme.title}</h3>
                  <p>{theme.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="experience-transition" aria-labelledby="experience-transition-title">
          <div className="site-container">
            <div className="experience-transition-panel">
              <div>
                <p className="section-label">04 / Governance Transition</p>
                <h2 id="experience-transition-title">Experience translated into governance.</h2>
              </div>
              <div>
                <p>Technical, assurance and transformation experience now informs how I approach technology governance, risk and control oversight.</p>
                <div className="experience-transition-actions">
                  <a className="experience-button" href={sitePath('governance/')}>Explore Governance Expertise <span aria-hidden="true">→</span></a>
                  <a className="experience-secondary-link" href={sitePath('case-studies/')}>View Case Studies <span aria-hidden="true">→</span></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
