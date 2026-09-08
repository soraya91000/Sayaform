import React from 'react';
import { ArrowUpRight, Building2, Trophy, Sparkles } from 'lucide-react';
import { SayaFormLogo } from './brand/SayaFormLogo';

interface DualPillarsSectionProps {
  onScrollToMarques: () => void;
  onScrollToAthletes: () => void;
}

export const DualPillarsSection: React.FC<DualPillarsSectionProps> = ({
  onScrollToMarques,
  onScrollToAthletes,
}) => {
  return (
    <section id="section-piliers" className="py-20 bg-[#FAF8F5] relative border-b border-[#050B18]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headline */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#8F5542] font-semibold block mb-2">
            DEUX EXPERTISES • UNE MÊME SIGNATURE
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#050B18]">
            LES DEUX PILIERS DE LA MAISON
          </h2>
        </div>

        {/* 2 Grands Blocs Élégants sur Fond Bleu Nuit, Bien Encadrés */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* ========================================================
              BLOC 1: PÔLE MARQUES & ENTREPRISES
              ======================================================== */}
          <div
            id="bloc-marques"
            className="group relative rounded-3xl bg-[#050B18] text-[#FDFCF8] p-8 sm:p-12 border-2 border-[#C2927E]/40 hover:border-[#C2927E] transition-all duration-500 shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C2927E]/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Header inside block */}
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full text-[9px] uppercase tracking-[0.25em] bg-[#C2927E]/15 border border-[#C2927E]/40 text-[#DFC0B5] font-bold">
                  01 • ÉCOSYSTÈMES DE MARQUE
                </span>
                <div className="w-10 h-10 rounded-full bg-[#0A1226] border border-[#C2927E]/30 flex items-center justify-center text-[#C2927E]">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#FDFCF8] leading-tight">
                  Pôle marques & entreprises
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#FDFCF8]/75 font-light leading-relaxed">
                  Nous concevons l’identité, les plateformes web et les récits visuels des marques qui refusent la banalité. Une direction artistique complète pensée pour captiver et fidéliser.
                </p>
              </div>

              {/* Key Domains Pills */}
              <div className="pt-2 flex flex-wrap gap-2">
                {[
                  'Branding',
                  'Re-branding',
                  'Identité visuelle',
                  'Site internet',
                  'Direction artistique',
                ].map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-wider bg-[#080F20] border border-[#C2927E]/30 text-[#DFC0B5] font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Button */}
            <div className="relative z-10 pt-8 mt-6 border-t border-[#C2927E]/20">
              <button
                onClick={onScrollToMarques}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-rosegold-gradient text-[#050B18] text-xs uppercase tracking-[0.22em] font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md group-hover:scale-[1.01]"
              >
                <span>Découvrir l'offre marques</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ========================================================
              BLOC 2: PÔLE ATHLÈTES & TALENTS
              ======================================================== */}
          <div
            id="bloc-athletes"
            className="group relative rounded-3xl bg-[#050B18] text-[#FDFCF8] p-8 sm:p-12 border-2 border-[#C2927E]/40 hover:border-[#C2927E] transition-all duration-500 shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C2927E]/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Header inside block */}
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full text-[9px] uppercase tracking-[0.25em] bg-[#C2927E]/15 border border-[#C2927E]/40 text-[#DFC0B5] font-bold">
                  02 • SPORTIFS, ARTISTES & TALENTS PUBLICS
                </span>
                <div className="w-10 h-10 rounded-full bg-[#0A1226] border border-[#C2927E]/30 flex items-center justify-center text-[#C2927E]">
                  <Trophy className="w-5 h-5" />
                </div>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#FDFCF8] leading-tight">
                  Pôle athlètes & talents
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#FDFCF8]/75 font-light leading-relaxed">
                  Sportifs, artistes, créateurs et personnalités publiques : nous professionnalisons et magnifions votre image pour bâtir une stature iconique et capter les partenariats de prestige.
                </p>
              </div>

              {/* Key Domains Pills */}
              <div className="pt-2 flex flex-wrap gap-2">
                {[
                  'Image management',
                  'Personal branding',
                  'Positionnement',
                  'Gestion d’image digitale',
                  'Stratégie de communication',
                ].map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-wider bg-[#080F20] border border-[#C2927E]/30 text-[#DFC0B5] font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Button */}
            <div className="relative z-10 pt-8 mt-6 border-t border-[#C2927E]/20">
              <button
                onClick={onScrollToAthletes}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white text-[#050B18] text-xs uppercase tracking-[0.22em] font-bold flex items-center justify-center gap-2 hover:bg-[#C2927E] hover:text-[#050B18] transition-all shadow-md group-hover:scale-[1.01]"
              >
                <span>Découvrir l'offre athlètes & talents</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
