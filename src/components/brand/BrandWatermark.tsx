import React from 'react';
import { SayaFormLogo } from './SayaFormLogo';
import { SayaFormSymbol } from './SayaFormSymbol';

interface BrandWatermarkProps {
  type?: 'logo' | 'symbol';
  size?: number;
  className?: string;
  opacity?: number;
}

export const BrandWatermark: React.FC<BrandWatermarkProps> = ({
  type = 'logo',
  size = 500,
  className = '',
  opacity = 0.04,
}) => {
  return (
    <div
      className={`pointer-events-none absolute select-none mix-blend-screen overflow-hidden ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {type === 'logo' ? (
        <SayaFormLogo size={size} monogramOnly={true} id="watermark-sf" />
      ) : (
        <SayaFormSymbol size={size} showRing={true} id="watermark-sym" />
      )}
    </div>
  );
};
