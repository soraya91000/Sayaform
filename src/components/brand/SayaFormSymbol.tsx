import React from 'react';

interface SayaFormSymbolProps {
  className?: string;
  size?: number | string;
  showRing?: boolean;
  interactive?: boolean;
  variant?: 'metallic' | 'ivory' | 'subtle' | 'stroke' | 'gold' | 'dark';
  id?: string;
}

/**
 * Official SAYA FORM Highlights Signature Symbol
 * Faithful reproduction of the two curved feathers / fluid teardrops emblem
 * enclosed in a delicate ring, as seen in the brand's Instagram Story Highlights.
 */
export const SayaFormSymbol: React.FC<SayaFormSymbolProps> = ({
  className = '',
  size = 48,
  showRing = true,
  interactive = false,
  variant = 'metallic',
  id = 'sf-symbol',
}) => {
  const numericSize = typeof size === 'number' ? size : parseInt(size as string, 10) || 48;
  const gradientId = `sf-feather-grad-${id}`;
  const ringGradId = `sf-ring-grad-${id}`;

  const getFill = () => {
    if (variant === 'ivory') return '#FDFCF8';
    if (variant === 'dark') return '#050B18';
    if (variant === 'stroke') return 'none';
    return `url(#${gradientId})`;
  };

  const getStroke = () => {
    if (variant === 'stroke') return 'currentColor';
    if (variant === 'dark') return '#050B18';
    if (variant === 'ivory') return '#FDFCF8';
    return `url(#${ringGradId})`;
  };

  return (
    <div
      id={id}
      className={`inline-flex items-center justify-center select-none ${
        interactive ? 'transition-transform duration-500 hover:rotate-12 hover:scale-105 cursor-pointer' : ''
      } ${className}`}
    >
      <svg
        width={numericSize}
        height={numericSize}
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <defs>
          {/* Brushed Rose Gold Metallic Gradient */}
          <linearGradient id={gradientId} x1="60" y1="60" x2="240" y2="240" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#DFC0B5" />
            <stop offset="30%" stopColor="#D4A797" />
            <stop offset="60%" stopColor="#C2927E" />
            <stop offset="85%" stopColor="#A66F5B" />
            <stop offset="100%" stopColor="#8F5542" />
          </linearGradient>

          {/* Hairline Ring Gradient */}
          <linearGradient id={ringGradId} x1="30" y1="30" x2="270" y2="270" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#DFC0B5" />
            <stop offset="50%" stopColor="#C2927E" />
            <stop offset="100%" stopColor="#8F5542" />
          </linearGradient>

          {/* Drop shadow for subtle 3D lift */}
          <filter id={`shadow-${id}`} x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.35" />
          </filter>
        </defs>

        <g filter={`url(#shadow-${id})`}>
          {/* Exterior Hairline Ring */}
          {showRing && (
            <circle
              cx="150"
              cy="150"
              r="120"
              stroke={getStroke()}
              strokeWidth="3.5"
              strokeLinecap="round"
              className="opacity-90"
            />
          )}

          {/* TOP-LEFT CURVED FEATHER */}
          <path
            d="M 136 100 
               C 160 102 165 116 158 132 
               C 148 152 130 174 100 196 
               C 96 199 94 198 94 192 
               C 95 178 95 158 97 142 
               C 100 120 114 98 136 100 
               Z"
            fill={getFill()}
          />

          {/* BOTTOM-RIGHT CURVED FEATHER */}
          <path
            d="M 164 200 
               C 140 198 135 184 142 168 
               C 152 148 170 126 200 104 
               C 204 101 206 102 206 108 
               C 205 122 205 142 203 158 
               C 200 180 186 202 164 200 
               Z"
            fill={getFill()}
          />
        </g>
      </svg>
    </div>
  );
};
