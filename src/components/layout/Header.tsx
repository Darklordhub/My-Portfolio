import { useEffect, useRef, useState } from 'react';
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
  const [isScrolled, setIsScrolled] = useState(false);
  const navigationRef = useRef<HTMLElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen);

  useEffect(() => {
    let animationFrame: number | undefined;

    const updateHeader = () => {
      setIsScrolled(window.scrollY > 24);
      animationFrame = undefined;
    };

    const handleScroll = () => {
      if (animationFrame === undefined) {
        animationFrame = window.requestAnimationFrame(updateHeader);
      }
    };

    updateHeader();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);

      if (animationFrame !== undefined) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

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
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
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
