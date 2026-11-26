import React, { useState } from 'react';

interface TechTextProps {
  text: string;
  className?: string;
  tagline?: string;
}

export const TechText: React.FC<TechTextProps> = ({ text, className = '', tagline }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={`relative inline-block select-none ${className}`}>
      <div className="flex flex-wrap items-center">
        {text.split('').map((char, index) => {
          const isSpace = char === ' ';
          const isHovered = hoveredIndex === index;

          if (isSpace) {
            return <span key={index} className="inline-block w-2.5 sm:w-4">&nbsp;</span>;
          }

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative inline-block cursor-crosshair group transition-transform duration-150"
            >
              {/* Bounding box and vector dimensions on hover (React Bits style, quiet monochrome) */}
              {isHovered && (
                <div className="absolute -inset-1 border border-dashed border-[#485550]/40 pointer-events-none z-20">
                  {/* Top-left dimension pill */}
                  <span className="absolute -top-3.5 -left-1 px-1 py-0.2 bg-[#485550] text-[9px] font-mono font-medium text-[#C0EB6A] tracking-tight rounded-sm shadow-sm">
                    {48 + (index * 7) % 36} × {72 + (index * 5) % 28}
                  </span>
                  {/* Corner anchor nodes */}
                  <span className="absolute -top-0.5 -left-0.5 w-1 h-1 bg-[#C0EB6A] border border-[#485550]"></span>
                  <span className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-[#C0EB6A] border border-[#485550]"></span>
                  <span className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-[#C0EB6A] border border-[#485550]"></span>
                  <span className="absolute -bottom-0.5 -right-0.5 w-1 h-1 bg-[#C0EB6A] border border-[#485550]"></span>
                </div>
              )}

              {/* Character glyph */}
              <span
                className={`relative inline-block transition-colors duration-150 ${
                  isHovered
                    ? 'text-transparent'
                    : 'text-current'
                }`}
                style={
                  isHovered
                    ? {
                        WebkitTextStroke: '1px #485550',
                      }
                    : undefined
                }
              >
                {char}
              </span>
            </div>
          );
        })}
      </div>

      {tagline && (
        <div className="text-[11px] font-mono text-zinc-500 mt-1 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
          <span>{tagline}</span>
        </div>
      )}
    </div>
  );
};
