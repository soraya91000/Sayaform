import React from 'react';
import { SayaFormLogo } from './brand/SayaFormLogo';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  onScrollToMarques: () => void;
  onScrollToAthletes: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToMarques,
  onScrollToAthletes,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center items-center bg-[#FAF8F5] text-[#050B18] pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle architectural background nuances */}
      <div className="absolute inset-0 bg-[radial-gradient(#C2927E_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.07] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C2927E]/8 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Emblem Presentation */}
        <div className="mb-8">
          <SayaFormLogo
            size={76}
            id="hero-sayaform-official-logo"
            className="rounded-2xl shadow-xl overflow-hidden"
          />
        </div>

        {/* Brand Tagline Header */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#050B18]/5 border border-[#050B18]/10 text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[#8F5542] font-semibold mb-6">
          <span>MAISON DE DIRECTION CRÉATIVE</span>
        </div>

        {/* Texte Principal Demandé */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-[#050B18] leading-[1.05] max-w-4xl mx-auto">
          IMAGE. IDENTITÉ.{' '}
          <span className="text-[#C2927E] block sm:inline">DIRECTION.</span>
        </h1>

        {/* Sous-Texte Demandé */}
        <p className="mt-6 sm:mt-8 text-base sm:text-xl md:text-2xl text-[#050B18]/75 font-light max-w-2xl mx-auto leading-relaxed">
          Saya Form façonne l’image, la perception et la désirabilité des marques, entreprises, athlètes & talents.
        </p>

        {/* 2 Boutons Demandés */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            id="hero-btn-marques"
            onClick={onScrollToMarques}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#050B18] text-[#FAF8F5] text-xs uppercase tracking-[0.22em] font-bold flex items-center justify-center gap-3 hover:bg-[#C2927E] hover:text-[#050B18] transition-all duration-300 shadow-xl group"
          >
            <span>Pôle marques & entreprises</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            id="hero-btn-athletes"
            onClick={onScrollToAthletes}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#050B18] border-2 border-[#050B18]/20 text-xs uppercase tracking-[0.22em] font-bold flex items-center justify-center gap-3 hover:border-[#C2927E] hover:text-[#C2927E] transition-all duration-300 shadow-sm group"
          >
            <span>Pôle athlètes & talents</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Subdued Scroll Hint */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#050B18]/40 font-medium">
          <span>Découvrir l'univers</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
