import { profile } from '../../data/profile';
import { PageShell } from '../../components/layout/PageShell';

export function HomePage() {
  return (
    <PageShell activePage="home">
      <section className="foundation-page" aria-labelledby="page-title">
        <div className="site-container foundation-content">
          <p className="page-kicker">Portfolio V2 — Foundation</p>
          <h1 id="page-title">{profile.name}</h1>
          <p className="page-summary">{profile.tagline}</p>
        </div>
      </section>
    </PageShell>
  );
}

