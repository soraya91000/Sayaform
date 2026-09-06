import React from 'react';
import { SayaFormSymbol } from './brand/SayaFormSymbol';
import { SayaFormLogo } from './brand/SayaFormLogo';
import { Sparkles, Quote, CheckCircle2 } from 'lucide-react';

export const ManifestoSection: React.FC = () => {
  return (
    <section
      id="section-manifesto"
      className="relative py-28 bg-[#FDFCF8] text-[#050B18] overflow-hidden select-none border-t border-b border-[#C2927E]/20"
    >
      {/* Background Decorative Graphic Elements */}
      <div className="absolute top-10 right-10 pointer-events-none opacity-5">
        <SayaFormSymbol size={420} showRing={true} variant="stroke" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header Eyebrow */}
        <div className="flex items-center justify-between border-b border-[#050B18]/15 pb-4 mb-14 text-[10px] uppercase tracking-[0.4em] font-light text-[#8F5542]">
          <div className="flex items-center gap-2.5">
            <SayaFormSymbol size={18} showRing={false} />
            <span className="font-medium tracking-[0.35em]">MANIFORME • MANIFESTE ÉDITORIAL</span>
          </div>
          <span className="hidden sm:inline-block tracking-[0.3em] text-[#050B18]/60">
            PHILOSOPHIE & VISION SAYA FORM
          </span>
        </div>

        {/* Big Editorial Quote / Statement in Bold Typography style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-8">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#C2927E] font-bold block mb-3">
              Notre Postulat Fondamental
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[1.08] tracking-tight text-[#050B18]">
              L'image n'est pas un accessoire.{' '}
              <span className="text-[#C2927E] block sm:inline">
                C'est une signature de pouvoir.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between pt-4 lg:border-l lg:border-[#050B18]/15 lg:pl-8 space-y-6">
            <p className="text-base text-[#050B18]/80 font-light leading-relaxed">
              Trop d’athlètes de classe mondiale et de marques d'exception confient leur présence visuelle à des exécutants sans culture artistique.
            </p>
            <p className="text-sm text-[#050B18]/70 font-light leading-relaxed">
              Chez SAYA FORM, nous réinjectons les codes de la haute couture, du cinéma d’auteur et de l’architecture contemporaine pour concevoir des identités inaltérables.
            </p>
            <div className="pt-2 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#C2927E] font-bold">
              <span className="w-8 h-[2px] bg-[#C2927E]" />
              <span>Direction Artistique Fondatrice</span>
            </div>
          </div>
        </div>

        {/* 3 Asymmetric Editorial Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="p-8 rounded-2xl bg-white border border-[#050B18]/10 shadow-sm flex flex-col justify-between space-y-6 hover:border-[#C2927E]/40 transition-all duration-300">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-[#C2927E] font-mono">01</span>
              <div className="w-9 h-9 rounded-full bg-[#050B18] flex items-center justify-center text-[#FDFCF8]">
                <SayaFormSymbol size={18} showRing={false} variant="ivory" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase text-[#050B18] tracking-wide mb-2">
                Le Silence du Vestiaire
              </h3>
              <p className="text-sm text-[#050B18]/70 font-light leading-relaxed">
                Remplacer les logos criards et les artifices publicitaires par une stature épurée. Les plus grands athlètes marquent les esprits avant même de toucher le ballon.
              </p>
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#8F5542] font-semibold pt-3 border-t border-[#050B18]/10">
              Athlètes & Lifestyle
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 rounded-2xl bg-white border border-[#050B18]/10 shadow-sm flex flex-col justify-between space-y-6 hover:border-[#C2927E]/40 transition-all duration-300">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-[#C2927E] font-mono">02</span>
              <div className="w-9 h-9 rounded-full bg-[#050B18] flex items-center justify-center text-[#FDFCF8]">
                <SayaFormSymbol size={18} showRing={false} variant="ivory" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase text-[#050B18] tracking-wide mb-2">
                L’Exigence Sensorielle
              </h3>
              <p className="text-sm text-[#050B18]/70 font-light leading-relaxed">
                Hospitality, packaging, matière noble. Pour les marques de prestige, nous sculptons des textures tactiles et des identités qui suscitent le désir immédiat.
              </p>
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#8F5542] font-semibold pt-3 border-t border-[#050B18]/10">
              Marques & Hospitality
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 rounded-2xl bg-white border border-[#050B18]/10 shadow-sm flex flex-col justify-between space-y-6 hover:border-[#C2927E]/40 transition-all duration-300">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-[#C2927E] font-mono">03</span>
              <div className="w-9 h-9 rounded-full bg-[#050B18] flex items-center justify-center text-[#FDFCF8]">
                <SayaFormLogo size={20} monogramOnly={true} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase text-[#050B18] tracking-wide mb-2">
                La Continuité Visuelle
              </h3>
              <p className="text-sm text-[#050B18]/70 font-light leading-relaxed">
                Du premier post Instagram au site web flagship et au shooting de campagne mondial : un univers d'une cohérence absolue.
              </p>
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#8F5542] font-semibold pt-3 border-t border-[#050B18]/10">
              Curation & Direction Globale
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
