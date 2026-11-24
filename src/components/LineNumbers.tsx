import React from 'react';

interface LineNumbersProps {
  totalLines?: number;
}

export const LineNumbers: React.FC<LineNumbersProps> = ({ totalLines = 180 }) => {
  const lines = Array.from({ length: totalLines }, (_, i) => i + 1);

  return (
    <aside 
      aria-hidden="true" 
      className="hidden lg:block select-none pointer-events-none w-12 shrink-0 border-r border-dashed border-white/[0.08] bg-[#0d0d0e] font-mono text-[11px] text-[#71717a] text-right pr-3 pt-20"
    >
      <div className="space-y-[1.125rem]">
        {lines.map((num) => (
          <div key={num} className="h-6 flex items-center justify-end leading-none font-normal tracking-tight">
            {num % 5 === 0 ? (
              <span className="text-[#a1a1a6]">{num}</span>
            ) : (
              <span className="text-[#52525b]">{num}</span>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};
