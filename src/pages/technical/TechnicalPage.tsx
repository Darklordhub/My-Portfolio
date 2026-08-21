import { PageShell } from '../../components/layout/PageShell';
import { technicalContent } from '../../data/technical';

export function TechnicalPage() {
  return (
    <PageShell activePage="technical">
      <section className="foundation-page" aria-labelledby="page-title">
        <div className="site-container foundation-content">
          <p className="page-kicker">Portfolio V2 — Foundation</p>
          <h1 id="page-title">Technical Depth</h1>
          <p className="page-summary">{technicalContent.description}</p>
        </div>
      </section>
    </PageShell>
  );
}

