import type { ReactNode } from 'react';
import { ParticleNetwork } from '../effects/ParticleNetwork';
import type { PageKey } from '../../types/portfolio';
import { Footer } from './Footer';
import { Header } from './Header';

interface PageShellProps {
  activePage: PageKey;
  children: ReactNode;
}

export function PageShell({ activePage, children }: PageShellProps) {
  return (
    <div className="site-shell">
      <ParticleNetwork />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header activePage={activePage} />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
