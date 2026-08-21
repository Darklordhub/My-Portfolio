import { PageShell } from '../../components/layout/PageShell';
import { credentialsContent } from '../../data/credentials';
import type { Credential } from '../../types/portfolio';
import { sitePath } from '../../utils/paths';
import '../../styles/credentials.css';

export function CredentialsPage() {
  const governanceCredentials = credentialsContent.credentials.filter((credential) => credential.group === 'governance');
  const technicalCredentials = credentialsContent.credentials.filter((credential) => credential.group === 'technical');

  return (
    <PageShell activePage="credentials">
      <div className="credentials-page">
        <section className="credentials-hero" aria-labelledby="credentials-title">
          <div className="site-container credentials-hero-layout">
            <div>
              <p className="eyebrow">{credentialsContent.hero.eyebrow}</p>
              <h1 id="credentials-title">{credentialsContent.hero.headline.map((line) => <span key={line}>{line}</span>)}</h1>
            </div>
            <div className="credentials-hero-copy">
              <p>{credentialsContent.hero.summary}</p>
              <p>{credentialsContent.hero.perspective}</p>
            </div>
          </div>
        </section>

        <section className="credentials-section governance-credentials-section" aria-labelledby="governance-credentials-title">
          <div className="site-container">
            <div className="credentials-section-header">
              <p className="section-label">01 / Governance &amp; Assurance</p>
              <h2 id="governance-credentials-title">Credentials aligned with governance and risk.</h2>
            </div>
            <div className="credential-card-grid credential-card-grid--governance">
              {governanceCredentials.map((credential) => <CredentialCard credential={credential} key={credential.name} />)}
            </div>
          </div>
        </section>

        <section className="credentials-section technical-credentials-section" aria-labelledby="technical-credentials-title">
          <div className="site-container">
            <div className="credentials-section-header">
              <p className="section-label">02 / Technical Foundation</p>
              <h2 id="technical-credentials-title">Technical understanding behind the governance.</h2>
            </div>
            <p className="technical-credentials-introduction">Earlier Microsoft credentials reflect the systems and development foundations that support practical understanding of enterprise technology.</p>
            <div className="credential-card-grid credential-card-grid--technical">
              {technicalCredentials.map((credential) => <CredentialCard credential={credential} key={credential.name} />)}
            </div>
          </div>
        </section>

        <section className="credentials-section connection-section" aria-labelledby="connection-title">
          <div className="site-container">
            <div className="credentials-section-header">
              <p className="section-label">03 / Professional Connection</p>
              <h2 id="connection-title">Different disciplines. One governance perspective.</h2>
            </div>
            <div className="credential-mapping">
              {credentialsContent.credentials.map((credential) => (
                <article key={credential.name}>
                  <h3>{credential.category}</h3>
                  <p className="mapping-credential">Credential: <strong>{credential.name}</strong></p>
                  <p className="mapping-supports-label">Supports</p>
                  <ul>
                    {credential.supports.map((support) => <li key={support}>{support}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="credentials-transition" aria-labelledby="credentials-transition-title">
          <div className="site-container">
            <div className="credentials-transition-panel">
              <div>
                <p className="section-label">Professional Foundation</p>
                <h2 id="credentials-transition-title">Credentials supported by practical experience.</h2>
              </div>
              <div>
                <p>Explore how these governance, assurance, security and technical foundations connect with professional experience and technology governance work.</p>
                <div className="credentials-transition-actions">
                  <a className="credentials-button" href={sitePath('experience/')}>View Professional Experience <span aria-hidden="true">→</span></a>
                  <a className="credentials-secondary-link" href={sitePath('governance/')}>Explore Governance Expertise <span aria-hidden="true">→</span></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

function CredentialCard({ credential }: { credential: Credential }) {
  return (
    <article className={`credential-detail-card${credential.name === 'CISA' ? ' credential-detail-card--featured' : ''}`}>
      <p className="credential-category">{credential.category}</p>
      <h3>{credential.name}</h3>
      <p className="credential-issuer">{credential.issuer}</p>
      {credential.fullName && <p className="credential-full-name">{credential.fullName}</p>}
      <p className="credential-relevance">{credential.relevance}</p>
    </article>
  );
}
