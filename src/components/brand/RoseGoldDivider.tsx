import React from 'react';
import { SayaFormSymbol } from './SayaFormSymbol';

interface RoseGoldDividerProps {
  className?: string;
  withSymbol?: boolean;
  symbolSize?: number;
  label?: string;
  variant?: 'feathers' | 'minimal' | 'dotted';
}

export const RoseGoldDivider: React.FC<RoseGoldDividerProps> = ({
  className = '',
  withSymbol = true,
  symbolSize = 32,
  label,
  variant = 'feathers',
}) => {
  return (
    <div className={`relative flex items-center justify-center w-full py-8 my-4 ${className}`}>
      {/* Left Hairline */}
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#C2927E]/30 to-[#C2927E]/80" />

      {/* Center Signature Element */}
      {withSymbol && (
        <div className="mx-6 flex items-center gap-3">
          {variant === 'feathers' && (
            <SayaFormSymbol size={symbolSize} showRing={true} className="text-[#C2927E]" />
          )}
          {label && (
            <span className="editorial-font italic tracking-[0.3em] text-[#C2927E] text-sm uppercase">
              {label}
            </span>
          )}
        </div>
      )}

      {/* Right Hairline */}
      <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#C2927E]/30 to-[#C2927E]/80" />
    </div>
  );
};
