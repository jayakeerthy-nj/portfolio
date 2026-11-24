import React, { useEffect, useRef } from 'react';

interface ShapeWavesProps {
  className?: string;
}

export const ShapeWaves: React.FC<ShapeWavesProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.parentElement?.addEventListener('mousemove', handleMouseMove);
    canvas.parentElement?.addEventListener('mouseleave', handleMouseLeave);

    let time = 0;
    const spacing = 32; // Clean 4px grid multiple
    let isVisible = true;

    const render = () => {
      if (!isVisible) return;
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      const cols = Math.floor(width / spacing);
      const rows = Math.floor(height / spacing);
      const offsetX = (width - cols * spacing) / 2;
      const offsetY = (height - rows * spacing) / 2;

      // Draw geometric shape field in quiet graphite
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = offsetX + i * spacing + spacing / 2;
          const y = offsetY + j * spacing + spacing / 2;

          // Gentle rolling wave
          const wave = Math.sin(time + (i * 0.12) + (j * 0.1));
          
          // Distance from cursor
          const dx = mouseX - x;
          const dy = mouseY - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const cursorFactor = Math.max(0, 1 - dist / 160);

          // Central code glyph bracket mask: `</>`
          const normX = (x / width - 0.5) * 2;
          const normY = (y / height - 0.5) * 2;
          const isLeftBracket = Math.abs(normX + 0.35 + Math.abs(normY) * 0.5) < 0.11 && Math.abs(normY) < 0.55;
          const isRightBracket = Math.abs(normX - 0.35 - Math.abs(normY) * 0.5) < 0.11 && Math.abs(normY) < 0.55;
          const isSlash = Math.abs(normX + normY * 0.3) < 0.07 && Math.abs(normY) < 0.6;
          const isGlyph = isLeftBracket || isRightBracket || isSlash;

          // Quiet alpha values
          let baseAlpha = 0.04 + (wave + 1) * 0.02;
          if (isGlyph) baseAlpha += 0.09;
          const alpha = Math.min(0.65, baseAlpha + cursorFactor * 0.4);

          let baseSize = 1.8 + wave * 0.5;
          if (isGlyph) baseSize += 0.8;
          const size = baseSize + cursorFactor * 2.5;

          // Pure neutral graphite ramp with slight cool tint on cursor proximity
          const brightness = Math.floor(160 + cursorFactor * 75);
          ctx.fillStyle = `rgba(${brightness}, ${brightness + 4}, ${brightness + 10}, ${alpha})`;

          // Alternate shapes: 0=Circle, 1=Square, 2=Triangle
          const shapeType = (i + j) % 3;

          ctx.save();
          ctx.translate(x, y);

          if (shapeType === 0) {
            ctx.beginPath();
            ctx.arc(0, 0, size, 0, Math.PI * 2);
            ctx.fill();
          } else if (shapeType === 1) {
            ctx.fillRect(-size, -size, size * 2, size * 2);
          } else {
            ctx.beginPath();
            ctx.moveTo(0, -size * 1.2);
            ctx.lineTo(size, size * 0.8);
            ctx.lineTo(-size, size * 0.8);
            ctx.closePath();
            ctx.fill();
          }

          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Pause render loop when scrolled offscreen to conserve CPU/GPU
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = requestAnimationFrame(render);
        } else {
          cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      canvas.parentElement?.removeEventListener('mousemove', handleMouseMove);
      canvas.parentElement?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}>
      {/* Quiet neutral ambient light (No purple blobs) */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-white/[0.015] blur-[120px] rounded-full pointer-events-none" 
      />
      <canvas ref={canvasRef} className="w-full h-full block opacity-80" />
    </div>
  );
};
