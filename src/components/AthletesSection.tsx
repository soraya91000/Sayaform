import React from 'react';
import { ArrowUpRight, Shield, Sparkles, Target, Share2, Megaphone, CheckCircle2 } from 'lucide-react';

interface AthletesSectionProps {
  onOpenContact: (subject?: string) => void;
}

const SERVICES_ATHLETES = [
  {
    number: '01',
    title: 'Image management',
    subtitle: 'Protection & valorisation de réputation',
    description:
      'Supervision intégrale de la réputation de l’athlète. Cadrage des apparitions publiques, gestion des prises de vue et sauvegarde de la valeur marchande de son image.',
    icon: Shield,
    highlights: ['Protection de la réputation', 'Cadrage des sorties publiques', 'Gestion de l’exposition médiatique'],
  },
  {
    number: '02',
    title: 'Personal branding',
    subtitle: 'Signature de style & univers personnel',
    description:
      'Construction d’une identité singulière qui dépasse le simple cadre sportif : stylisme vestiaire, monogramme personnel, et ancrage dans l’écosystème du luxe et de la mode.',
    icon: Sparkles,
    highlights: ['Stylisme d’avant-match / tunnel', 'Monogramme & identité propre', 'Signature visuelle iconique'],
  },
  {
    number: '03',
    title: 'Positionnement',
    subtitle: 'Alignement marques de prestige',
    description:
      'Établissement d’un profil attractif pour les marques de premier rang. Structuration de votre storytelling pour signer des partenariats commerciaux à haute valeur.',
    icon: Target,
    highlights: ['Dossier sponsoring & partenariats', 'Ciblage des maisons de luxe', 'Négociation d’image de marque'],
  },
  {
    number: '04',
    title: 'Gestion d’image digitale',
    subtitle: 'Curation de présence en ligne',
    description:
      'Direction artistique de vos plateformes sociales : feed Instagram éditorial, shootings 35mm exclusifs, stories soignées et harmonisation visuelle continue.',
    icon: Share2,
    highlights: ['Curation Instagram premium', 'Direction photo éditoriale', 'Cohérence esthétique permanente'],
  },
  {
    number: '05',
    title: 'Stratégie de communication',
    subtitle: 'Maîtrise des prises de parole',
    description:
      'Planification millimétrée des annonces clés : transferts, prolongations, moments forts de compétition et déclarations publiques avec un impact maximal.',
    icon: Megaphone,
    highlights: ['Campagnes d’annonces majeures', 'Communication de crise & calme', 'Relations médias spécialisés'],
  },
];

export const AthletesSection: React.FC<AthletesSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="section-athletes" className="py-24 bg-[#FAF8F5] text-[#050B18] relative border-b border-[#050B18]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#050B18]/15">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#8F5542] font-bold block mb-3">
              SPORTIFS, ARTISTES, CRÉATEURS & TALENTS PUBLICS
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#050B18]">
              PÔLE ATHLÈTES &{' '}
              <span className="text-[#C2927E]">TALENTS</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#050B18]/70 font-light leading-relaxed">
              Professionnaliser votre présence, bâtir une stature publique désirable et transformer votre notoriété en opportunités durables.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <button
              onClick={() => onOpenContact('Pôle Athlètes & Talents')}
              className="px-7 py-3.5 rounded-full bg-[#050B18] text-[#FDFCF8] text-xs uppercase tracking-[0.2em] font-bold flex items-center gap-2 hover:bg-[#C2927E] hover:text-[#050B18] transition-all shadow-md"
            >
              <span>Consulter pour un talent</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 5 Athlètes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_ATHLETES.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.number}
                className="group relative rounded-2xl p-8 bg-white border border-[#050B18]/10 hover:border-[#C2927E] transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold font-mono text-[#C2927E]">
                      {svc.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#050B18]/10 flex items-center justify-center text-[#050B18] group-hover:bg-[#050B18] group-hover:text-[#FDFCF8] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold uppercase text-[#050B18] tracking-tight mb-1">
                    {svc.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#8F5542] font-semibold mb-4">
                    {svc.subtitle}
                  </p>
                  <p className="text-sm text-[#050B18]/75 font-light leading-relaxed mb-6">
                    {svc.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#050B18]/10">
                  <ul className="space-y-1.5">
                    {svc.highlights.map((hl, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-[#050B18]/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C2927E] shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}

          {/* 6th Callout Card for Athletes */}
          <div className="rounded-2xl p-8 bg-[#050B18] text-[#FDFCF8] border border-[#C2927E]/40 flex flex-col justify-between shadow-lg">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C2927E] font-bold block">
                DISCRÉTION ABSOLUE
              </span>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-[#FDFCF8]">
                Management d'Image Confidentiel
              </h3>
              <p className="text-sm text-[#FDFCF8]/75 font-light leading-relaxed">
                Intervention en étroite liaison avec l’athlète, son entourage et ses agents, sous clause de confidentialité stricte.
              </p>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onOpenContact('Entretien Privé Athlète')}
                className="w-full py-3.5 rounded-full bg-white text-[#050B18] text-xs uppercase tracking-[0.2em] font-bold text-center hover:bg-[#C2927E] hover:text-[#050B18] transition-colors"
              >
                Planifier un entretien privé
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
