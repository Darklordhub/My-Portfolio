import { Reveal } from '../../components/effects/Reveal';
import { PageShell } from '../../components/layout/PageShell';
import { experienceContent } from '../../data/experience';
import '../../styles/experience.css';

export function ExperiencePage() {
  return (
    <PageShell activePage="experience">
      <div className="experience-page">
        <section className="experience-hero" aria-labelledby="experience-title">
          <div className="site-container">
            <p className="page-label">Professional Experience</p>
            <h1 id="experience-title">
              {experienceContent.hero.headline.map((line) => <span key={line}>{line}</span>)}
            </h1>
            <p>{experienceContent.hero.summary}</p>
          </div>
        </section>

        <section className="experience-timeline-section" aria-label="Career timeline">
          <Reveal className="site-container">
            <ol className="experience-timeline">
              {experienceContent.roles.map((role) => (
                <li className={`timeline-entry${role.isCurrent ? ' timeline-entry--current' : ''}`} key={`${role.period}-${role.role}`}>
                  <p className="timeline-date">{role.period}</p>
                  <span aria-hidden="true" className="timeline-marker" />
                  <div className="timeline-content">
                    <h2>{role.role}</h2>
                    <p className="timeline-organisation">{role.organisation}</p>
                    <p className="timeline-summary">{role.summary}</p>
                    <ul>
                      {role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                    {role.metric && <p className="timeline-metric">{role.metric}</p>}
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>
      </div>
    </PageShell>
  );
}
