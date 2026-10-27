import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const badgeSize =
    size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10';
  const titleSize =
    size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg';

  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Bespoke Rounded Mint Badge with Araku Leaf & Bean Monogram */}
      <div
        className={`${badgeSize} rounded-2xl bg-[#8FB4AC] p-1.5 flex items-center justify-center shadow-xs border border-white/80 transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-md shrink-0`}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#263238]"
        >
          {/* Canopy Sun & Leaf arc */}
          <circle cx="20" cy="10" r="3" fill="currentColor" opacity="0.85" />
          <path
            d="M 12 16 C 8 20 8 26 12 30 C 16 34 20 34 20 34 C 20 34 20 28 17 22 C 15 18 12 16 12 16 Z"
            fill="currentColor"
          />
          <path
            d="M 28 16 C 32 20 32 26 28 30 C 24 34 20 34 20 34 C 20 34 20 28 23 22 C 25 18 28 16 28 16 Z"
            fill="currentColor"
          />
          <path
            d="M 20 14 C 18 20 22 26 20 34"
            stroke="#8FB4AC"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Typography Lockup */}
      <div className="flex flex-col text-left">
        <span
          className={`font-display font-extrabold ${titleSize} tracking-[0.12em] text-[#263238] uppercase leading-none`}
        >
          ARAKU COFFEE
        </span>
        {showSubtitle && (
          <span className="text-[9px] font-tech font-bold tracking-widest text-[#263238]/65 uppercase mt-1">
            Bandra Flagship · Farm-to-Cup
          </span>
        )}
      </div>
    </div>
  );
};
