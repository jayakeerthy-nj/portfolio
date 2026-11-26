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
          bg-[#485550] hover:bg-[#38433F] text-[#FFFFFF] font-medium
          border border-[#485550]
          shadow-[0_6px_18px_-6px_rgba(72,85,80,0.45)]
        `;
      case 'accent':
        return `
          bg-[#C0EB6A] hover:bg-[#B2DF57] text-[#1E2623] font-semibold
          border border-[#485550]/20
          shadow-[0_6px_16px_-6px_rgba(192,235,106,0.55)]
        `;
      case 'secondary':
      default:
        return `
          bg-[#FFFFFF] hover:bg-[#EAECE4] text-[#485550] hover:text-[#1E2623] font-medium
          border border-[#485550]/20 hover:border-[#485550]/35
          shadow-[0_2px_8px_rgba(72,85,80,0.06)]
        `;
    }
  };

  return (
    <button
      onClick={onClick}
      className={`
        relative group overflow-hidden rounded-lg px-4 sm:px-5 py-2.5 font-sans text-xs sm:text-sm
        transition-all duration-200 active:scale-[0.98] flex items-center justify-center space-x-2
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#485550] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F6F0]
        ${getVariantStyles()}
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10 flex items-center space-x-2">
        <span>{children}</span>
        {icon && <span className="transition-transform duration-150 group-hover:translate-x-0.5">{icon}</span>}
      </span>
    </button>
  );
};
