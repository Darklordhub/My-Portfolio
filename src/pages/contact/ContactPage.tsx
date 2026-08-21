import { PageShell } from '../../components/layout/PageShell';

export function ContactPage() {
  return (
    <PageShell activePage="contact">
      <section className="foundation-page" aria-labelledby="page-title">
        <div className="site-container foundation-content">
          <p className="page-kicker">Portfolio V2 — Foundation</p>
          <h1 id="page-title">Contact</h1>
          <p className="page-summary">A foundation page for future professional contact details and preferred communication channels.</p>
        </div>
      </section>
    </PageShell>
  );
}

