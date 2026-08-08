
(function () {
  'use strict';

  const canvas = document.getElementById('projector');
  if (!canvas) return;

  const reducedMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let rafId = null;
  let lastFrame = 0;
  let running = false;

  const particles = [];
  const MAX_PARTICLES = reducedMotion ? 0 : 46;
  const targetFrameMs = 1000 / 30;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = Math.max(1, Math.floor(width * dpr));
    canvas.height = Math.max(1, Math.floor(height * dpr));
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function createParticle(index) {
    const depth = 0.35 + Math.random() * 0.65;
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      r: 0.8 + Math.random() * 2.6,
      alpha: 0.025 + Math.random() * 0.12,
      vx: (-0.06 + Math.random() * 0.12) * depth,
      vy: (-0.11 - Math.random() * 0.10) * depth,
      phase: Math.random() * Math.PI * 2,
      pulse: 0.003 + Math.random() * 0.008,
      depth,
      hue: index % 5 === 0 ? 188 : 214
    };
  }

  function seed() {
    particles.length = 0;
    for (let i = 0; i < MAX_PARTICLES; i += 1) {
      particles.push(createParticle(i));
    }
  }

  function drawGlow(p) {
    const pulse = 0.7 + Math.sin(p.phase) * 0.3;
    const a = Math.max(0, p.alpha * pulse);

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${p.hue}, 92%, 63%, ${a})`;
    ctx.fill();

    if (p.r > 2.2 && a > 0.06) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 3.2, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 90%, 58%, ${a * 0.08})`;
      ctx.fill();
    }
  }

  function updateParticle(p) {
    p.x += p.vx;
    p.y += p.vy;
    p.phase += p.pulse;

    if (p.y < -14) {
      p.y = height + 14;
      p.x = Math.random() * width;
    } else if (p.x < -14) {
      p.x = width + 14;
    } else if (p.x > width + 14) {
      p.x = -14;
    }
  }

  function frame(now) {
    if (!running) return;

    if (now - lastFrame < targetFrameMs) {
      rafId = requestAnimationFrame(frame);
      return;
    }
    lastFrame = now;

    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i += 1) {
      const p = particles[i];
      updateParticle(p);
      drawGlow(p);
    }

    rafId = requestAnimationFrame(frame);
  }

  function start() {
    if (running || reducedMotion || document.hidden) return;
    running = true;
    lastFrame = performance.now();
    rafId = requestAnimationFrame(frame);
  }

  function stop() {
    running = false;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
  }

  function handleVisibility() {
    if (document.hidden) stop();
    else start();
  }

  resize();
  seed();

  window.addEventListener('resize', resize, { passive: true });
  document.addEventListener('visibilitychange', handleVisibility, { passive: true });

  const launch = () => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(start, { timeout: 1600 });
    } else {
      setTimeout(start, 500);
    }
  };

  if (document.readyState === 'complete') {
    launch();
  } else {
    window.addEventListener('load', launch, { once: true });
  }
})();
