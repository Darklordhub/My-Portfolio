import { PageShell } from '../../components/layout/PageShell';
import { contactDetails } from '../../data/contact';
import { homeContent } from '../../data/home';
import { profile } from '../../data/profile';
import { sitePath } from '../../utils/paths';
import '../../styles/home.css';

const governanceNodes = [
  ['model-node--top', 'Strategy & Oversight'],
  ['model-node--left', 'Technology Risk'],
  ['model-node--right', 'Compliance'],
  ['model-node--lower-left', 'Controls'],
  ['model-node--lower-right', 'Assurance'],
  ['model-node--bottom', 'Transformation'],
] as const;

export function HomePage() {
  const linkedIn = contactDetails.socialLinks.find((link) => link.label === 'LinkedIn');
  const github = contactDetails.socialLinks.find((link) => link.label === 'GitHub');

  return (
    <PageShell activePage="home">
      <div className="homepage">
        <section className="hero" aria-labelledby="hero-title">
          <div className="site-container hero-layout">
            <div>
              <p className="eyebrow">{homeContent.hero.eyebrow}</p>
              <p className="hero-name">{profile.name}</p>
              <p className="hero-role">{profile.role}</p>
              <h1 id="hero-title">{homeContent.hero.headline.map((line) => <span key={line}>{line}</span>)}</h1>
              <p className="hero-copy">{homeContent.hero.introduction}</p>
              <p className="hero-copy">{homeContent.hero.perspective}</p>
              <div className="hero-actions">
                <a className="button-link button-link--primary" href={sitePath('governance/')}>
                  Explore Governance Expertise <span aria-hidden="true" className="button-link-arrow">→</span>
                </a>
                <a className="button-link" href={sitePath('experience/')}>View Experience</a>
              </div>
            </div>

            <div aria-label="Enterprise governance model" className="governance-model" role="img">
              <p className="model-kicker">Advisory framework</p>
              <span className="model-connector connector-top" />
              <span className="model-connector connector-left" />
              <span className="model-connector connector-right" />
              <span className="model-connector connector-lower-left" />
              <span className="model-connector connector-lower-right" />
              <span className="model-connector connector-bottom" />
              {governanceNodes.map(([className, label]) => <span className={`model-node ${className}`} key={className}>{label}</span>)}
              <span className="model-node model-node--central">Enterprise Governance</span>
              <p className="model-mobile-note">Technology oversight, risk, controls and assurance.</p>
            </div>
          </div>
        </section>

        <section className="content-section governance-focus-section" aria-labelledby="governance-focus-title">
          <div className="site-container">
            <div className="section-header">
              <p className="section-label">01 / Governance Focus</p>
              <h2 className="section-heading" id="governance-focus-title">Governance across risk, controls and assurance.</h2>
            </div>
            <div className="governance-pillar-grid">
              {homeContent.governanceFocus.map((pillar, index) => (
                <a className={`governance-pillar${pillar.emphasis === 'primary' ? ' governance-pillar--primary' : ''}`} href={sitePath('governance/')} key={pillar.title}>
                  <span className="pillar-index">0{index + 1}</span>
                  <h3>{pillar.title}</h3>
                  <ul>
                    {pillar.themes.map((theme) => <li key={theme}>{theme}</li>)}
                  </ul>
                </a>
              ))}
            </div>
            <a className="section-cta" href={sitePath('governance/')}>Explore Governance <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="content-section career-section" aria-labelledby="career-title">
          <div className="site-container">
            <div className="section-header">
              <p className="section-label">02 / Experience</p>
              <h2 className="section-heading" id="career-title">Technical foundations. Governance perspective.</h2>
            </div>
            <div className="career-layout">
              <article className="career-role">
                <p className="role-date">February 2026 — Present</p>
                <h3>Senior Governance Analyst</h3>
                <p className="career-role-company">Gulf Air Group</p>
                <p className="career-role-description">Technology governance, regulatory assurance, IT compliance, technology risk and control oversight across enterprise technology environments.</p>
                <a className="section-cta" href={sitePath('experience/')}>View Full Experience <span aria-hidden="true">→</span></a>
              </article>
              <ol aria-label="Career progression" className="progression-list">
                {homeContent.careerStages.map((stage) => <li key={stage}>{stage}</li>)}
              </ol>
            </div>
          </div>
        </section>

        <section className="content-section selected-work-section" aria-labelledby="work-title">
          <div className="site-container">
            <div className="section-header">
              <p className="section-label">03 / Selected Work</p>
              <h2 className="section-heading" id="work-title">Governance demonstrated through practical outcomes.</h2>
            </div>
            <div className="work-grid">
              {homeContent.selectedWork.map((work) => (
                <article className="work-card" key={work.title}>
                  <p className="work-category">{work.category}</p>
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                </article>
              ))}
            </div>
            <aside className="technical-note">
              <p>Governance supported by hands-on experience across software engineering, infrastructure, cybersecurity operations, automation and analytics.</p>
              <a href={sitePath('technical/')}>Technical Depth <span aria-hidden="true">→</span></a>
            </aside>
            <a className="section-cta" href={sitePath('case-studies/')}>View Governance Case Studies <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="content-section credentials-section" aria-labelledby="credentials-title">
          <div className="site-container">
            <div className="credentials-heading">
              <div>
                <p className="section-label">04 / Credentials</p>
                <h2 className="section-heading" id="credentials-title">Credentials and technical foundations.</h2>
              </div>
              <a className="section-cta" href={sitePath('credentials/')}>View Credentials <span aria-hidden="true">→</span></a>
            </div>
            <ul aria-label="Professional credentials" className="credential-strip">
              {homeContent.credentials.map((credential) => (
                <li className={`credential-strip-item credential-strip-item--${credential.emphasis}`} key={credential.credential}>{credential.credential}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="contact-section" aria-labelledby="contact-title">
          <div className="site-container">
            <div className="contact-panel">
              <div>
                <p className="section-label">05 / Contact</p>
                <h2 className="section-heading" id="contact-title">Governance. Risk. Technology.</h2>
              </div>
              <div>
                <p className="contact-copy">Interested in strengthening technology governance, regulatory readiness, control effectiveness or digital assurance?</p>
                <p className="contact-copy">I&apos;m open to conversations around IT governance, technology risk, cybersecurity assurance, compliance and technology transformation.</p>
                <div className="contact-actions">
                  {linkedIn && <a className="button-link button-link--bronze" href={linkedIn.href} rel="noreferrer" target="_blank">Connect on LinkedIn <span aria-hidden="true" className="button-link-arrow">→</span></a>}
                  <a className="button-link" href={`mailto:${contactDetails.email}`}>Email</a>
                  {github && <a className="button-link" href={github.href} rel="noreferrer" target="_blank">GitHub <span aria-hidden="true" className="button-link-arrow">→</span></a>}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
