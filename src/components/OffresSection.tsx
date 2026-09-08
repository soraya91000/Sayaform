import React, { useState } from 'react';
import { ArrowUpRight, Check, Sparkles, Building2, Trophy } from 'lucide-react';
import { SayaFormLogo } from './brand/SayaFormLogo';

interface OffresSectionProps {
  onSelectOffer: (offerName: string, offerPrice: string, pole: string) => void;
  onOpenContact: (subject?: string) => void;
}

const PAYPAL_OFFERS = {
  essential: 'https://paypal.me/sohsn91000/365EUR?locale.x=fr_FR&country.x=FR',
  signature: 'https://paypal.me/sohsn91000/550EUR?locale.x=fr_FR&country.x=FR',
  direction: 'https://paypal.me/sohsn91000/750EUR?locale.x=fr_FR&country.x=FR',
};

export const OffresSection: React.FC<OffresSectionProps> = ({
  onSelectOffer,
  onOpenContact,
}) => {
  const [activeTab, setActiveTab] = useState<'marques' | 'athletes'>('marques');

  const scrollToContact = (subject: string) => {
    onOpenContact(subject);
    const el = document.getElementById('section-contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="section-offres" className="py-24 bg-[#FAF8F5] text-[#050B18] relative border-b border-[#050B18]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#8F5542] font-semibold block mb-3">
            TARIFS & FORMULES TRANSPARENTES
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#050B18]">
            LES OFFRES SAYA FORM
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#050B18]/70 font-light leading-relaxed">
            Deux pôles d’intervention sur-mesure. Des formules claires, sans superflu, conçues pour une montée en gamme immédiate.
          </p>

          {/* 2 Pôles Switcher Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-[#050B18] border border-[#C2927E]/30 shadow-lg">
            <button
              onClick={() => setActiveTab('marques')}
              className={`px-6 sm:px-8 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all flex items-center gap-2 ${
                activeTab === 'marques'
                  ? 'bg-rosegold-gradient text-[#050B18] shadow-md'
                  : 'text-[#FDFCF8]/70 hover:text-[#FDFCF8]'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Marques & Entreprises</span>
            </button>
            <button
              onClick={() => setActiveTab('athletes')}
              className={`px-6 sm:px-8 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all flex items-center gap-2 ${
                activeTab === 'athletes'
                  ? 'bg-rosegold-gradient text-[#050B18] shadow-md'
                  : 'text-[#FDFCF8]/70 hover:text-[#FDFCF8]'
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>Athlètes & Talents</span>
            </button>
          </div>
        </div>

        {/* ========================================================
            TAB 1: PÔLE MARQUES & ENTREPRISES
            ======================================================== */}
        {activeTab === 'marques' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#8F5542] font-semibold">
                PÔLE MARQUES & ENTREPRISES
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
              {/* ESSENTIAL */}
              <div className="relative rounded-3xl p-8 sm:p-10 bg-[#FDFCF8] border border-[#050B18]/15 hover:border-[#C2927E] shadow-sm flex flex-col justify-between transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#050B18]/10">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#8F5542] font-bold">
                      REMISE À NIVEAU
                    </span>
                    <SayaFormLogo size={24} variant="transparent" />
                  </div>

                  <h3 className="text-2xl font-bold uppercase tracking-tight text-[#050B18]">
                    ESSENTIAL
                  </h3>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-bold font-mono text-[#050B18]">
                      365 €
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[#050B18]/50">
                      / an
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-[#050B18]/70 font-light leading-relaxed">
                    Pour remettre à niveau l’image d’une entreprise ou d’une marque.
                  </p>

                  <div className="pt-6 mt-6 border-t border-[#050B18]/10">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#8F5542] font-bold block mb-3">
                      Inclus :
                    </span>
                    <ul className="space-y-2.5">
                      {[
                        'Création ou refonte du logo',
                        'Palette de couleurs',
                        'Typographies',
                        'Identité visuelle',
                        'Mini-charte graphique',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#050B18]/85">
                          <Check className="w-3.5 h-3.5 text-[#C2927E] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 mt-6">
                  <a
                    href={PAYPAL_OFFERS.essential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-full bg-[#050B18] text-[#FDFCF8] hover:bg-[#C2927E] hover:text-[#050B18] text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <span>Choisir Essential</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* SIGNATURE (Mis en avant) */}
              <div className="relative rounded-3xl p-8 sm:p-10 bg-[#050B18] text-[#FDFCF8] border-2 border-[#C2927E] shadow-2xl lg:-translate-y-2 flex flex-col justify-between transition-all duration-300">
                {/* Badge La plus choisie */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-rosegold-gradient text-[#050B18] text-[9px] uppercase tracking-[0.25em] font-bold shadow-md">
                  La plus choisie
                </div>

                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#C2927E]/20">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#C2927E] font-bold">
                      IMAGE & PRÉSENCE DIGITALE
                    </span>
                    <SayaFormLogo size={28} variant="original" onDark={true} />
                  </div>

                  <h3 className="text-2xl font-bold uppercase tracking-tight text-[#FDFCF8]">
                    SIGNATURE
                  </h3>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-bold font-mono text-[#C2927E]">
                      550 €
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[#FDFCF8]/60">
                      / an
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-[#FDFCF8]/75 font-light leading-relaxed">
                    Tout Essential + création d’une présence digitale cohérente.
                  </p>

                  <div className="pt-6 mt-6 border-t border-[#C2927E]/20">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#C2927E] font-bold block mb-3">
                      Inclus :
                    </span>
                    <ul className="space-y-2.5">
                      {[
                        'Tout le pack Essential',
                        'Création ou optimisation des réseaux sociaux',
                        'Bio et présentation des comptes',
                        'Direction visuelle du feed',
                        'Stories à la une & templates personnalisés',
                        'Premières publications de lancement clé en main',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#FDFCF8]/90">
                          <Check className="w-3.5 h-3.5 text-[#C2927E] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 mt-6">
                  <a
                    href={PAYPAL_OFFERS.signature}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-full bg-rosegold-gradient text-[#050B18] hover:opacity-95 text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <span>Choisir Signature</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* DIRECTION */}
              <div className="relative rounded-3xl p-8 sm:p-10 bg-[#FDFCF8] border border-[#050B18]/15 hover:border-[#C2927E] shadow-sm flex flex-col justify-between transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#050B18]/10">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#8F5542] font-bold">
                      ACCOMPAGNEMENT ANNUEL
                    </span>
                    <SayaFormLogo size={24} variant="transparent" />
                  </div>

                  <h3 className="text-2xl font-bold uppercase tracking-tight text-[#050B18]">
                    DIRECTION
                  </h3>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-bold font-mono text-[#050B18]">
                      750 €
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[#050B18]/50">
                      / an
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-[#050B18]/70 font-light leading-relaxed">
                    Tout Signature + accompagnement stratégique sur l’année.
                  </p>

                  <div className="pt-6 mt-6 border-t border-[#050B18]/10">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#8F5542] font-bold block mb-3">
                      Inclus :
                    </span>
                    <ul className="space-y-2">
                      {[
                        'Tout le pack Signature',
                        'Stratégie marketing personnalisée',
                        'Plan d’action annuel',
                        'Rendez-vous stratégique chaque mois',
                        'Analyse de performance & recommandations',
                        'Direction et suivi de l’évolution de l’image',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#050B18]/85">
                          <Check className="w-3.5 h-3.5 text-[#C2927E] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-4 text-[10px] text-[#050B18]/50 italic leading-snug">
                    * La gestion quotidienne des réseaux sociaux et les productions importantes ne sont pas incluses et font l’objet d’un devis séparé.
                  </p>
                </div>

                <div className="pt-8 mt-6">
                  <a
                    href={PAYPAL_OFFERS.direction}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-full bg-[#050B18] text-[#FDFCF8] hover:bg-[#C2927E] hover:text-[#050B18] text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <span>Choisir Direction</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 2: PÔLE ATHLÈTES & TALENTS
            ======================================================== */}
        {activeTab === 'athletes' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#8F5542] font-semibold">
                PÔLE ATHLÈTES & TALENTS
              </span>
              <p className="text-xs text-[#050B18]/70 mt-1">
                Sportifs, artistes, créateurs, personnalités et talents publics qui souhaitent professionnaliser leur image.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
              {/* IMAGE */}
              <div className="relative rounded-3xl p-8 sm:p-10 bg-[#FDFCF8] border border-[#050B18]/15 hover:border-[#C2927E] shadow-sm flex flex-col justify-between transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#050B18]/10">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#8F5542] font-bold">
                      CONSTRUCTION & PRÉSENCE
                    </span>
                    <SayaFormLogo size={24} variant="transparent" />
                  </div>

                  <h3 className="text-2xl font-bold uppercase tracking-tight text-[#050B18]">
                    IMAGE
                  </h3>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-bold font-mono text-[#050B18]">
                      450 €
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[#050B18]/50">
                      / mois
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-[#050B18]/70 font-light leading-relaxed">
                    Pour construire et professionnaliser leur présence.
                  </p>

                  <div className="pt-6 mt-6 border-t border-[#050B18]/10">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#8F5542] font-bold block mb-3">
                      Inclus :
                    </span>
                    <ul className="space-y-2.5">
                      {[
                        'Direction de l’image digitale',
                        'Cohérence du feed et des réseaux sociaux',
                        'Personal branding',
                        '4 contenus travaillés par mois',
                        'Conseils pour shootings, apparitions et communication',
                        'Rendez-vous stratégique mensuel',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#050B18]/85">
                          <Check className="w-3.5 h-3.5 text-[#C2927E] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 mt-6">
                  <button
                    onClick={() => onSelectOffer('Image', '450 € / mois', 'Pôle Athlètes & Talents')}
                    className="w-full py-4 rounded-full bg-[#050B18] text-[#FDFCF8] hover:bg-[#C2927E] hover:text-[#050B18] text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <span>Travailler mon image</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* IMAGE 360 */}
              <div className="relative rounded-3xl p-8 sm:p-10 bg-[#050B18] text-[#FDFCF8] border-2 border-[#C2927E] shadow-2xl flex flex-col justify-between transition-all duration-300">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-rosegold-gradient text-[#050B18] text-[9px] uppercase tracking-[0.25em] font-bold shadow-md">
                  Direction Complète
                </div>

                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#C2927E]/20">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#C2927E] font-bold">
                      DIRECTION D'IMAGE PERSONNELLE
                    </span>
                    <SayaFormLogo size={28} variant="original" onDark={true} />
                  </div>

                  <h3 className="text-2xl font-bold uppercase tracking-tight text-[#FDFCF8]">
                    IMAGE 360
                  </h3>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-bold font-mono text-[#C2927E]">
                      850 €
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[#FDFCF8]/60">
                      / mois
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-[#FDFCF8]/75 font-light leading-relaxed">
                    Accompagnement plus complet comme une véritable direction d’image personnelle.
                  </p>

                  <div className="pt-6 mt-6 border-t border-[#C2927E]/20">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#C2927E] font-bold block mb-3">
                      Inclus :
                    </span>
                    <ul className="space-y-2">
                      {[
                        'Stratégie globale de personal branding',
                        'Direction artistique de l’image & storytelling de carrière',
                        'Stratégie de contenus & conseil pour shootings/campagnes',
                        'Accompagnement sur les apparitions et l’image publique',
                        'Cohérence entre image digitale et image réelle',
                        'Réflexion collaborations, partenariats & suivi prioritaire',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#FDFCF8]/90">
                          <Check className="w-3.5 h-3.5 text-[#C2927E] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-4 text-[10px] text-[#FDFCF8]/50 italic leading-snug">
                    * Les shootings, déplacements, vidéastes, photographes et productions importantes sont facturés séparément.
                  </p>
                </div>

                <div className="pt-8 mt-6">
                  <button
                    onClick={() => onSelectOffer('Image 360', '850 € / mois', 'Pôle Athlètes & Talents')}
                    className="w-full py-4 rounded-full bg-rosegold-gradient text-[#050B18] hover:opacity-95 text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <span>Demander un accompagnement 360</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            PROJETS SUR MESURE (Demandé après les offres)
            ======================================================== */}
        <div className="mt-20 max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 bg-white border border-[#050B18]/15 shadow-lg text-center relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#050B18]/5 border border-[#050B18]/10 text-[10px] uppercase tracking-[0.3em] text-[#8F5542] font-semibold mb-4">
            <Sparkles className="w-3 h-3 text-[#C2927E]" />
            <span>ENVERGURE EXCLUSIVE</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#050B18]">
            Un projet plus ambitieux ?
          </h3>

          <p className="mt-4 text-sm sm:text-base text-[#050B18]/75 font-light max-w-2xl mx-auto leading-relaxed">
            Rebranding complet, lancement de marque, transformation d’un restaurant ou hôtel, campagne, site internet, production créative ou accompagnement spécifique.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToContact('Demande de devis — Projet sur-mesure')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#050B18] text-[#FDFCF8] text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 hover:bg-[#C2927E] hover:text-[#050B18] transition-all shadow-md"
            >
              <span>Demander un devis</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollToContact('Prise de contact générale')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border-2 border-[#050B18]/20 text-[#050B18] text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 hover:border-[#C2927E] hover:text-[#C2927E] transition-all"
            >
              <span>Nous contacter</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
