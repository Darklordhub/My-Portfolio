import { PageShell } from '../../components/layout/PageShell';
import { governanceContent } from '../../data/governance';

export function GovernancePage() {
  return (
    <PageShell activePage="governance">
      <section className="foundation-page" aria-labelledby="page-title">
        <div className="site-container foundation-content">
          <p className="page-kicker">Portfolio V2 — Foundation</p>
          <h1 id="page-title">Governance &amp; Technology Advisory</h1>
          <p className="page-summary">{governanceContent.description}</p>
        </div>
      </section>
    </PageShell>
  );
}

