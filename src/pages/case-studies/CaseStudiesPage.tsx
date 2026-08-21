import { PageShell } from '../../components/layout/PageShell';
import { caseStudiesContent } from '../../data/caseStudies';
import { sitePath } from '../../utils/paths';
import '../../styles/case-studies.css';

export function CaseStudiesPage() {
  return (
    <PageShell activePage="case-studies">
      <div className="case-studies-page">
        <section className="case-studies-hero" aria-labelledby="case-studies-title">
          <div className="site-container case-studies-hero-layout">
            <div>
              <p className="eyebrow">{caseStudiesContent.hero.eyebrow}</p>
              <h1 id="case-studies-title">{caseStudiesContent.hero.headline.map((line) => <span key={line}>{line}</span>)}</h1>
            </div>
            <div className="case-studies-hero-copy">
              <p>{caseStudiesContent.hero.summary}</p>
              <p>{caseStudiesContent.hero.confidentiality}</p>
            </div>
          </div>
        </section>

        <nav aria-label="Case study index" className="case-study-index">
          <div className="site-container">
            <ol>
              {caseStudiesContent.studies.map((study) => (
                <li key={study.id}>
                  <a href={`#${study.id}`}><span>{study.number}</span>{study.title}</a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <section className="case-studies-list" aria-label="Selected governance case studies">
          <div className="site-container">
            {caseStudiesContent.studies.map((study) => (
              <article className="case-study" id={study.id} key={study.id}>
                <header className="case-study-header">
                  <div>
                    <p className="case-study-number">{study.number}</p>
                    <p className="case-study-category">{study.category}</p>
                  </div>
                  <div>
                    <h2>{study.title}</h2>
                    <p className="case-study-intro">{study.intro}</p>
                    {study.optionalMetric && <p className="case-study-metric">{study.optionalMetric}</p>}
                  </div>
                </header>
                <div className="case-study-details">
                  <section>
                    <h3>Context</h3>
                    <p>{study.context}</p>
                  </section>
                  <section>
                    <h3>Challenge</h3>
                    <p>{study.challenge}</p>
                  </section>
                  <section className="case-study-approach">
                    <h3>Governance Approach</h3>
                    <ul>
                      {study.approach.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </section>
                  <section className="case-study-outcome">
                    <h3>Outcome / Governance Value</h3>
                    <p>{study.outcome}</p>
                  </section>
                </div>
                <ul aria-label={`${study.title} capability tags`} className="case-study-tags">
                  {study.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="case-studies-transition" aria-labelledby="case-studies-transition-title">
          <div className="site-container">
            <div className="case-studies-transition-panel">
              <div>
                <p className="section-label">Governance in Practice</p>
                <h2 id="case-studies-transition-title">{caseStudiesContent.closing.headline.map((line) => <span key={line}>{line}</span>)}</h2>
              </div>
              <div>
                <p>{caseStudiesContent.closing.summary}</p>
                <div className="case-studies-transition-actions">
                  <a className="case-studies-button" href={sitePath('governance/')}>Explore Governance Expertise <span aria-hidden="true">→</span></a>
                  <a className="case-studies-secondary-link" href={sitePath('experience/')}>View Professional Experience <span aria-hidden="true">→</span></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
