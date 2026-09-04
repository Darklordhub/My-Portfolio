import { useState } from 'react';
import { homeContent } from '../../data/home';

export function FocusChapter() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="focus-selector" role="list" aria-label="Professional focus areas">
      {homeContent.focusAreas.map((area, index) => {
        const isActive = index === activeIndex;

        return (
          <div className={`focus-row${isActive ? ' is-active' : ''}`} key={area.title} role="listitem">
            <button
              aria-pressed={isActive}
              className="focus-trigger"
              onClick={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onPointerEnter={() => setActiveIndex(index)}
              type="button"
            >
              <span className="focus-number" aria-hidden="true">{String(index).padStart(2, '0')}</span>
              <span className="focus-title">{area.title}</span>
              <span className="focus-arrow" aria-hidden="true">→</span>
              <span className="focus-description">{area.description}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
