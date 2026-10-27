import React from 'react';

interface ArakuLogoProps {
  className?: string;
  badgeSize?: number;
  showWordmark?: boolean;
  wordmarkClassName?: string;
  inverted?: boolean;
}

/**
 * Bespoke Araku Coffee — Bandra Brand Lockup:
 * Custom vector monogram featuring the organic coffee leaf and bean cleft silhouette
 * embedded inside a rounded soft mint badge (#8FB4AC), with luxury typography.
 */
export const MaisonLogo: React.FC<ArakuLogoProps> = ({
  className = '',
  badgeSize = 42,
  showWordmark = true,
  wordmarkClassName = '',
  inverted = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Custom Vector Mint Badge Monogram */}
      <svg
        width={badgeSize}
        height={badgeSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-500 ease-out group-hover:scale-105"
      >
        {/* Soft Mint Badge background with organic rounded corners */}
        <rect
          width="48"
          height="48"
          rx="14"
          fill="#8FB4AC"
          className="transition-colors duration-300"
        />

        {/* Subtle inner badge bezel highlight */}
        <rect
          x="1"
          y="1"
          width="46"
          height="46"
          rx="13"
          stroke="rgba(255, 255, 255, 0.45)"
          strokeWidth="1.2"
        />

        {/* Stylized Araku 'A' + Organic Coffee Bean / Canopy Leaf silhouette */}
        <g transform="translate(10, 10)">
          {/* Left Arch / Leaf contour */}
          <path
            d="M 14 3 C 8 3 4 8 4 14 C 4 20 8 25 14 25 C 13.5 21 12 17 13.5 13 C 14 10 14 6 14 3 Z"
            fill="#263238"
          />
          {/* Right Arch / Bean contour */}
          <path
            d="M 14 3 C 20 3 24 8 24 14 C 24 20 20 25 14 25 C 14.5 21 16 17 14.5 13 C 14 10 14 6 14 3 Z"
            fill="#263238"
          />
          {/* Central S-Curved Living Vine Cleft */}
          <path
            d="M 14 2.5 C 11.5 8 16.5 14 13.5 24.5"
            stroke="#8FB4AC"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Subtle Sun / Canopy Origin Accent */}
          <circle cx="14" cy="7" r="1.8" fill="#8FB4AC" />
        </g>
      </svg>

      {/* Bespoke Editorial Typographic Lockup */}
      {showWordmark && (
        <div className={`flex flex-col text-left ${wordmarkClassName}`}>
          <div className="flex items-center gap-1.5">
            <span
              className={`font-headline text-lg sm:text-xl font-black tracking-tight leading-none ${
                inverted ? 'text-white' : 'text-[#263238]'
              }`}
            >
              ARAKU COFFEE
            </span>
            <span className="text-[10px] font-tech font-bold text-[#8FB4AC] tracking-widest uppercase">
              BANDRA
            </span>
          </div>
          <span
            className={`text-[9px] tracking-[0.25em] uppercase font-tech mt-1 leading-none ${
              inverted ? 'text-white/70' : 'text-[#263238]/65 font-bold'
            }`}
          >
            100% Organic · Farm-to-Cup
          </span>
        </div>
      )}
    </div>
  );
};
