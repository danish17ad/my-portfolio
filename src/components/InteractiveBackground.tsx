import React, { useEffect, useRef } from 'react';

export const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with smoothing (lerp)
    const mouse = {
      x: width / 2,
      y: height / 3,
      targetX: width / 2,
      targetY: height / 3,
      active: false,
      radius: 180,
    };

    // Ripples on click
    interface Ripple {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      alpha: number;
    }
    const ripples: Ripple[] = [];

    // Grid configuration
    const spacing = 44; // grid cell spacing
    let cols = Math.ceil(width / spacing) + 1;
    let rows = Math.ceil(height / spacing) + 1;

    // Ambient floating particles
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseAlpha: number;
    }

    const particleCount = Math.min(Math.floor((width * height) / 28000), 45);
    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 1.5 + 0.8,
      baseAlpha: Math.random() * 0.35 + 0.15,
    }));

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      cols = Math.ceil(width / spacing) + 1;
      rows = Math.ceil(height / spacing) + 1;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleClick = (e: MouseEvent) => {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 260,
        alpha: 0.35,
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.targetX = e.touches[0].clientX;
        mouse.targetY = e.touches[0].clientY;
        mouse.active = true;
      }
    };

    const handleTouchEnd = () => {
      mouse.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw smooth cursor spotlight aura
      if (mouse.active) {
        const glow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius * 1.6
        );
        glow.addColorStop(0, 'rgba(255, 255, 255, 0.05)');
        glow.addColorStop(0.4, 'rgba(255, 255, 255, 0.02)');
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius * 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Draw interactive dot grid
      const dotRadius = 1;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const defaultX = i * spacing;
          const defaultY = j * spacing;

          // Distance to mouse
          const dx = mouse.x - defaultX;
          const dy = mouse.y - defaultY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let currentX = defaultX;
          let currentY = defaultY;
          let currentAlpha = 0.07;
          let currentRadius = dotRadius;

          // Interactive cursor proximity reaction
          if (dist < mouse.radius && mouse.active) {
            const factor = 1 - dist / mouse.radius;
            // Gentle displacement away from cursor (magnetic lens effect)
            const angle = Math.atan2(dy, dx);
            const push = Math.sin(factor * Math.PI) * 12;
            currentX -= Math.cos(angle) * push;
            currentY -= Math.sin(angle) * push;

            // Highlight brightness & scale based on proximity
            currentAlpha = 0.07 + factor * 0.45;
            currentRadius = dotRadius + factor * 1.4;

            // Draw delicate connection lines between nearby dots and cursor
            if (dist < 85) {
              const lineAlpha = (1 - dist / 85) * 0.16;
              ctx.beginPath();
              ctx.moveTo(currentX, currentY);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          } else {
            // Subtle ambient sine wave breathing for resting state
            const wave = Math.sin(time + i * 0.3 + j * 0.2) * 0.02;
            currentAlpha = Math.max(0.04, currentAlpha + wave);
          }

          // Check click ripples
          for (let r = 0; r < ripples.length; r++) {
            const rip = ripples[r];
            const ripDist = Math.hypot(rip.x - defaultX, rip.y - defaultY);
            if (Math.abs(ripDist - rip.radius) < 30) {
              const rippleStrength = (1 - Math.abs(ripDist - rip.radius) / 30) * rip.alpha;
              currentAlpha = Math.min(1, currentAlpha + rippleStrength);
              currentRadius = Math.max(currentRadius, dotRadius + rippleStrength * 2);
            }
          }

          ctx.beginPath();
          ctx.arc(currentX, currentY, currentRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(240, 240, 245, ${currentAlpha})`;
          ctx.fill();
        }
      }

      // 3. Update & render click ripples
      for (let r = ripples.length - 1; r >= 0; r--) {
        const rip = ripples[r];
        rip.radius += 3.5;
        rip.alpha *= 0.96;

        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${rip.alpha * 0.3})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        if (rip.radius > rip.maxRadius || rip.alpha < 0.01) {
          ripples.splice(r, 1);
        }
      }

      // 4. Update & render ambient floating dust particles
      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Proximity to mouse increases particle luminescence
        const pDist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        let pAlpha = p.baseAlpha;
        if (pDist < mouse.radius && mouse.active) {
          pAlpha = Math.min(0.8, p.baseAlpha + (1 - pDist / mouse.radius) * 0.5);
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${pAlpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="interactive-ambient-canvas"
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 select-none opacity-85"
    />
  );
};
