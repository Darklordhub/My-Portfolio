import { StrictMode, type ReactElement } from 'react';
import { createRoot } from 'react-dom/client';
import '../../styles/tokens.css';
import '../../styles/global.css';
import '../../styles/components.css';

export const mountPage = (page: ReactElement): void => {
  const rootElement = document.getElementById('root');

  if (!rootElement) {
    throw new Error('Portfolio root element was not found.');
  }

  createRoot(rootElement).render(<StrictMode>{page}</StrictMode>);
};

