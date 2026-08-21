import { PageShell } from '../../components/layout/PageShell';
import { credentialsContent } from '../../data/credentials';

export function CredentialsPage() {
  return (
    <PageShell activePage="credentials">
      <section className="foundation-page" aria-labelledby="page-title">
        <div className="site-container foundation-content">
          <p className="page-kicker">Portfolio V2 — Foundation</p>
          <h1 id="page-title">Professional Credentials</h1>
          <p className="page-summary">{credentialsContent.description}</p>
        </div>
      </section>
    </PageShell>
  );
}

