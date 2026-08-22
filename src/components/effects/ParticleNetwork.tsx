import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  driftX: number;
  driftY: number;
  velocityX: number;
  velocityY: number;
  radius: number;
}

const MOBILE_BREAKPOINT = 768;
const MAX_PARTICLES = 56;
const MIN_PARTICLES = 28;
const MAX_PIXEL_RATIO = 2;
const POINTER_RADIUS = 155;
const REPULSION_STRENGTH = 0.045;
const MAX_PARTICLE_SPEED = 0.46;

export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (!canvas || !context) {
      return undefined;
    }

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const pointer = { x: 0, y: 0, active: false };
    let particles: Particle[] = [];
    let animationFrame: number | undefined;
    let resizeTimer: number | undefined;
    let isRunning = false;
    let width = 0;
    let height = 0;

    const isAnimationAllowed = () => (
      window.innerWidth > MOBILE_BREAKPOINT && !reducedMotionQuery.matches
    );

    const createParticle = (): Particle => {
      const driftX = (Math.random() - 0.5) * 0.22;
      const driftY = (Math.random() - 0.5) * 0.22;

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        driftX,
        driftY,
        velocityX: driftX,
        velocityY: driftY,
        radius: Math.random() * 1.15 + 0.7,
      };
    };

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, MAX_PIXEL_RATIO);

      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const areaBasedCount = Math.round((width * height) / 40_000);
      const particleCount = Math.max(MIN_PARTICLES, Math.min(MAX_PARTICLES, areaBasedCount));
      particles = Array.from({ length: particleCount }, createParticle);
    };

    const stop = () => {
      if (animationFrame !== undefined) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = undefined;
      }

      isRunning = false;
    };

    const draw = () => {
      const isLightTheme = document.documentElement.dataset.theme === 'light';
      const particleColour = isLightTheme ? '76, 94, 215' : '120, 134, 255';
      const lineColour = isLightTheme ? '97, 82, 174' : '153, 130, 245';
      const connectionDistance = Math.min(165, Math.max(125, Math.sqrt(width * height) / 9));

      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        if (pointer.active && finePointerQuery.matches) {
          const offsetX = particle.x - pointer.x;
          const offsetY = particle.y - pointer.y;
          const distance = Math.hypot(offsetX, offsetY);

          if (distance > 0 && distance < POINTER_RADIUS) {
            const force = (1 - distance / POINTER_RADIUS) * REPULSION_STRENGTH;
            particle.velocityX += (offsetX / distance) * force;
            particle.velocityY += (offsetY / distance) * force;
          }
        }

        particle.x += particle.velocityX;
        particle.y += particle.velocityY;
        particle.velocityX += (particle.driftX - particle.velocityX) * 0.025;
        particle.velocityY += (particle.driftY - particle.velocityY) * 0.025;
        particle.velocityX = Math.max(-MAX_PARTICLE_SPEED, Math.min(MAX_PARTICLE_SPEED, particle.velocityX));
        particle.velocityY = Math.max(-MAX_PARTICLE_SPEED, Math.min(MAX_PARTICLE_SPEED, particle.velocityY));

        if (particle.x <= 0 || particle.x >= width) {
          particle.velocityX *= -1;
          particle.x = Math.max(0, Math.min(width, particle.x));
        }

        if (particle.y <= 0 || particle.y >= height) {
          particle.velocityY *= -1;
          particle.y = Math.max(0, Math.min(height, particle.y));
        }
      });

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];

        for (let comparisonIndex = index + 1; comparisonIndex < particles.length; comparisonIndex += 1) {
          const comparisonParticle = particles[comparisonIndex];
          const distance = Math.hypot(
            particle.x - comparisonParticle.x,
            particle.y - comparisonParticle.y,
          );

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * (isLightTheme ? 0.14 : 0.2);
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(comparisonParticle.x, comparisonParticle.y);
            context.strokeStyle = `rgba(${lineColour}, ${opacity})`;
            context.lineWidth = 0.6;
            context.stroke();
          }
        }
      }

      particles.forEach((particle) => {
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(${particleColour}, ${isLightTheme ? 0.2 : 0.26})`;
        context.fill();
      });
    };

    const animate = () => {
      draw();
      animationFrame = window.requestAnimationFrame(animate);
    };

    const start = () => {
      stop();

      if (!isAnimationAllowed() || document.hidden) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      resizeCanvas();
      isRunning = true;
      animate();
    };

    const handleResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(start, 140);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!isRunning || !finePointerQuery.matches) {
        return;
      }

      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    };

    const handleMotionPreferenceChange = () => {
      pointer.active = false;
      start();
    };

    const themeObserver = new MutationObserver(() => {
      if (isRunning) {
        draw();
      }
    });

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);
    reducedMotionQuery.addEventListener('change', handleMotionPreferenceChange);
    finePointerQuery.addEventListener('change', handlePointerLeave);
    start();

    return () => {
      stop();
      window.clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      reducedMotionQuery.removeEventListener('change', handleMotionPreferenceChange);
      finePointerQuery.removeEventListener('change', handlePointerLeave);
      themeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-network" aria-hidden="true" />;
}
