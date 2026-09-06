import React from 'react';

interface SayaFormLogoProps {
  className?: string;
  size?: number | string;
  showWordmark?: boolean;
  monogramOnly?: boolean;
  layout?: 'horizontal' | 'stacked';
  variant?: 'metallic' | 'white' | 'gold' | 'dark';
  id?: string;
}

/**
 * Official SAYA FORM Logo
 * Faithful reproduction of the interlocking SF monogram in brushed rose gold / copper
 * as shown in the brand's official visual reference.
 */
export const SayaFormLogo: React.FC<SayaFormLogoProps> = ({
  className = '',
  size = 56,
  showWordmark = false,
  monogramOnly = false,
  layout = 'horizontal',
  variant = 'metallic',
  id = 'saya-form-logo',
}) => {
  const numericSize = typeof size === 'number' ? size : parseInt(size as string, 10) || 56;
  const gradientId = `sf-rose-gold-grad-${id}`;
  const filterId = `sf-metallic-glow-${id}`;
  const isDarkVariant = variant === 'dark';

  return (
    <div
      id={id}
      className={`inline-flex ${
        layout === 'stacked' ? 'flex-col items-center text-center gap-3' : 'items-center gap-3.5'
      } select-none ${className}`}
    >
      {/* Official SF Interlocking Monogram */}
      <svg
        width={numericSize}
        height={numericSize}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-500 hover:scale-[1.02]"
      >
        <defs>
          {/* Rich multi-stop Rose Gold / Copper Metallic Gradient as in official photo */}
          <linearGradient id={gradientId} x1="110" y1="90" x2="390" y2="410" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F5D2C4" />
            <stop offset="18%" stopColor="#E0AB97" />
            <stop offset="42%" stopColor="#C2927E" />
            <stop offset="70%" stopColor="#A86E5A" />
            <stop offset="88%" stopColor="#C89784" />
            <stop offset="100%" stopColor="#8C5340" />
          </linearGradient>

          {/* Secondary diagonal highlight for the sweeping ribbon */}
          <linearGradient id={`${gradientId}-ribbon`} x1="130" y1="140" x2="320" y2="340" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FCE4DA" />
            <stop offset="30%" stopColor="#DFC0B5" />
            <stop offset="65%" stopColor="#C2927E" />
            <stop offset="100%" stopColor="#8F5542" />
          </linearGradient>

          {/* Realistic metallic foil emboss shadow */}
          <filter id={filterId} x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#000000" floodOpacity="0.45" />
          </filter>
        </defs>

        <g filter={isDarkVariant ? undefined : `url(#${filterId})`}>
          {/* ========================================================
              LETTER "F" (Background layer: Top horizontal arm)
              ======================================================== */}
          {/* Top horizontal arm of F with sharp beveled right corner */}
          <path
            d="M 240 188 
               L 375 188 
               L 375 234 
               L 358 234 
               C 354 212 344 204 322 204 
               L 282 204 
               L 282 188 
               Z"
            fill={isDarkVariant ? '#050B18' : `url(#${gradientId})`}
          />

          {/* Upper vertical stem of F (above S crossing) */}
          <path
            d="M 248 188 
               L 282 188 
               L 282 240 
               L 252 216 
               Z"
            fill={isDarkVariant ? '#050B18' : `url(#${gradientId})`}
          />

          {/* Middle horizontal arm / crossbar of F with sharp flared right barb */}
          <path
            d="M 282 292 
               L 342 272 
               C 346 270 348 274 346 280 
               L 336 312 
               L 282 292 
               Z"
            fill={isDarkVariant ? '#050B18' : `url(#${gradientId})`}
          />

          {/* Lower stem and bracketed base serifs of F (below S crossing) */}
          <path
            d="M 258 322 
               L 282 308 
               L 282 372 
               C 296 374 306 378 312 384 
               L 236 384 
               C 242 378 252 374 258 372 
               L 258 322 
               Z"
            fill={isDarkVariant ? '#050B18' : `url(#${gradientId})`}
          />

          {/* ========================================================
              LETTER "S" (Interlaced: Upper hook, ribbon diagonal, lower hook)
              ======================================================== */}
          {/* Top curve and terminal serif beak of S */}
          <path
            d="M 268 156 
               C 268 132 256 112 232 112 
               C 200 112 174 134 154 162 
               L 162 136 
               C 186 114 216 102 242 102 
               C 272 102 288 120 288 148 
               C 288 158 284 172 274 182 
               L 268 156 
               Z"
            fill={isDarkVariant ? '#050B18' : `url(#${gradientId})`}
          />

          {/* Top serif tip / beak of S */}
          <path
            d="M 154 136 
               C 166 122 178 112 196 104 
               L 182 104 
               C 160 118 146 134 146 152 
               Z"
            fill={isDarkVariant ? '#050B18' : `url(#${gradientId})`}
          />

          {/* Main Diagonal Calligraphic Ribbon of S cutting across the F */}
          <path
            d="M 146 166 
               C 178 204 222 246 286 280 
               C 304 290 304 310 292 328 
               C 278 348 252 360 220 360 
               C 190 360 166 350 140 334 
               L 140 350 
               C 168 370 200 380 232 380 
               C 280 380 320 352 320 314 
               C 320 288 300 264 268 246 
               C 212 214 174 180 146 166 
               Z"
            fill={isDarkVariant ? '#050B18' : `url(#${gradientId}-ribbon)`}
          />

          {/* Bottom terminal serif of S */}
          <path
            d="M 140 344 
               L 140 294 
               C 144 310 154 326 172 338 
               L 140 344 
               Z"
            fill={isDarkVariant ? '#050B18' : `url(#${gradientId})`}
          />
        </g>
      </svg>

      {/* Brand Typography: Clean Modern Sans-Serif SAYA FORM */}
      {!monogramOnly && (
        <div className={`flex flex-col ${layout === 'stacked' ? 'items-center' : ''}`}>
          <span
            className={`font-sans font-semibold tracking-[0.38em] ${
              isDarkVariant ? 'text-[#050B18]' : 'text-rosegold-gradient'
            } ${
              layout === 'stacked'
                ? 'text-lg sm:text-2xl mt-1'
                : 'text-base sm:text-xl leading-none'
            }`}
          >
            SAYA FORM
          </span>
          {showWordmark && (
            <span
              className={`text-[9px] uppercase tracking-[0.35em] font-medium mt-1 ${
                isDarkVariant ? 'text-[#050B18]/60' : 'text-[#DFC0B5]/80'
              }`}
            >
              Creative Direction • Paris
            </span>
          )}
        </div>
      )}
    </div>
  );
};
