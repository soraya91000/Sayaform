import React from 'react';
import { ArrowUpRight, Palette, RefreshCw, Layout, Globe, Compass, CheckCircle2 } from 'lucide-react';

interface MarquesSectionProps {
  onOpenContact: (subject?: string) => void;
}

const SERVICES_MARQUES = [
  {
    number: '01',
    title: 'Branding',
    subtitle: 'Création de marque & signature',
    description:
      'Genèse de marque complète : plateforme stratégique, nommage, univers narratif, monogramme exclusif et positionnement concurrentiel pour s’imposer avec évidence.',
    icon: Compass,
    highlights: ['Plateforme de marque', 'Monogramme & logotype', 'Récit de marque & ton'],
  },
  {
    number: '02',
    title: 'Re-branding',
    subtitle: 'Repositionnement & élévation',
    description:
      'Transformation esthétique et stratégique d’entreprises existantes pour monter en gamme, renouveler leur désirabilité et séduire une clientèle plus exigeante.',
    icon: RefreshCw,
    highlights: ['Audit d’image existante', 'Élévation de perception', 'Plan de transition 360°'],
  },
  {
    number: '03',
    title: 'Identité visuelle',
    subtitle: 'Charte graphique & univers sensoriel',
    description:
      'Conception minutieuse de votre grammaire visuelle : typographies signature, palettes de couleurs raffinées, déclinaisons packaging, papeterie et supports d’exception.',
    icon: Palette,
    highlights: ['Charte graphique complète', 'Packaging & print de luxe', 'Design de supports physiques'],
  },
  {
    number: '04',
    title: 'Site internet',
    subtitle: 'Digital flagship sur-mesure',
    description:
      'Création de sites internet haut de gamme alliant fluidité technologique, expérience sensorielle, responsive design absolu et orientation conversion.',
    icon: Globe,
    highlights: ['Direction UI/UX sur-mesure', 'Sites vitrines & e-commerce', 'Animations fluides & SEO'],
  },
  {
    number: '05',
    title: 'Direction artistique',
    subtitle: 'Supervision créative globale',
    description:
      'Orchestration globale de l’univers de votre marque : direction de shootings photo, production de films de campagne, stylisme et cohérence éditoriale continue.',
    icon: Layout,
    highlights: ['Direction de shooting photo/vidéo', 'Scénographie de campagne', 'Contrôle qualité esthétique'],
  },
];

export const MarquesSection: React.FC<MarquesSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="section-marques" className="py-24 bg-[#FDFCF8] text-[#050B18] relative border-b border-[#050B18]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#050B18]/15">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#8F5542] font-bold block mb-3">
              OFFRE ENTREPRISES & MAISONS
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#050B18]">
              PÔLE MARQUES &{' '}
              <span className="text-[#C2927E]">ENTREPRISES</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#050B18]/70 font-light leading-relaxed">
              Une approche minimaliste et radicale pour transformer votre entreprise en marque iconique, désirable et pérenne.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <button
              onClick={() => onOpenContact('Pôle Marques & Entreprises')}
              className="px-7 py-3.5 rounded-full bg-[#050B18] text-[#FDFCF8] text-xs uppercase tracking-[0.2em] font-bold flex items-center gap-2 hover:bg-[#C2927E] hover:text-[#050B18] transition-all shadow-md"
            >
              <span>Demander un devis marque</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 5 Expertises Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_MARQUES.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.number}
                className="group relative rounded-2xl p-8 bg-[#FAF8F5] border border-[#050B18]/10 hover:border-[#C2927E] transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold font-mono text-[#C2927E]">
                      {svc.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#050B18]/10 flex items-center justify-center text-[#050B18] group-hover:bg-[#050B18] group-hover:text-[#FDFCF8] transition-colors">
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

          {/* 6th Callout Card to Balance Grid */}
          <div className="rounded-2xl p-8 bg-[#050B18] text-[#FDFCF8] border border-[#C2927E]/40 flex flex-col justify-between shadow-lg">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C2927E] font-bold block">
                ACCOMPAGNEMENT SUR-MESURE
              </span>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-[#FDFCF8]">
                Votre Projet Mérite Une Direction Exclusive
              </h3>
              <p className="text-sm text-[#FDFCF8]/75 font-light leading-relaxed">
                Chaque création ou refonte fait l’objet d’un diagnostic précis et d’un calendrier sur-mesure validé ensemble.
              </p>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onOpenContact('Accompagnement Marque Global')}
                className="w-full py-3.5 rounded-full bg-rosegold-gradient text-[#050B18] text-xs uppercase tracking-[0.2em] font-bold text-center hover:opacity-90 transition-opacity"
              >
                Initier un échange confidentiel
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
