import React from 'react';

interface LineNumbersProps {
  totalLines?: number;
}

export const LineNumbers: React.FC<LineNumbersProps> = ({ totalLines = 250 }) => {
  const lines = Array.from({ length: totalLines }, (_, i) => i + 1);

  return (
    <aside 
      aria-hidden="true" 
      className="hidden lg:block relative overflow-hidden select-none pointer-events-none w-12 shrink-0 border-r border-dashed border-[#485550]/15 bg-[#EAECE4]/60 font-mono text-[11px] text-right"
    >
      <div className="absolute inset-x-0 top-0 pt-20 pr-3 space-y-[1.125rem]">
        {lines.map((num) => (
          <div key={num} className="h-6 flex items-center justify-end leading-none font-normal tracking-tight">
            {num % 5 === 0 ? (
              <span className="text-[#485550]/75 font-medium">{num}</span>
            ) : (
              <span className="text-[#485550]/35">{num}</span>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};
