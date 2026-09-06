import React, { useState } from 'react';
import { SayaFormSymbol } from './brand/SayaFormSymbol';
import { SayaFormLogo } from './brand/SayaFormLogo';
import { ArrowUpRight, Check, Eye, Layers, Sparkles } from 'lucide-react';
import { UniverseType } from '../types';

interface UniversSectionProps {
  activeUniverse: UniverseType;
  onSelectUniverse: (universe: UniverseType) => void;
  onViewProject: (projectId: string) => void;
}

export const UniversSection: React.FC<UniversSectionProps> = ({
  activeUniverse,
  onSelectUniverse,
  onViewProject,
}) => {
  const [hoveredSide, setHoveredSide] = useState<'athletes' | 'brands' | null>(null);

  return (
    <section id="section-univers" className="py-24 bg-[#FAF9F5] text-[#050B18] relative overflow-hidden border-b border-[#050B18]/10">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#C2927E]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#050B18]/15">
          <div>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-[#C2927E] mb-3 font-bold">
              <SayaFormSymbol size={20} showRing={false} />
              <span>LES DEUX PILIERS DE LA MAISON</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase text-[#050B18] tracking-tight">
              DEUX UNIVERS.{' '}
              <span className="text-[#C2927E]">
                UNE MÊME EXIGENCE.
              </span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#050B18]/70 max-w-md font-light leading-relaxed">
            Une grammaire visuelle commune réconciliant la puissance brute du sport et la sophistication éditoriale du luxe contemporain.
          </p>
        </div>

        {/* Dual Universe Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ========================================================
              UNIVERS 1: MARQUES & ENTREPRISES (HEAVILY HIGHLIGHTED)
              ======================================================== */}
          <div
            id="card-univers-brands"
            onMouseEnter={() => setHoveredSide('brands')}
            onMouseLeave={() => setHoveredSide(null)}
            className={`group relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#0B1426] to-[#050B18] text-[#FDFCF8] border transition-all duration-500 p-8 sm:p-10 flex flex-col justify-between shadow-xl ${
              activeUniverse === 'brands' || hoveredSide === 'brands'
                ? 'border-[#C2927E] ring-2 ring-[#C2927E]/40 shadow-[0_20px_50px_rgba(194,146,126,0.25)]'
                : 'border-[#C2927E]/30 hover:border-[#C2927E]'
            }`}
          >
            {/* Background Image Layer with Scrim */}
            <div className="absolute inset-0 z-0">
              <img
                src="/src/assets/images/sf_brands_hospitality_1788627098408.jpg"
                alt="SAYA FORM — Univers Marques"
                className="w-full h-full object-cover opacity-25 group-hover:opacity-35 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B18] via-[#050B18]/80 to-[#050B18]/50" />
            </div>

            <div className="relative z-10 flex flex-col justify-between h-full space-y-8">
              {/* Top Meta */}
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full text-[9px] uppercase tracking-[0.3em] bg-[#C2927E]/20 border border-[#C2927E]/50 text-[#DFC0B5] font-bold">
                  01 • BRANDS & HOSPITALITY
                </span>
                <SayaFormLogo size={32} monogramOnly={true} />
              </div>

              {/* Title & Description */}
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-4xl text-[#FDFCF8] font-bold uppercase tracking-wide">
                  Marques, Hospitality & Luxe
                </h3>
                <p className="text-sm sm:text-base text-[#FDFCF8]/85 font-light leading-relaxed">
                  Pour les hôtels confidentiels, restaurants d'auteur, maisons de mode et entreprises créatives. Nous concevons l'ensemble de votre écosystème : identité visuelle, sites internet d'exception, packaging et campagnes de re-branding.
                </p>

                {/* Keywords Cloud */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    'Direction Artistique',
                    'Sites Internet',
                    'Branding Spatial',
                    'Re-branding',
                    'Packaging Cuir',
                    'Direction Photo'
                  ].map((kw, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-[9px] uppercase tracking-[0.2em] bg-[#050B18]/80 border border-[#C2927E]/30 text-[#DFC0B5]"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Atmospheric Note */}
              <div className="p-4 rounded-xl bg-[#050B18]/80 border border-[#C2927E]/30 text-xs">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#C2927E] block mb-1 font-bold">
                  Atmosphère Développée :
                </span>
                <p className="text-[#FDFCF8]/90 text-sm font-medium">
                  Éditoriale, premium, architecturale, hautement désirable. Le toucher du cuivre et du papier d'art.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => onSelectUniverse('brands')}
                  className="px-6 py-3 rounded-full bg-rosegold-gradient text-[#050B18] text-[10px] uppercase tracking-[0.25em] font-bold flex items-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <span>Filtrer Marques</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onViewProject('maison-kallos')}
                  className="px-4 py-3 text-[10px] uppercase tracking-[0.25em] text-[#FDFCF8]/80 hover:text-[#C2927E] transition-colors flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-[#C2927E]" />
                  <span>Case Study Marques</span>
                </button>
              </div>
            </div>
          </div>

          {/* ========================================================
              UNIVERS 2: ATHLÈTES D'ÉLITE
              ======================================================== */}
          <div
            id="card-univers-athletes"
            onMouseEnter={() => setHoveredSide('athletes')}
            onMouseLeave={() => setHoveredSide(null)}
            className={`group relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#080F1F] to-[#050B18] text-[#FDFCF8] border transition-all duration-500 p-8 sm:p-10 flex flex-col justify-between shadow-xl ${
              activeUniverse === 'athletes' || hoveredSide === 'athletes'
                ? 'border-[#C2927E] ring-2 ring-[#C2927E]/40 shadow-[0_20px_50px_rgba(194,146,126,0.25)]'
                : 'border-[#C2927E]/30 hover:border-[#C2927E]'
            }`}
          >
            {/* Background Image Layer with Scrim */}
            <div className="absolute inset-0 z-0">
              <img
                src="/src/assets/images/sf_athletes_cinematic_1788627081394.jpg"
                alt="SAYA FORM — Univers Athlètes"
                className="w-full h-full object-cover opacity-25 group-hover:opacity-35 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B18] via-[#050B18]/80 to-[#050B18]/50" />
            </div>

            <div className="relative z-10 flex flex-col justify-between h-full space-y-8">
              {/* Top Meta */}
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full text-[9px] uppercase tracking-[0.3em] bg-[#050B18]/80 border border-[#C2927E]/40 text-[#C2927E] font-bold">
                  02 • ATHLETES & TUNNEL WALK
                </span>
                <SayaFormSymbol size={28} showRing={true} className="text-[#C2927E]" />
              </div>

              {/* Title & Description */}
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-4xl text-[#FDFCF8] font-bold uppercase tracking-wide">
                  Football & Sport d'Élite
                </h3>
                <p className="text-sm sm:text-base text-[#FDFCF8]/85 font-light leading-relaxed">
                  L'athlète moderne est une institution à part entière. Nous dirigeons son image dans le vestiaire, le tunnel, les shootings éditoriaux et ses prises de parole de marque pour faire de sa présence une évidence culturelle.
                </p>

                {/* Keywords Cloud */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    'Tunnel Walk',
                    'Vestiaire',
                    'Shooting 35mm',
                    'Image Personnelle',
                    'Campagnes de Marque',
                    'Monogramme Joueur'
                  ].map((kw, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-[9px] uppercase tracking-[0.2em] bg-[#050B18]/80 border border-[#C2927E]/30 text-[#DFC0B5]"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Atmospheric Note */}
              <div className="p-4 rounded-xl bg-[#050B18]/80 border border-[#C2927E]/30 text-xs">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#C2927E] block mb-1 font-bold">
                  Atmosphère Développée :
                </span>
                <p className="text-[#FDFCF8]/90 text-sm font-medium">
                  Puissante, élégante, cinématographique, moderne. La tension avant l'entrée sur le terrain.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => onSelectUniverse('athletes')}
                  className="px-6 py-3 rounded-full bg-rosegold-gradient text-[#050B18] text-[10px] uppercase tracking-[0.25em] font-bold flex items-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <span>Filtrer Athlètes</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onViewProject('olympia-nocturne')}
                  className="px-4 py-3 text-[10px] uppercase tracking-[0.25em] text-[#FDFCF8]/80 hover:text-[#C2927E] transition-colors flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-[#C2927E]" />
                  <span>Case Study Athlètes</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
