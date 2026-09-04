import { useEffect, useState } from 'react';

export function ScrollCue() {
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsDismissed(window.scrollY > 80);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      aria-hidden={isDismissed}
      className={`scroll-cue${isDismissed ? ' is-dismissed' : ''}`}
      href="#focus"
      tabIndex={isDismissed ? -1 : 0}
    >
      <span>Explore</span>
      <span aria-hidden="true">↓</span>
    </a>
  );
}
