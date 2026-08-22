import { useEffect, useRef, type ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}

export function TiltCard({ children, className = '', maxTilt = 4 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;

    if (!card) {
      return undefined;
    }

    const finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let isListening = false;

    const resetTilt = () => {
      card.style.removeProperty('--tilt-x');
      card.style.removeProperty('--tilt-y');
      card.classList.remove('is-tilting');
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = card.getBoundingClientRect();
      const horizontalPosition = (event.clientX - bounds.left) / bounds.width;
      const verticalPosition = (event.clientY - bounds.top) / bounds.height;
      const tiltY = (horizontalPosition - 0.5) * maxTilt * 2;
      const tiltX = (0.5 - verticalPosition) * maxTilt * 2;

      card.style.setProperty('--tilt-x', `${tiltX.toFixed(2)}deg`);
      card.style.setProperty('--tilt-y', `${tiltY.toFixed(2)}deg`);
      card.classList.add('is-tilting');
    };

    const disableTilt = () => {
      if (isListening) {
        card.removeEventListener('pointermove', handlePointerMove);
        card.removeEventListener('pointerleave', resetTilt);
        isListening = false;
      }

      resetTilt();
    };

    const enableTilt = () => {
      if (isListening || !finePointerQuery.matches || reducedMotionQuery.matches) {
        return;
      }

      card.addEventListener('pointermove', handlePointerMove);
      card.addEventListener('pointerleave', resetTilt);
      isListening = true;
    };

    const updateTiltAvailability = () => {
      disableTilt();
      enableTilt();
    };

    finePointerQuery.addEventListener('change', updateTiltAvailability);
    reducedMotionQuery.addEventListener('change', updateTiltAvailability);
    enableTilt();

    return () => {
      disableTilt();
      finePointerQuery.removeEventListener('change', updateTiltAvailability);
      reducedMotionQuery.removeEventListener('change', updateTiltAvailability);
    };
  }, [maxTilt]);

  return (
    <div ref={cardRef} className={`tilt-card ${className}`.trim()}>
      {children}
    </div>
  );
}
