import { useState } from 'react';
import type { Theme } from '../../types/portfolio';
import { applyTheme, getInitialTheme } from '../../utils/theme';

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';

  const toggleTheme = () => {
    applyTheme(nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      aria-label={`Switch to ${nextTheme} mode`}
      className="theme-toggle"
      onClick={toggleTheme}
      type="button"
    >
      <span aria-hidden="true">{theme === 'dark' ? '☾' : '☀'}</span>
      <span className="theme-toggle-label">{theme === 'dark' ? 'Night' : 'Light'}</span>
    </button>
  );
}

