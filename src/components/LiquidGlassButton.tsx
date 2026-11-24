import React from 'react';

interface LiquidGlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const LiquidGlassButton: React.FC<LiquidGlassButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  icon,
  ...props
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return `
          bg-[#ededed] hover:bg-white text-[#111113] font-medium
          border border-white/20
          shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_4px_14px_rgba(0,0,0,0.3)]
        `;
      case 'accent':
        return `
          bg-[#1e293b] hover:bg-[#27354a] text-blue-300 hover:text-white
          border border-blue-500/25 hover:border-blue-400/40
          shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_4px_12px_rgba(0,0,0,0.25)]
        `;
      case 'secondary':
      default:
        return `
          bg-[#1c1c20] hover:bg-[#232328] text-[#a1a1a6] hover:text-[#ededed]
          border border-white/[0.08] hover:border-white/[0.16]
          shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_2px_8px_rgba(0,0,0,0.2)]
        `;
    }
  };

  return (
    <button
      onClick={onClick}
      className={`
        relative group overflow-hidden rounded-lg px-4 sm:px-5 py-2.5 font-sans text-xs sm:text-sm
        transition-all duration-150 active:scale-[0.98] flex items-center justify-center space-x-2
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111113]
        ${getVariantStyles()}
        ${className}
      `}
      {...props}
    >
      {/* Subtle specular top sheen */}
      <span 
        aria-hidden="true" 
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" 
      />

      {/* Button Content */}
      <span className="relative z-10 flex items-center space-x-2">
        <span>{children}</span>
        {icon && <span className="transition-transform duration-150 group-hover:translate-x-0.5">{icon}</span>}
      </span>
    </button>
  );
};
