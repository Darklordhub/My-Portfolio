import { PageShell } from '../../components/layout/PageShell';
import { technicalContent } from '../../data/technical';
import type { TechnicalArea } from '../../types/portfolio';
import { sitePath } from '../../utils/paths';
import '../../styles/technical.css';

export function TechnicalPage() {
  return (
    <PageShell activePage="technical">
      <div className="technical-page">
        <section className="technical-hero" aria-labelledby="technical-title">
          <div className="site-container technical-hero-layout">
            <div>
              <p className="eyebrow">{technicalContent.hero.eyebrow}</p>
              <h1 id="technical-title">{technicalContent.hero.headline.map((line) => <span key={line}>{line}</span>)}</h1>
            </div>
            <div className="technical-hero-copy">
              <p>{technicalContent.hero.summary}</p>
              <p>{technicalContent.hero.perspective}</p>
            </div>
          </div>
        </section>

        <section className="technical-section foundation-section" aria-labelledby="foundation-title">
          <div className="site-container">
            <div className="technical-section-header">
              <p className="section-label">01 / Foundation</p>
              <h2 id="foundation-title">From operations to architecture.</h2>
            </div>
            <div className="technical-foundation-grid">
              {technicalContent.foundation.map((area, index) => (
                <article className="technical-foundation-item" key={area.title}>
                  <p>{String(index + 1).padStart(2, '0')}</p>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <ul aria-label={`${area.title} technologies`} className="technical-tags">
                    {area.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                  <p className="technical-relevance-label">Practical context</p>
                  <ul aria-label={`${area.title} governance relevance`} className="technical-context-list">
                    {area.governanceRelevance?.map((relevance) => <li key={relevance}>{relevance}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="technical-section application-section" aria-labelledby="application-title">
          <div className="site-container">
            <div className="technical-section-header">
              <p className="section-label">02 / Application Engineering</p>
              <div>
                <h2 id="application-title">Understanding systems from the application layer.</h2>
                <p className="technical-section-introduction">{technicalContent.application.description}</p>
              </div>
            </div>
            <ul aria-label="Application engineering technologies" className="technical-tags application-tags">
              {technicalContent.application.technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
            <p className="application-governance-note">Application architecture, data flows, deployment and integration experience provide practical insight into the systems that governance controls ultimately need to protect, monitor and enable.</p>
          </div>
        </section>

        <section className="technical-section technical-area-section" aria-labelledby="infrastructure-title">
          <div className="site-container technical-area-layout">
            <div>
              <p className="section-label">03 / Infrastructure &amp; DevOps</p>
              <h2 id="infrastructure-title">Understanding the operational environment.</h2>
            </div>
            <TechnicalAreaDetail area={technicalContent.infrastructure} />
          </div>
        </section>

        <section className="technical-section technical-area-section security-section" aria-labelledby="security-title">
          <div className="site-container technical-area-layout">
            <div>
              <p className="section-label">04 / Security Monitoring</p>
              <h2 id="security-title">Controls seen from the telemetry side.</h2>
            </div>
            <TechnicalAreaDetail area={technicalContent.security} />
          </div>
        </section>

        <section className="technical-section technical-area-section" aria-labelledby="automation-title">
          <div className="site-container technical-area-layout">
            <div>
              <p className="section-label">05 / Automation</p>
              <h2 id="automation-title">Governance embedded into workflow.</h2>
            </div>
            <TechnicalAreaDetail area={technicalContent.automation} />
          </div>
        </section>

        <section className="technical-section technical-area-section analytics-section" aria-labelledby="analytics-title">
          <div className="site-container technical-area-layout">
            <div>
              <p className="section-label">06 / Data &amp; Analytics</p>
              <h2 id="analytics-title">Turning governance data into visibility.</h2>
            </div>
            <TechnicalAreaDetail area={technicalContent.analytics} />
          </div>
        </section>

        <section className="technical-section mapping-section" aria-labelledby="mapping-title">
          <div className="site-container">
            <div className="technical-section-header">
              <p className="section-label">07 / Governance Connection</p>
              <h2 id="mapping-title">Why technical depth matters.</h2>
            </div>
            <div className="governance-mapping">
              {technicalContent.governanceMappings.map((mapping) => (
                <article key={mapping.area}>
                  <h3>{mapping.area}</h3>
                  <div>
                    <p>Technical understanding</p>
                    <span>{mapping.understanding}</span>
                  </div>
                  <div>
                    <p>Governance relevance</p>
                    <span>{mapping.governanceRelevance}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="technical-transition" aria-labelledby="technical-transition-title">
          <div className="site-container">
            <div className="technical-transition-panel">
              <div>
                <p className="section-label">Technical Perspective</p>
                <h2 id="technical-transition-title">{technicalContent.closing.headline.map((line) => <span key={line}>{line}</span>)}</h2>
              </div>
              <div>
                <p>{technicalContent.closing.summary}</p>
                <div className="technical-transition-actions">
                  <a className="technical-button" href={sitePath('governance/')}>Explore Governance Expertise <span aria-hidden="true">→</span></a>
                  <a className="technical-secondary-link" href={sitePath('experience/')}>View Professional Experience <span aria-hidden="true">→</span></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

interface TechnicalAreaDetailProps {
  area: TechnicalArea;
}

function TechnicalAreaDetail({ area }: TechnicalAreaDetailProps) {
  return (
    <div className="technical-area-detail">
      <p>{area.description}</p>
      <ul aria-label="Technical areas" className="technical-tags">
        {area.technologies.map((technology) => <li key={technology}>{technology}</li>)}
      </ul>
      <p className="technical-relevance-label">Governance relevance</p>
      <ul aria-label="Governance relevance" className="technical-context-list">
        {area.governanceRelevance?.map((relevance) => <li key={relevance}>{relevance}</li>)}
      </ul>
    </div>
  );
}
