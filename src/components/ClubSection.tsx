import React from 'react';
import { ArrowUpRight, Check, Crown, Sparkles } from 'lucide-react';
import { SayaFormLogo } from './brand/SayaFormLogo';

interface ClubSectionProps {
  onApply: (tierName: string, tierPrice: string) => void;
}

const CLUB_TIERS = [
  {
    id: 'access',
    name: 'Access Pass',
    price: '365€',
    period: '/an',
    badge: 'MEMBRE ASSOCIÉ',
    description: 'Accès privilégié aux ressources et analyses de direction artistique de la maison.',
    features: [
      'Veille & analyses d’image exclusives',
      'Accès prioritaire aux créneaux de consultation',
      'Invitations aux sessions trimestrielles',
      'Carnet d’adresses créatif restreint',
    ],
    isFeatured: false,
    ctaText: 'Demander l’adhésion',
  },
  {
    id: 'signature',
    name: 'Signature Pass',
    price: '550€',
    period: '/an',
    badge: 'ÉDITION SIGNATURE',
    description: 'Pour les personnalités et marques exigeant un suivi régulier de leur perception.',
    features: [
      'Tous les privilèges Access Pass',
      'Audit semestriel d’image & positionnement',
      'Revue éditoriale continue de votre présence',
      'Accès direct aux événements privés Saya Form',
      'Mises en relation avec des partenaires premium',
    ],
    isFeatured: true,
    ctaText: 'Candidater',
  },
  {
    id: 'private',
    name: 'Private Black Pass',
    price: '750€',
    period: '/an',
    badge: 'CERCLE NOIR RESTREINT',
    description: 'Le plus haut niveau de discrétion et d’accompagnement réservé à une sélection fermée.',
    features: [
      'Tous les privilèges Signature Pass',
      'Ligne directe avec la direction de création',
      'Conciergerie d’image & urgences de communication',
      'Priorité absolue sur les créations & refontes',
      'Accès illimité sous secret professionnel strict',
    ],
    isFeatured: false,
    ctaText: 'Demander l’adhésion',
  },
];

export const ClubSection: React.FC<ClubSectionProps> = ({ onApply }) => {
  return (
    <section id="section-club" className="py-24 bg-[#FDFCF8] text-[#050B18] relative border-b border-[#050B18]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#050B18]/5 border border-[#050B18]/10 text-[10px] uppercase tracking-[0.35em] text-[#8F5542] font-semibold mb-3">
            <Crown className="w-3.5 h-3.5 text-[#C2927E]" />
            <span>CLUB PRIVÉ SAYA FORM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#050B18]">
            ADHÉSION & PASS MEMBRE
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#050B18]/70 font-light leading-relaxed">
            Rejoindre le cercle privé Saya Form, c’est s’assurer une direction artistique permanente, un regard critique d’expert et des privilèges réservés.
          </p>
        </div>

        {/* 3 Simple, Chic Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {CLUB_TIERS.map((tier) => {
            const isFeatured = tier.isFeatured;
            return (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-[#050B18] text-[#FDFCF8] border-2 border-[#C2927E] shadow-2xl lg:-translate-y-2'
                    : 'bg-[#FAF8F5] text-[#050B18] border border-[#050B18]/15 hover:border-[#C2927E] shadow-sm'
                }`}
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-current/10">
                    <span
                      className={`text-[9px] uppercase tracking-[0.25em] font-bold ${
                        isFeatured ? 'text-[#C2927E]' : 'text-[#8F5542]'
                      }`}
                    >
                      {tier.badge}
                    </span>
                    <SayaFormLogo
                      size={28}
                      variant={isFeatured ? 'original' : 'transparent'}
                      onDark={isFeatured}
                    />
                  </div>

                  {/* Title & Price */}
                  <h3
                    className={`text-2xl font-bold uppercase tracking-tight ${
                      isFeatured ? 'text-[#FDFCF8]' : 'text-[#050B18]'
                    }`}
                  >
                    {tier.name}
                  </h3>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span
                      className={`text-4xl sm:text-5xl font-bold font-mono ${
                        isFeatured ? 'text-[#C2927E]' : 'text-[#050B18]'
                      }`}
                    >
                      {tier.price}
                    </span>
                    <span
                      className={`text-xs uppercase tracking-widest ${
                        isFeatured ? 'text-[#FDFCF8]/60' : 'text-[#050B18]/50'
                      }`}
                    >
                      {tier.period}
                    </span>
                  </div>

                  <p
                    className={`mt-4 text-xs sm:text-sm font-light leading-relaxed ${
                      isFeatured ? 'text-[#FDFCF8]/75' : 'text-[#050B18]/70'
                    }`}
                  >
                    {tier.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="pt-6 mt-6 border-t border-current/10">
                    <span
                      className={`text-[9px] uppercase tracking-[0.25em] font-semibold block mb-3 ${
                        isFeatured ? 'text-[#C2927E]' : 'text-[#8F5542]'
                      }`}
                    >
                      Privilèges inclus :
                    </span>
                    <ul className="space-y-2.5">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs">
                          <Check
                            className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                              isFeatured ? 'text-[#C2927E]' : 'text-[#8F5542]'
                            }`}
                          />
                          <span
                            className={`font-light leading-snug ${
                              isFeatured ? 'text-[#FDFCF8]/90' : 'text-[#050B18]/80'
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-8 mt-6">
                  <button
                    onClick={() => onApply(tier.name, tier.price)}
                    className={`w-full py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 transition-all shadow-md ${
                      isFeatured
                        ? 'bg-rosegold-gradient text-[#050B18] hover:opacity-95'
                        : 'bg-[#050B18] text-[#FDFCF8] hover:bg-[#C2927E] hover:text-[#050B18]'
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
