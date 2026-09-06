import React, { useState } from 'react';
import { SayaFormSymbol } from './brand/SayaFormSymbol';
import { SayaFormLogo } from './brand/SayaFormLogo';
import {
  Monitor,
  PenTool,
  RefreshCw,
  Palette,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Layout,
  Eye,
  ShieldCheck,
} from 'lucide-react';

interface BrandIdentitySectionProps {
  onOpenContact: () => void;
  onViewProject: (projectId: string) => void;
}

export const BrandIdentitySection: React.FC<BrandIdentitySectionProps> = ({
  onOpenContact,
  onViewProject,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'branding' | 'web' | 'rebranding' | 'artdirection'>('branding');

  const services = [
    {
      id: 'branding',
      icon: PenTool,
      category: 'IDENTITÉ DE MARQUE',
      title: 'Branding & Identité Visuelle Complète',
      tagline: 'Façonner des symboles qui s’impriment dans l’imaginaire collectif',
      description:
        'Création intégrale de votre grammaire de marque : monogramme sur-mesure, typographies propriétaires, nuancier chromatique noble, éléments graphiques distinctifs et déclinaisons packaging.',
      deliverables: [
        'Monogramme & Logotype gravé vectoriel',
        'Livre de marque & charte éditoriale complète',
        'Packaging tactile, gaufrage & dorure à chaud',
        'Papeterie d’art & supports d’accueil physique',
      ],
      previewImg: '/src/assets/images/sf_brands_hospitality_1788627098408.jpg',
      badge: 'FONDATION DE MARQUE',
      projectId: 'maison-kallos',
    },
    {
      id: 'web',
      icon: Monitor,
      category: 'FLAGSHIP DIGITAL',
      title: 'Création de Sites Internet d’Exception',
      tagline: 'L’élégance de la haute couture transposée dans l’espace digital',
      description:
        'Conception de sites internet sur-mesure pour marques de luxe, hospitality, gastronomie et entreprises exigeantes. Ergonomie fluide, micro-interactions soignées, typographies précises et performance sans compromis.',
      deliverables: [
        'Architecture d’information & UX haute fidélité',
        'Design d’interface sur-mesure (Desktop & Mobile)',
        'Expérience immersive, micro-animations réactives',
        'Optimisation SEO de prestige & vitesse d’affichage',
      ],
      previewImg: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
      badge: 'EXPÉRIENCE DIGITALE',
      projectId: 'le-grand-pavillon',
    },
    {
      id: 'rebranding',
      icon: RefreshCw,
      category: 'REPOSITIONNEMENT',
      title: 'Re-branding & Repositionnement Stratégique',
      tagline: 'Élever votre perception pour conquérir une clientèle d’élite',
      description:
        'Audit impitoyable de votre perception actuelle, épuration des codes graphiques vieillissants et repositionnement radical pour hisser votre marque au sommet de son marché.',
      deliverables: [
        'Audit de perception & benchmarking concurrentiel de luxe',
        'Modernisation du monogramme & réalignement visuel',
        'Stratégie de transition d’image sans rupture d’audience',
        'Accompagnement au déploiement omnicanal',
      ],
      previewImg: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop',
      badge: 'MONTÉE EN GAMME',
      projectId: 'le-grand-pavillon',
    },
    {
      id: 'artdirection',
      icon: Palette,
      category: 'IMAGE & CAMPAGNES',
      title: 'Direction Artistique & Gestion d’Image',
      tagline: 'Sublimer chaque point de contact visuel avec vos clients',
      description:
        'Prise en charge de vos campagnes publicitaires, direction de shootings photo argentiques et numériques, scénographie de lancements et curation de vos canaux de diffusion.',
      deliverables: [
        'Scénarisation & moodboards de campagnes',
        'Direction photo, stylisme & casting sur plateau',
        'Curation éditoriale Instagram & rythme visuel',
        'Films de marque cinématographiques',
      ],
      previewImg: '/src/assets/images/sf_hero_campaign_1788627055331.jpg',
      badge: 'ÉDITORIAL & FILM',
      projectId: 'olympia-nocturne',
    },
  ];

  const currentService = services.find((s) => s.id === activeTab) || services[0];

  return (
    <section
      id="section-brand-identity"
      className="py-24 bg-[#FDFCF8] text-[#050B18] relative overflow-hidden border-b border-[#050B18]/10"
    >
      {/* Background Decorative Graphic */}
      <div className="absolute -top-24 -right-24 opacity-5 pointer-events-none">
        <SayaFormSymbol size={480} showRing={true} variant="stroke" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Eyebrow */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-14 border-b border-[#050B18]/15">
          <div>
            <div className="flex items-center gap-2.5 text-[10px] uppercase tracking-[0.35em] text-[#C2927E] font-bold mb-3">
              <SayaFormSymbol size={18} showRing={false} />
              <span>PÔLE MARQUES & ENTREPRISES • GESTION D’IMAGE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#050B18] uppercase">
              IDENTITÉ VISUELLE.{' '}
              <span className="text-[#C2927E]">POUR LES MARQUES.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#050B18]/70 max-w-md font-light leading-relaxed">
            Nous transformons des entreprises en marques de désir. De la création de votre identité visuelle à votre site internet de prestige et vos campagnes éditoriales.
          </p>
        </div>

        {/* 4 Interactive Pillars Switcher */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {services.map((srv) => {
            const Icon = srv.icon;
            const isSelected = activeTab === srv.id;
            return (
              <button
                key={srv.id}
                onClick={() => setActiveTab(srv.id as any)}
                className={`p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#050B18] text-[#FDFCF8] border-[#050B18] shadow-xl scale-[1.02]'
                    : 'bg-white text-[#050B18] border-[#050B18]/15 hover:border-[#C2927E] hover:bg-[#FAF9F5]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-[#C2927E] text-[#050B18]' : 'bg-[#050B18]/5 text-[#050B18]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[9px] uppercase tracking-[0.25em] font-semibold ${
                      isSelected ? 'text-[#C2927E]' : 'text-[#8F5542]'
                    }`}
                  >
                    {srv.badge}
                  </span>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight mb-1 leading-snug">
                    {srv.id === 'branding' && 'Branding'}
                    {srv.id === 'web' && 'Site Internet'}
                    {srv.id === 'rebranding' && 'Re-Branding'}
                    {srv.id === 'artdirection' && 'Direction Artistique'}
                  </h3>
                  <p
                    className={`text-xs font-light line-clamp-2 ${
                      isSelected ? 'text-[#FDFCF8]/70' : 'text-[#050B18]/60'
                    }`}
                  >
                    {srv.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Highlighted Service Details Card (Crisp Light & High Contrast) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#050B18]/15 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Description & Deliverables */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.3em] font-bold bg-[#C2927E]/15 text-[#8F5542] border border-[#C2927E]/30">
                {currentService.category}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-[#050B18]/40 font-mono">
                SAYA FORM STUDIO
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#050B18] uppercase">
              {currentService.title}
            </h3>

            <p className="text-base text-[#050B18]/80 font-light leading-relaxed">
              {currentService.description}
            </p>

            {/* Deliverables Checklist */}
            <div className="pt-2 border-t border-[#050B18]/10 space-y-3">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#8F5542] block">
                Livrables & Expertises Incluses :
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentService.deliverables.map((d, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#050B18]/80 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C2927E] shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-7 py-3.5 rounded-full bg-[#050B18] text-[#FDFCF8] font-bold text-xs uppercase tracking-[0.25em] hover:bg-[#C2927E] hover:text-[#050B18] transition-all flex items-center gap-2 shadow-lg"
              >
                <span>Démarrer ce Projet de Marque</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onViewProject(currentService.projectId)}
                className="px-5 py-3.5 rounded-full border border-[#050B18]/20 text-[#050B18] font-semibold text-xs uppercase tracking-[0.25em] hover:border-[#C2927E] hover:text-[#C2927E] transition-all flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                <span>Voir Étude de Cas</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Preview with Texture */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#050B18]/10 group">
              <img
                src={currentService.previewImg}
                alt={currentService.title}
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B18] via-[#050B18]/30 to-transparent" />

              {/* Watermark Logo Overlay */}
              <div className="absolute top-4 right-4">
                <SayaFormLogo size={36} monogramOnly={true} />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-5 left-5 right-5 text-[#FDFCF8]">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#DFC0B5] font-semibold block mb-1">
                  DIRECTION SAYA FORM
                </span>
                <p className="text-sm font-semibold tracking-wide">
                  {currentService.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sectors of Intervention for Brands */}
        <div className="mt-16 pt-10 border-t border-[#050B18]/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#8F5542]">
              Secteurs d’Intervention Marques & Entreprises
            </span>
            <span className="text-xs text-[#050B18]/60 font-light">
              Accompagnement confidentiel et sur-mesure
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              'Hospitality & Hôtels',
              'Haute Maroquinerie',
              'Gastronomie Étoilée',
              'Mode & Prêt-à-Porter',
              'Architecture & Design',
              'Startups & Élite Tech',
            ].map((sector, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-white border border-[#050B18]/10 text-center text-xs font-semibold uppercase tracking-wider text-[#050B18] hover:border-[#C2927E] hover:text-[#C2927E] transition-colors"
              >
                {sector}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
