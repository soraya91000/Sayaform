import React, { useState } from 'react';
import { MEMBERSHIP_TIERS } from '../data/sayaFormData';
import { MembershipTier } from '../types';
import { SayaFormSymbol } from './brand/SayaFormSymbol';
import { SayaFormLogo } from './brand/SayaFormLogo';
import { Check, Shield, Sparkles, ArrowUpRight, Lock, Award } from 'lucide-react';

interface MembershipSectionProps {
  onOpenMembershipModal: (tierId?: string) => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({
  onOpenMembershipModal,
}) => {
  const [activeTierId, setActiveTierId] = useState<string>('signature');

  return (
    <section
      id="section-membership"
      className="py-32 bg-[#FDFCF8] text-[#050B18] relative overflow-hidden select-none border-t border-b border-[#C2927E]/20"
    >
      {/* Background Ambience: Subtle Watermark */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-20 -left-20 opacity-5">
          <SayaFormLogo size={600} monogramOnly={true} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#C2927E]/40 text-[10px] uppercase tracking-[0.35em] text-[#8F5542] shadow-sm font-semibold">
            <SayaFormSymbol size={18} showRing={false} />
            <span>LE CLUB PRIVÉ SAYA FORM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase text-[#050B18] tracking-tight">
            PASS DE MEMBRE &{' '}
            <span className="text-[#C2927E]">
              INVITATIONS EXCLUSIVES
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#050B18]/70 font-light leading-relaxed">
            Rejoindre le cercle privé SAYA FORM, c'est s'assurer une direction artistique permanente, un accès direct aux talents de la maison et une identité sculptée pour dominer la perception.
          </p>
        </div>

        {/* 3 Private Pass Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_TIERS.map((tier) => {
            const isFeatured = tier.id === 'signature';
            const isPrivate = tier.id === 'private';

            return (
              <div
                key={tier.id}
                onClick={() => setActiveTierId(tier.id)}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 cursor-pointer group ${
                  isFeatured
                    ? 'bg-[#050B18] text-[#FDFCF8] border-2 border-[#C2927E] shadow-[0_20px_50px_rgba(194,146,126,0.25)] scale-[1.02]'
                    : isPrivate
                    ? 'bg-white border border-[#050B18]/15 hover:border-[#C2927E] shadow-sm'
                    : 'bg-white border border-[#050B18]/10 hover:border-[#C2927E]/60 shadow-sm'
                }`}
              >
                {/* Top Badge */}
                <div className={`flex items-center justify-between pb-6 border-b ${
                  isFeatured ? 'border-[#C2927E]/30' : 'border-[#050B18]/10'
                }`}>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#C2927E] font-semibold">
                      {tier.badge}
                    </span>
                    <span className={`text-[11px] tracking-widest font-mono mt-0.5 ${
                      isFeatured ? 'text-[#FDFCF8]/60' : 'text-[#050B18]/50'
                    }`}>
                      {tier.memberIdPrefix} • EDITION
                    </span>
                  </div>

                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center ${
                    isFeatured
                      ? 'bg-[#080F1F] border-[#C2927E]/40 text-[#FDFCF8]'
                      : 'bg-[#FDFCF8] border-[#050B18]/15 text-[#050B18]'
                  }`}>
                    {isPrivate ? (
                      <Lock className="w-4 h-4 text-[#C2927E]" />
                    ) : (
                      <SayaFormSymbol size={20} showRing={false} variant={isFeatured ? 'gold' : 'dark'} />
                    )}
                  </div>
                </div>

                {/* PHYSICAL LUXURY CARD PREVIEW */}
                <div className="my-8 relative rounded-2xl p-6 overflow-hidden border border-[#C2927E]/40 bg-gradient-to-br from-[#0B1426] via-[#050B18] to-[#040813] shadow-xl group-hover:shadow-[0_10px_35px_rgba(194,146,126,0.3)] transition-shadow">
                  {/* Subtle card sheen */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#C2927E]/10 to-transparent opacity-60" />

                  {/* Card Header */}
                  <div className="flex items-center justify-between relative z-10 mb-8">
                    <SayaFormLogo size={36} showWordmark={true} id={`card-logo-${tier.id}`} />
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#C2927E] border border-[#C2927E]/30 px-2 py-0.5 rounded font-mono">
                      PASS
                    </span>
                  </div>

                  {/* Card Center: Two Feathers Signature Emblem Embossed */}
                  <div className="flex items-center justify-center my-2 relative z-10">
                    <div className="p-3 rounded-full bg-[#050B18]/70 border border-[#C2927E]/40 shadow-inner">
                      <SayaFormSymbol size={44} showRing={true} />
                    </div>
                  </div>

                  {/* Card Footer: Embossed Member ID & Expiry */}
                  <div className="flex items-end justify-between relative z-10 mt-6 pt-4 border-t border-[#C2927E]/20 text-[10px]">
                    <div className="font-mono tracking-[0.2em] text-[#DFC0B5]">
                      {tier.memberIdPrefix}-8894
                    </div>
                    <div className="text-right text-[#FDFCF8]/60 uppercase tracking-widest text-[9px]">
                      VALIDE 2026/27
                    </div>
                  </div>
                </div>

                {/* Pricing & Description */}
                <div className="space-y-4 mb-8">
                  <div>
                    <h3 className={`editorial-font text-2xl sm:text-3xl font-light italic tracking-wide ${
                      isFeatured ? 'text-[#FDFCF8]' : 'text-[#050B18]'
                    }`}>
                      {tier.name}
                    </h3>
                    <p className={`mt-2 text-xs font-light leading-relaxed ${
                      isFeatured ? 'text-[#FDFCF8]/70' : 'text-[#050B18]/70'
                    }`}>
                      {tier.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-baseline gap-2">
                    <span className={`editorial-font text-4xl sm:text-5xl font-light italic ${
                      isFeatured ? 'text-[#FDFCF8]' : 'text-[#050B18]'
                    }`}>
                      {tier.price} €
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#C2927E] font-medium">
                      / an
                    </span>
                  </div>

                  {tier.limitedSpots && (
                    <div className={`text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-md border inline-block ${
                      isFeatured
                        ? 'text-[#DFC0B5] bg-[#C2927E]/10 border-[#C2927E]/20'
                        : 'text-[#8F5542] bg-[#C2927E]/10 border-[#C2927E]/30'
                    }`}>
                      {tier.limitedSpots}
                    </div>
                  )}
                </div>

                {/* Privileges Feature List */}
                <div className={`space-y-3 pt-6 border-t mb-8 ${
                  isFeatured ? 'border-[#C2927E]/20' : 'border-[#050B18]/10'
                }`}>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C2927E] block mb-2 font-semibold">
                    Privilèges du Pass :
                  </span>
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className={`flex items-start gap-2.5 text-xs ${
                      isFeatured ? 'text-[#FDFCF8]/80' : 'text-[#050B18]/80'
                    }`}>
                      <Check className="w-3.5 h-3.5 text-[#C2927E] shrink-0 mt-0.5" />
                      <span className="font-light leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA */}
                <button
                  id={`btn-join-${tier.id}`}
                  onClick={() => onOpenMembershipModal(tier.id)}
                  className={`w-full py-4 rounded-full text-[10px] uppercase tracking-[0.25em] font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                    isFeatured
                      ? 'bg-rosegold-gradient text-[#050B18] shadow-[0_10px_25px_rgba(194,146,126,0.3)] hover:shadow-[0_15px_30px_rgba(194,146,126,0.45)]'
                      : 'bg-[#050B18] text-[#FDFCF8] hover:bg-[#C2927E] hover:text-[#050B18]'
                  }`}
                >
                  <SayaFormSymbol size={16} showRing={false} variant={isFeatured ? 'dark' : 'gold'} />
                  <span>Demander le Pass {tier.code}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Private Club Guarantee Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-white border border-[#050B18]/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#050B18] border border-[#C2927E] flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-[#C2927E]" />
            </div>
            <div>
              <h4 className="editorial-font text-xl text-[#050B18] tracking-wide font-normal italic">
                Garantie de Confidentialité & Sélection
              </h4>
              <p className="text-xs text-[#050B18]/70 font-light mt-0.5">
                Chaque candidature est examinée individuellement par la direction de SAYA FORM afin de préserver l'exclusivité du réseau.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenMembershipModal('private')}
            className="px-6 py-3 rounded-full border border-[#050B18]/30 text-[10px] uppercase tracking-[0.25em] text-[#050B18] hover:bg-[#050B18] hover:text-[#FDFCF8] transition-colors shrink-0 font-medium"
          >
            Postuler au Cercle Private
          </button>
        </div>
      </div>
    </section>
  );
};
