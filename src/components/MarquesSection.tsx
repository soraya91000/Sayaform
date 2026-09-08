import React from 'react';
import { ArrowUpRight, Palette, RefreshCw, Layout, Globe, Compass, CheckCircle2, ShoppingBag } from 'lucide-react';

interface MarquesSectionProps {
  onOpenContact: (subject?: string) => void;
}

const WHATSAPP_PHONE = '33756966397';

const getWebsiteWhatsAppUrl = (type: 'vitrine' | 'ecommerce') => {
  const isVitrine = type === 'vitrine';
  const offerName = isVitrine ? 'Site vitrine (à partir de 199 €)' : 'Site e-commerce (à partir de 300 €)';
  const details = isVitrine
    ? "Pour présenter une activité, une marque, un service ou un établissement avec une image professionnelle, claire et premium."
    : "Pour vendre des produits ou services en ligne avec une boutique claire, moderne et cohérente avec l’identité de marque.";

  const message = [
    `*DEMANDE DE DEVIS — SAYA FORM*`,
    ``,
    `• *Objet :* Demande de devis site internet`,
    `• *Pôle :* Pôle marques & entreprises`,
    `• *Offre choisie :* ${offerName}`,
    ``,
    `Bonjour, je souhaite obtenir un devis pour mon projet : ${details}`,
  ].join('\n');

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
};

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

        {/* Dedicated Web Section: Sites Internet */}
        <div className="mt-20 pt-16 border-t border-[#050B18]/15">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#8F5542] font-bold block mb-3">
                CRÉATION & DÉVELOPPEMENT WEB
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#050B18]">
                SITES INTERNET &{' '}
                <span className="text-[#C2927E]">FLAGSHIPS DIGITAUX</span>
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#050B18]/70 font-light leading-relaxed">
                Des vitrines et boutiques en ligne façonnées sur-mesure pour sublimer votre univers de marque et convertir avec élégance.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1: Site vitrine */}
            <div className="group rounded-3xl p-8 sm:p-10 bg-[#FAF8F5] border border-[#050B18]/10 hover:border-[#C2927E] transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#050B18]/10 flex items-center justify-center text-[#050B18] group-hover:bg-[#050B18] group-hover:text-[#FDFCF8] transition-colors">
                    <Globe className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#8F5542] font-bold px-3 py-1 rounded-full bg-white border border-[#050B18]/10">
                    Présentation & Image
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <h4 className="text-2xl font-bold uppercase tracking-tight text-[#050B18]">
                    Site vitrine
                  </h4>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs uppercase tracking-wider text-[#050B18]/60 font-medium">à partir de</span>
                    <span className="text-3xl sm:text-4xl font-bold font-mono text-[#C2927E]">199 €</span>
                  </div>
                </div>

                <p className="text-sm text-[#050B18]/80 font-light leading-relaxed mb-6">
                  Pour présenter une activité, une marque, un service ou un établissement avec une image professionnelle, claire et premium.
                </p>

                <div className="pt-4 border-t border-[#050B18]/10 space-y-2 mb-8">
                  <div className="flex items-center gap-2.5 text-xs text-[#050B18]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#C2927E] shrink-0" />
                    <span>Design sur-mesure & responsive mobile absolu</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#050B18]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#C2927E] shrink-0" />
                    <span>Présentation claire de vos services & identité</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#050B18]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#C2927E] shrink-0" />
                    <span>Formulaire de contact & intégration WhatsApp directe</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#050B18]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#C2927E] shrink-0" />
                    <span>Optimisation technique, rapidité & référencement SEO</span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href={getWebsiteWhatsAppUrl('vitrine')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-full bg-[#050B18] text-[#FDFCF8] hover:bg-[#C2927E] hover:text-[#050B18] text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <span>Demander un devis</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Card 2: Site e-commerce */}
            <div className="group rounded-3xl p-8 sm:p-10 bg-[#050B18] text-[#FDFCF8] border border-[#C2927E]/40 hover:border-[#C2927E] transition-all duration-300 hover:shadow-2xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C2927E]/10 blur-[60px] rounded-full pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#080F20] border border-[#C2927E]/40 flex items-center justify-center text-[#C2927E]">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C2927E] font-bold px-3 py-1 rounded-full bg-[#080F20] border border-[#C2927E]/30">
                    Boutique en ligne
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <h4 className="text-2xl font-bold uppercase tracking-tight text-[#FDFCF8]">
                    Site e-commerce
                  </h4>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs uppercase tracking-wider text-[#FDFCF8]/60 font-medium">à partir de</span>
                    <span className="text-3xl sm:text-4xl font-bold font-mono text-[#C2927E]">300 €</span>
                  </div>
                </div>

                <p className="text-sm text-[#FDFCF8]/80 font-light leading-relaxed mb-6">
                  Pour vendre des produits ou services en ligne avec une boutique claire, moderne et cohérente avec l’identité de marque.
                </p>

                <div className="pt-4 border-t border-white/10 space-y-2 mb-8">
                  <div className="flex items-center gap-2.5 text-xs text-[#FDFCF8]/85">
                    <CheckCircle2 className="w-4 h-4 text-[#C2927E] shrink-0" />
                    <span>Catalogue produits immersif & navigation fluide</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#FDFCF8]/85">
                    <CheckCircle2 className="w-4 h-4 text-[#C2927E] shrink-0" />
                    <span>Paiements sécurisés (CB, Apple Pay, Stripe / PayPal)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#FDFCF8]/85">
                    <CheckCircle2 className="w-4 h-4 text-[#C2927E] shrink-0" />
                    <span>Tunnel d'achat optimisé pour la conversion</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#FDFCF8]/85">
                    <CheckCircle2 className="w-4 h-4 text-[#C2927E] shrink-0" />
                    <span>Cohérence visuelle totale avec l’identité de marque</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <a
                  href={getWebsiteWhatsAppUrl('ecommerce')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-full bg-rosegold-gradient text-[#050B18] hover:opacity-95 text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 transition-all shadow-lg"
                >
                  <span>Demander un devis</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
