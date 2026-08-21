import { navigationItems } from '../../data/navigation';
import type { PageKey } from '../../types/portfolio';
import type { RefObject } from 'react';
import { sitePath } from '../../utils/paths';

interface NavigationProps {
  activePage: PageKey;
  isOpen: boolean;
  onNavigate: () => void;
  navigationRef: RefObject<HTMLElement | null>;
}

export function Navigation({ activePage, isOpen, navigationRef, onNavigate }: NavigationProps) {
  return (
    <nav
      aria-label="Primary navigation"
      className={`primary-nav${isOpen ? ' is-open' : ''}`}
      id="primary-navigation"
      ref={navigationRef}
    >
      <ul className="nav-list">
        {navigationItems.map((item) => (
          <li key={item.id}>
            <a
              aria-current={item.id === activePage ? 'page' : undefined}
              className="nav-link"
              href={sitePath(item.path)}
              onClick={onNavigate}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
