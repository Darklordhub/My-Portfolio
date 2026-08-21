import { PageShell } from '../../components/layout/PageShell';
import { experienceContent } from '../../data/experience';

export function ExperiencePage() {
  return (
    <PageShell activePage="experience">
      <section className="foundation-page" aria-labelledby="page-title">
        <div className="site-container foundation-content">
          <p className="page-kicker">Portfolio V2 — Foundation</p>
          <h1 id="page-title">Professional Experience</h1>
          <p className="page-summary">{experienceContent.description}</p>
        </div>
      </section>
    </PageShell>
  );
}

