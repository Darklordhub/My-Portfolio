import type { Theme } from '../types/portfolio';

const themeStorageKey = 'portfolio-theme';

export const getInitialTheme = (): Theme => {
  try {
    return localStorage.getItem(themeStorageKey) === 'light' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
};

export const applyTheme = (theme: Theme): void => {
  document.documentElement.dataset.theme = theme;

  try {
    localStorage.setItem(themeStorageKey, theme);
  } catch {
    // The interface remains usable when storage is unavailable.
  }
};

