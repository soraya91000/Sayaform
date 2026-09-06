import React from 'react';
import { ProjectCaseStudy } from '../types';
import { SayaFormSymbol } from './brand/SayaFormSymbol';
import { SayaFormLogo } from './brand/SayaFormLogo';
import { X, Check, ArrowUpRight, Sparkles } from 'lucide-react';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenContact,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#050B18]/92 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#080F1F] border border-[#C2927E]/30 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-[#050B18] border border-[#C2927E]/30 text-[#FDFCF8] hover:text-[#C2927E] hover:border-[#C2927E] transition-colors z-20"
          aria-label="Fermer le dossier"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="border-b border-[#C2927E]/20 pb-6 pr-12">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-[#C2927E] mb-2 font-semibold">
            <SayaFormSymbol size={18} showRing={false} />
            <span>DOSSIER DE DIRECTION ARTISTIQUE • {project.number}</span>
          </div>
          <h3 className="editorial-font text-3xl sm:text-5xl text-[#FDFCF8] font-light italic">
            {project.title}
          </h3>
          <p className="text-xs uppercase tracking-[0.25em] text-[#DFC0B5] mt-1 font-mono">
            {project.subtitle}
          </p>
        </div>

        {/* Main Hero Shot */}
        <div className="relative rounded-2xl overflow-hidden border border-[#C2927E]/30 aspect-[16/9] shadow-xl">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B18] via-transparent to-transparent opacity-70" />
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-[#FDFCF8]">
            <span className="text-base font-semibold text-[#FDFCF8]">
              “{project.quote}”
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#C2927E] font-medium">
              {project.universeLabel}
            </span>
          </div>
        </div>

        {/* Core Case Study Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#C2927E] font-semibold border-b border-[#C2927E]/20 pb-2">
              Le Défi & Le Brief Initial
            </h4>
            <p className="text-sm text-[#FDFCF8]/80 font-light leading-relaxed">
              {project.brief}
            </p>

            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#C2927E] font-semibold border-b border-[#C2927E]/20 pb-2 pt-4">
              La Réponse de Direction Artistique
            </h4>
            <p className="text-sm text-[#FDFCF8]/80 font-light leading-relaxed">
              {project.direction}
            </p>
          </div>

          <div className="space-y-6 bg-[#050B18] p-6 rounded-2xl border border-[#C2927E]/20">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C2927E] block mb-2 font-semibold">
                Services Déployés
              </span>
              <ul className="space-y-2">
                {project.services.map((s, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-[#FDFCF8]/90">
                    <Check className="w-3.5 h-3.5 text-[#C2927E]" />
                    <span className="font-light">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C2927E] block mb-2 font-semibold">
                Nuancier Chromatique Développé
              </span>
              <div className="flex items-center gap-3">
                {project.palette.map((color, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div
                      className="w-7 h-7 rounded-full border border-white/20 shadow"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-[9px] font-mono text-[#FDFCF8]/60 uppercase">
                      {color}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {project.metrics && (
              <div className="pt-4 border-t border-[#C2927E]/15">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C2927E] block mb-3 font-semibold">
                  Résultats Mesurés
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-xl font-bold text-[#DFC0B5] font-mono">
                        {m.value}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-[#FDFCF8]/60">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Gallery Spread */}
        {project.galleryImages.length > 0 && (
          <div className="space-y-3 pt-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C2927E] block font-semibold">
              Planches Photographiques & Cadrages
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project.galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden border border-[#C2927E]/25 aspect-[4/3]"
                >
                  <img
                    src={img}
                    alt={`Planche ${i + 1}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal Action CTA */}
        <div className="pt-6 border-t border-[#C2927E]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <SayaFormLogo size={32} monogramOnly={true} />
            <span className="text-xs text-[#FDFCF8]/70 uppercase tracking-[0.2em] font-light">
              SAYA FORM • Paris Creative Direction
            </span>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-rosegold-gradient text-[#050B18] font-medium text-[10px] uppercase tracking-[0.25em] shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <span>Initier un Projet Similaire</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
