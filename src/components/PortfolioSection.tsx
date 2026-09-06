import React, { useState } from 'react';
import { ProjectCaseStudy, UniverseType } from '../types';
import { SayaFormSymbol } from './brand/SayaFormSymbol';
import { SayaFormLogo } from './brand/SayaFormLogo';
import { RoseGoldDivider } from './brand/RoseGoldDivider';
import { ArrowUpRight, SlidersHorizontal, Sparkles, Image as ImageIcon } from 'lucide-react';

interface PortfolioSectionProps {
  projects: ProjectCaseStudy[];
  activeUniverse: UniverseType;
  onSelectUniverse: (universe: UniverseType) => void;
  onOpenCaseStudy: (project: ProjectCaseStudy) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  projects,
  activeUniverse,
  onSelectUniverse,
  onOpenCaseStudy,
}) => {
  const [sliderPositions, setSliderPositions] = useState<{ [key: string]: number }>({
    'olympia-nocturne': 50,
    'maison-kallos': 50,
  });

  const filteredProjects = projects.filter((p) => {
    if (activeUniverse === 'all') return true;
    return p.category === activeUniverse;
  });

  const handleSliderChange = (projectId: string, value: number) => {
    setSliderPositions((prev) => ({ ...prev, [projectId]: value }));
  };

  return (
    <section id="section-portfolio" className="py-24 bg-[#FDFCF8] text-[#050B18] relative border-b border-[#050B18]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#050B18]/15">
          <div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-[#C2927E] mb-3 font-bold">
              <SayaFormSymbol size={18} showRing={false} />
              <span>ÉTUDES DE CAS & RÉALISATIONS DE MARQUE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase text-[#050B18] tracking-tight">
              ARCHIVES &{' '}
              <span className="text-[#C2927E]">
                CASE STUDIES
              </span>
            </h2>
          </div>

          {/* Filter Bar */}
          <div className="mt-6 md:mt-0 flex items-center gap-2 bg-white p-1.5 rounded-full border border-[#050B18]/15 shadow-sm">
            <button
              id="portfolio-filter-all"
              onClick={() => onSelectUniverse('all')}
              className={`px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-semibold rounded-full transition-all duration-300 ${
                activeUniverse === 'all'
                  ? 'bg-[#050B18] text-[#FDFCF8]'
                  : 'text-[#050B18]/70 hover:text-[#050B18]'
              }`}
            >
              Tous ({projects.length})
            </button>
            <button
              id="portfolio-filter-brands"
              onClick={() => onSelectUniverse('brands')}
              className={`px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-semibold rounded-full transition-all duration-300 ${
                activeUniverse === 'brands'
                  ? 'bg-[#050B18] text-[#FDFCF8]'
                  : 'text-[#050B18]/70 hover:text-[#050B18]'
              }`}
            >
              Marques (2)
            </button>
            <button
              id="portfolio-filter-athletes"
              onClick={() => onSelectUniverse('athletes')}
              className={`px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-semibold rounded-full transition-all duration-300 ${
                activeUniverse === 'athletes'
                  ? 'bg-[#050B18] text-[#FDFCF8]'
                  : 'text-[#050B18]/70 hover:text-[#050B18]'
              }`}
            >
              Athlètes (2)
            </button>
          </div>
        </div>

        {/* Magazine Spreads Flow */}
        <div className="space-y-20">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            const sliderPos = sliderPositions[project.id] ?? 50;

            return (
              <article
                key={project.id}
                id={`project-${project.id}`}
                className="relative rounded-3xl p-6 sm:p-10 lg:p-12 bg-white border border-[#050B18]/15 shadow-sm transition-all duration-500 hover:border-[#C2927E] hover:shadow-xl group"
              >
                {/* Top Bar of the Case Study */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#050B18]/10 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl sm:text-4xl text-[#C2927E] font-bold font-mono leading-none">
                      {project.number}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase tracking-[0.3em] text-[#8F5542] font-bold">
                        {project.universeLabel}
                      </span>
                      <span className="text-[11px] text-[#050B18]/60 tracking-wider font-medium">
                        Client : {project.client}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-[10px] text-[#050B18]/50 tracking-[0.25em] uppercase font-mono">
                      Année {project.year}
                    </span>
                    <button
                      onClick={() => onOpenCaseStudy(project)}
                      className="px-4 py-2 rounded-full bg-[#050B18] text-[#FDFCF8] text-[10px] uppercase tracking-[0.25em] hover:bg-[#C2927E] hover:text-[#050B18] transition-all flex items-center gap-1.5 font-bold"
                    >
                      <span>Dossier Complet</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Main Asymmetric Magazine Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left (or Right) Content Narrative */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-between space-y-6 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl text-[#050B18] font-bold uppercase tracking-tight leading-tight">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-[#8F5542] font-bold">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-[#FAF9F5] border-l-4 border-[#C2927E] space-y-2">
                      <span className="text-[9px] uppercase tracking-[0.25em] text-[#8F5542] font-bold">
                        Note d'Intention
                      </span>
                      <p className="text-base sm:text-lg text-[#050B18] font-medium leading-snug">
                        “{project.quote}”
                      </p>
                    </div>

                    <div className="space-y-3 text-sm text-[#050B18]/80 font-light leading-relaxed">
                      <p>
                        <strong className="font-semibold text-[#050B18]">Le Défi : </strong>
                        {project.brief}
                      </p>
                      <p>
                        <strong className="font-semibold text-[#050B18]">Direction Créative : </strong>
                        {project.direction}
                      </p>
                    </div>

                    {/* Services Deliverables Badges */}
                    <div className="space-y-2">
                      <span className="text-[9px] uppercase tracking-[0.3em] text-[#050B18]/50 block font-bold">
                        Champs d'Intervention :
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.services.map((srv, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded text-[9px] uppercase tracking-wider bg-[#FAF9F5] border border-[#050B18]/15 text-[#050B18] font-medium"
                          >
                            {srv}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics / Impact */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#050B18]/10">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-2xl sm:text-3xl font-bold text-[#050B18] tracking-tight">
                            {metric.value}
                          </span>
                          <span className="text-[10px] text-[#050B18]/60 uppercase tracking-widest font-medium">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right (or Left) Visual Stage */}
                  <div
                    className={`lg:col-span-7 relative ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    {project.beforeAfter ? (
                      /* Interactive Before/After Reveal Stage */
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#050B18]/15 select-none aspect-[16/11]">
                        {/* After Image (Full Background) */}
                        <img
                          src={project.beforeAfter.afterImage}
                          alt={`${project.title} - Direction Finale SAYA FORM`}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#050B18]/90 text-[9px] uppercase tracking-[0.3em] text-[#C2927E] font-bold z-10 border border-[#C2927E]/40">
                          Après • SAYA FORM
                        </div>

                        {/* Before Image (Clipped Left Layer) */}
                        <div
                          className="absolute inset-0 overflow-hidden"
                          style={{ width: `${sliderPos}%` }}
                        >
                          <img
                            src={project.beforeAfter.beforeImage}
                            alt={`${project.title} - Image Initiale`}
                            className="absolute top-0 left-0 h-full max-w-none object-cover"
                            style={{ width: '100%' }}
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#050B18]/90 text-[9px] uppercase tracking-[0.3em] text-white/80 font-bold z-10 border border-white/20">
                            Avant Refonte
                          </div>
                        </div>

                        {/* Draggable Divider Handle */}
                        <div
                          className="absolute top-0 bottom-0 w-0.5 bg-[#C2927E] z-20 cursor-ew-resize flex items-center justify-center pointer-events-none"
                          style={{ left: `${sliderPos}%` }}
                        >
                          <div className="w-8 h-8 rounded-full bg-[#050B18] border-2 border-[#C2927E] flex items-center justify-center text-[#C2927E] shadow-2xl">
                            <SlidersHorizontal className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        {/* Invisible Native Range Input for Perfect Dragging */}
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={sliderPos}
                          onChange={(e) => handleSliderChange(project.id, Number(e.target.value))}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                          aria-label={`Comparateur avant/après pour ${project.title}`}
                        />
                      </div>
                    ) : (
                      /* Classic Curated Gallery Spread */
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#050B18]/15 group aspect-[16/11]">
                        <img
                          src={project.heroImage}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050B18]/80 via-transparent to-transparent" />

                        {/* Bottom Thumbnail Inset */}
                        {project.galleryImages && project.galleryImages[0] && (
                          <div className="absolute bottom-4 right-4 w-32 h-20 rounded-xl overflow-hidden border-2 border-white shadow-xl hidden sm:block">
                            <img
                              src={project.galleryImages[0]}
                              alt="Détail éditorial"
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
