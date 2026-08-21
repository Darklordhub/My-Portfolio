import { useState } from 'react';
import { profile } from '../../data/profile';
import type { PageKey } from '../../types/portfolio';
import { sitePath } from '../../utils/paths';
import { Navigation } from '../navigation/Navigation';
import { ThemeToggle } from '../ui/ThemeToggle';

interface HeaderProps {
  activePage: PageKey;
}

export function Header({ activePage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen);

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <a className="brand" href={sitePath()} onClick={closeMenu}>
          <span className="brand-name">{profile.name}</span>
          <span className="brand-role">Portfolio V2</span>
        </a>
        <Navigation activePage={activePage} isOpen={isMenuOpen} onNavigate={closeMenu} />
        <div className="header-actions">
          <ThemeToggle />
          <button
            aria-controls="primary-navigation"
            aria-expanded={isMenuOpen}
            className="menu-toggle"
            onClick={toggleMenu}
            type="button"
          >
            <span aria-hidden="true">{isMenuOpen ? '×' : '☰'}</span>
            <span className="menu-toggle-label">Menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}

