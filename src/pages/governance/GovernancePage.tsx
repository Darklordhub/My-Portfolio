import { PageShell } from '../../components/layout/PageShell';
import { governanceContent } from '../../data/governance';
import { sitePath } from '../../utils/paths';
import '../../styles/governance.css';

export function GovernancePage() {
  return (
    <PageShell activePage="governance">
      <div className="governance-page">
        <section className="governance-hero" aria-labelledby="governance-title">
          <div className="site-container governance-hero-layout">
            <div>
              <p className="eyebrow">{governanceContent.hero.eyebrow}</p>
              <h1 id="governance-title">
                {governanceContent.hero.headline.map((line) => <span key={line}>{line}</span>)}
              </h1>
            </div>
            <div className="governance-hero-copy">
              <p>{governanceContent.hero.summary}</p>
              <p>{governanceContent.hero.detail}</p>
              <p>{governanceContent.hero.perspective}</p>
            </div>
          </div>
        </section>

        <section className="governance-section capabilities-section" aria-labelledby="capabilities-title">
          <div className="site-container">
            <div className="governance-section-header">
              <p className="section-label">01 / Governance Capabilities</p>
              <h2 id="capabilities-title">Governance across the technology lifecycle.</h2>
            </div>
            <div className="capability-list">
              {governanceContent.capabilities.map((capability) => (
                <article className="capability-item" key={capability.number}>
                  <p className="capability-number">{capability.number}</p>
                  <div>
                    <h3>{capability.title}</h3>
                    <p>{capability.description}</p>
                  </div>
                  <ul aria-label={`${capability.title} focus themes`} className="focus-tags">
                    {capability.themes.map((theme) => <li key={theme}>{theme}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="governance-section approach-section" aria-labelledby="approach-title">
          <div className="site-container">
            <div className="governance-section-header">
              <p className="section-label">02 / Approach</p>
              <h2 id="approach-title">From requirement to assurance.</h2>
            </div>
            <ol className="approach-list">
              {governanceContent.approach.map((stage) => (
                <li className="approach-stage" key={stage.number}>
                  <p className="approach-number">{stage.number}</p>
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                  <ul>
                    {stage.activities.map((activity) => <li key={activity}>{activity}</li>)}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="governance-section operating-model-section" aria-labelledby="operating-model-title">
          <div className="site-container">
            <div className="governance-section-header">
              <p className="section-label">03 / Operating Model</p>
              <h2 id="operating-model-title">Governance works across organisational boundaries.</h2>
            </div>
            <div className="operating-model-layout">
              <div>
                <p className="operating-model-copy">Technology governance is most effective when ownership, risk, contractual obligations, security requirements and business priorities are considered together rather than independently.</p>
                <div className="operating-model-core">Technology Governance</div>
              </div>
              <ul aria-label="Cross-functional governance participants" className="stakeholder-list">
                {governanceContent.stakeholders.map((stakeholder, index) => (
                  <li key={stakeholder}><span>{String(index + 1).padStart(2, '0')}</span>{stakeholder}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="governance-section digital-governance-section" aria-labelledby="digital-governance-title">
          <div className="site-container digital-governance-layout">
            <div>
              <p className="section-label">04 / Digital Governance</p>
              <h2 id="digital-governance-title">Governance should enable transformation, not obstruct it.</h2>
            </div>
            <div>
              <p className="digital-governance-copy">{governanceContent.transformation.description}</p>
              <ul aria-label="Digital governance experience themes" className="focus-tags transformation-tags">
                {governanceContent.transformation.themes.map((theme) => <li key={theme}>{theme}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="governance-section principles-section" aria-labelledby="principles-title">
          <div className="site-container">
            <div className="governance-section-header">
              <p className="section-label">05 / Principles</p>
              <h2 id="principles-title">Governance should be usable.</h2>
            </div>
            <div className="principles-grid">
              {governanceContent.principles.map((principle, index) => (
                <article className="principle-item" key={principle.title}>
                  <p>{String(index + 1).padStart(2, '0')}</p>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="governance-transition" aria-labelledby="governance-transition-title">
          <div className="site-container">
            <div className="governance-transition-panel">
              <div>
                <p className="section-label">06 / Governance in Practice</p>
                <h2 id="governance-transition-title">From governance principles to practical outcomes.</h2>
              </div>
              <div>
                <p>Explore selected examples showing how governance, control, assurance and transformation principles have been applied to practical enterprise challenges.</p>
                <a className="governance-button" href={sitePath('case-studies/')}>View Governance Case Studies <span aria-hidden="true">→</span></a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
