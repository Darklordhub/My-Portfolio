import { useEffect, useRef, useState } from 'react';
import { contactDetails } from '../../data/contact';
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
  const navigationRef = useRef<HTMLElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const firstNavigationLink = navigationRef.current?.querySelector<HTMLAnchorElement>('a');
    firstNavigationLink?.focus();
    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    const desktopViewport = window.matchMedia('(min-width: 60.0625rem)');
    const closeOnDesktop = () => {
      if (desktopViewport.matches) {
        setIsMenuOpen(false);
      }
    };

    desktopViewport.addEventListener('change', closeOnDesktop);
    return () => desktopViewport.removeEventListener('change', closeOnDesktop);
  }, []);

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <a aria-label={`${profile.name} — Overview`} className="brand" href={sitePath()} onClick={closeMenu}>
          <span aria-hidden="true" className="brand-monogram">{profile.monogram}</span>
        </a>
        <Navigation
          activePage={activePage}
          isOpen={isMenuOpen}
          navigationRef={navigationRef}
          onNavigate={closeMenu}
        />
        <div className="header-actions">
          <ThemeToggle />
          <div aria-label="Professional links" className="header-social-links">
            {contactDetails.socialLinks.map((link) => (
              <a href={link.href} key={link.label} rel="noopener noreferrer" target="_blank">
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
          <button
            aria-controls="primary-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="menu-toggle"
            onClick={toggleMenu}
            ref={menuButtonRef}
            type="button"
          >
            <span aria-hidden="true">{isMenuOpen ? '×' : '☰'}</span>
            <span className="menu-toggle-label">{isMenuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
