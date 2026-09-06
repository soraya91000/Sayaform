import React, { useState } from 'react';
import { SayaFormLogo } from './brand/SayaFormLogo';
import { SayaFormSymbol } from './brand/SayaFormSymbol';
import { ArrowDown, ArrowUpRight, Sparkles, Compass, Monitor, PenTool, RefreshCw, Palette } from 'lucide-react';
import { UniverseType } from '../types';

interface HeroSectionProps {
  onSelectUniverse: (universe: UniverseType) => void;
  onOpenMembershipModal: () => void;
  onOpenContactModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectUniverse,
  onOpenMembershipModal,
  onOpenContactModal,
}) => {
  const [activeTab, setActiveTab] = useState<'both' | 'brands' | 'athletes'>('both');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="section-hero"
      className="relative min-h-[96vh] pt-28 pb-20 overflow-hidden flex flex-col justify-between bg-[#050B18]"
    >
      {/* Background Ambience: Grain & Subtle Architectural Radial Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-[#C2927E]/8 blur-[180px] rounded-full" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#080F1F] opacity-70 blur-[120px]" />
        <div className="absolute inset-0 grain-overlay opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex-1 flex flex-col justify-between">
        {/* ========================================================
            TOP ANNOUNCEMENT: THE 4 CORE EXPERTISES
            Direction Artistique • Site Internet • Branding • Re-branding
            ======================================================== */}
        <div className="pt-2 mb-8">
          <div className="p-1 rounded-2xl bg-[#080F1F]/90 border border-[#C2927E]/30 backdrop-blur-md shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#C2927E]/20 text-center">
              {/* Pillar 1: Direction Artistique */}
              <div className="p-3.5 sm:p-4 flex flex-col items-center justify-center group hover:bg-[#C2927E]/5 transition-colors rounded-xl">
                <div className="flex items-center gap-2 text-[#C2927E] mb-1">
                  <Palette className="w-4 h-4" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#DFC0B5]">01</span>
                </div>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#FDFCF8] group-hover:text-[#C2927E] transition-colors">
                  Direction Artistique
                </span>
                <span className="text-[10px] text-[#FDFCF8]/60 font-light mt-0.5 tracking-wider hidden sm:block">
                  Campagnes, shoots & films
                </span>
              </div>

              {/* Pillar 2: Site Internet */}
              <div className="p-3.5 sm:p-4 flex flex-col items-center justify-center group hover:bg-[#C2927E]/5 transition-colors rounded-xl">
                <div className="flex items-center gap-2 text-[#C2927E] mb-1">
                  <Monitor className="w-4 h-4" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#DFC0B5]">02</span>
                </div>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#FDFCF8] group-hover:text-[#C2927E] transition-colors">
                  Site Internet
                </span>
                <span className="text-[10px] text-[#FDFCF8]/60 font-light mt-0.5 tracking-wider hidden sm:block">
                  Digital flagship & plateformes
                </span>
              </div>

              {/* Pillar 3: Branding */}
              <div className="p-3.5 sm:p-4 flex flex-col items-center justify-center group hover:bg-[#C2927E]/5 transition-colors rounded-xl">
                <div className="flex items-center gap-2 text-[#C2927E] mb-1">
                  <PenTool className="w-4 h-4" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#DFC0B5]">03</span>
                </div>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#FDFCF8] group-hover:text-[#C2927E] transition-colors">
                  Branding
                </span>
                <span className="text-[10px] text-[#FDFCF8]/60 font-light mt-0.5 tracking-wider hidden sm:block">
                  Identité visuelle & monogrammes
                </span>
              </div>

              {/* Pillar 4: Re-branding */}
              <div className="p-3.5 sm:p-4 flex flex-col items-center justify-center group hover:bg-[#C2927E]/5 transition-colors rounded-xl">
                <div className="flex items-center gap-2 text-[#C2927E] mb-1">
                  <RefreshCw className="w-4 h-4" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#DFC0B5]">04</span>
                </div>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#FDFCF8] group-hover:text-[#C2927E] transition-colors">
                  Re-branding
                </span>
                <span className="text-[10px] text-[#FDFCF8]/60 font-light mt-0.5 tracking-wider hidden sm:block">
                  Repositionnement & refonte
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            HERO MAIN BLOCK: DIRECT, IMPACTFUL & POWERFUL
            Showcasing SAYA FORM, the 2 Universes (Marques & Athlètes)
            ======================================================== */}
        <div className="my-auto py-4">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Real SAYA FORM Logo Display (monogram + wordmark) */}
            <div className="flex justify-center mb-3">
              <SayaFormLogo
                size={96}
                showWordmark={true}
                layout="stacked"
                id="hero-main-sf-logo"
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Clean, Simple & Modern Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FDFCF8] uppercase">
                IMAGE. IDENTITÉ.{' '}
                <span className="text-rosegold-gradient">DIRECTION.</span>
              </h1>
              <p className="text-xs sm:text-sm uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[#C2927E] font-medium">
                Maison de Direction Artistique & Perception de Marque
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#FDFCF8]/80 font-light max-w-2xl mx-auto leading-relaxed">
              Nous façonnons l’image de référence pour les marques d'exception, les entreprises et les athlètes de premier plan. De l'identité visuelle à la création de votre site internet et vos campagnes de re-branding.
            </p>

            {/* Direct Action Buttons: Univers Marques • Univers Athlètes • Adhésion Club */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5">
              <button
                id="hero-cta-brands"
                onClick={() => {
                  onSelectUniverse('brands');
                  scrollToSection('section-brand-identity');
                }}
                className="px-7 py-4 rounded-full bg-rosegold-gradient text-[#050B18] font-bold text-xs uppercase tracking-[0.25em] shadow-[0_10px_30px_rgba(194,146,126,0.35)] hover:shadow-[0_15px_40px_rgba(194,146,126,0.5)] hover:scale-[1.02] transition-all flex items-center gap-2.5"
              >
                <span>Univers Marques</span>
                <ArrowUpRight className="w-4 h-4 text-[#050B18]" />
              </button>

              <button
                id="hero-cta-athletes"
                onClick={() => {
                  onSelectUniverse('athletes');
                  scrollToSection('section-univers');
                }}
                className="px-7 py-4 rounded-full bg-[#080F1F] border border-[#C2927E]/40 text-[#FDFCF8] font-semibold text-xs uppercase tracking-[0.25em] hover:bg-[#C2927E]/15 hover:border-[#C2927E] hover:scale-[1.02] transition-all flex items-center gap-2.5"
              >
                <span>Univers Athlètes</span>
                <ArrowUpRight className="w-4 h-4 text-[#C2927E]" />
              </button>

              <button
                id="hero-cta-club"
                onClick={onOpenMembershipModal}
                className="px-6 py-4 rounded-full border border-white/20 text-[#DFC0B5] font-medium text-xs uppercase tracking-[0.25em] hover:text-[#FDFCF8] hover:border-[#C2927E] transition-all flex items-center gap-2"
              >
                <SayaFormSymbol size={16} showRing={false} />
                <span>Adhésion au Club</span>
              </button>
            </div>
          </div>

          {/* ========================================================
              TWO PILLARS COMPARISON: MARQUES VS ATHLETES
              Direct visual split making the two universes instant to grasp
              ======================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
            {/* Pillar A: Marques & Entreprises */}
            <div
              onClick={() => {
                onSelectUniverse('brands');
                scrollToSection('section-brand-identity');
              }}
              className="group cursor-pointer rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-[#0B1426] to-[#050B18] border border-[#C2927E]/30 hover:border-[#C2927E] transition-all duration-300 shadow-xl flex flex-col justify-between space-y-5"
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.3em] font-semibold bg-[#C2927E]/15 text-[#C2927E] border border-[#C2927E]/30">
                  PÔLE MARQUES & ENTREPRISES
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#C2927E] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#FDFCF8] mb-2 group-hover:text-[#DFC0B5] transition-colors">
                  Identité Visuelle & Sites Web
                </h3>
                <p className="text-xs sm:text-sm text-[#FDFCF8]/70 font-light leading-relaxed">
                  Création de marque, sites internet immersifs, direction de campagnes, packaging de luxe et re-branding complet pour marques établies et émergentes.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1 border-t border-[#C2927E]/15">
                {['Branding', 'Site Web', 'Direction Artistique', 'Re-branding'].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[9px] uppercase tracking-wider bg-[#050B18] text-[#DFC0B5] border border-[#C2927E]/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Pillar B: Athlètes d'Élite */}
            <div
              onClick={() => {
                onSelectUniverse('athletes');
                scrollToSection('section-univers');
              }}
              className="group cursor-pointer rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-[#0B1426] to-[#050B18] border border-[#C2927E]/30 hover:border-[#C2927E] transition-all duration-300 shadow-xl flex flex-col justify-between space-y-5"
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.3em] font-semibold bg-[#C2927E]/15 text-[#C2927E] border border-[#C2927E]/30">
                  PÔLE ATHLÈTES D'ÉLITE
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#C2927E] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#FDFCF8] mb-2 group-hover:text-[#DFC0B5] transition-colors">
                  Personal Branding & Tunnel Walk
                </h3>
                <p className="text-xs sm:text-sm text-[#FDFCF8]/70 font-light leading-relaxed">
                  Architecture d'image pour sportifs internationaux, stylisme d'avant-match, shootings éditoriaux 35mm et négociation d'accords avec les maisons de mode.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1 border-t border-[#C2927E]/15">
                {['Image Personnelle', 'Tunnel Vestiaire', 'Shoot 35mm', 'Pass Club'].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[9px] uppercase tracking-wider bg-[#050B18] text-[#DFC0B5] border border-[#C2927E]/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Prompt */}
        <div className="pt-8 flex items-center justify-center">
          <button
            onClick={() => scrollToSection('section-manifesto')}
            className="flex flex-col items-center gap-1.5 text-[#C2927E]/80 hover:text-[#C2927E] transition-colors"
          >
            <span className="text-[9px] uppercase tracking-[0.35em] font-medium">Découvrir la Maison</span>
            <div className="w-7 h-7 rounded-full border border-[#C2927E]/30 flex items-center justify-center">
              <ArrowDown className="w-3 h-3 animate-bounce text-[#C2927E]" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
