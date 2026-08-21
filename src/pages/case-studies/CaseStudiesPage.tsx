import { PageShell } from '../../components/layout/PageShell';
import { caseStudiesContent } from '../../data/caseStudies';

export function CaseStudiesPage() {
  return (
    <PageShell activePage="case-studies">
      <section className="foundation-page" aria-labelledby="page-title">
        <div className="site-container foundation-content">
          <p className="page-kicker">Portfolio V2 — Foundation</p>
          <h1 id="page-title">Governance Case Studies</h1>
          <p className="page-summary">{caseStudiesContent.description}</p>
        </div>
      </section>
    </PageShell>
  );
}

