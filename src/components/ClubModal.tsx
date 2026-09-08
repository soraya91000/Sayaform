import React, { useState } from 'react';
import { X, Check, Sparkles, ArrowUpRight } from 'lucide-react';
import { SayaFormLogo } from './brand/SayaFormLogo';

interface ClubModalProps {
  isOpen: boolean;
  onClose: () => void;
  tierName?: string;
  tierPrice?: string;
  pole?: string;
}

export const ClubModal: React.FC<ClubModalProps> = ({
  isOpen,
  onClose,
  tierName = 'Signature',
  tierPrice = '550 € / an',
  pole = 'Pôle Marques & Entreprises',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      id="offer-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="offer-modal-content"
        className="relative w-full max-w-lg rounded-3xl bg-[#050B18] text-[#FDFCF8] border border-[#C2927E]/40 p-8 sm:p-10 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-[#FDFCF8]/60 hover:text-[#C2927E] hover:bg-white/5 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#C2927E]/20 border-2 border-[#C2927E] flex items-center justify-center mx-auto text-[#C2927E]">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-tight text-[#FDFCF8]">
              Demande Validée
            </h3>
            <p className="text-sm text-[#FDFCF8]/75 font-light leading-relaxed">
              Votre sélection de la formule <span className="text-[#C2927E] font-semibold">{tierName}</span> ({tierPrice}) pour le <span className="text-[#DFC0B5]">{pole}</span> a bien été enregistrée. Nous vous contactons sous 24h pour initier votre accompagnement.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-8 py-3 rounded-full bg-rosegold-gradient text-[#050B18] text-xs uppercase tracking-widest font-bold"
              >
                Fermer
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3.5 mb-6">
              <SayaFormLogo size={36} variant="original" onDark={true} />
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C2927E] font-semibold block">
                  {pole}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#FDFCF8]">
                  Sélection • {tierName}
                </h3>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#080F20] border border-[#C2927E]/25 mb-6 flex items-center justify-between text-xs">
              <span className="text-[#FDFCF8]/70 font-light">Tarif de la formule :</span>
              <span className="font-mono font-bold text-[#C2927E] text-base">{tierPrice}</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[10px] uppercase tracking-widest text-[#FDFCF8]/70 block mb-1 font-medium">
                  Nom complet / Marque / Talent *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Votre nom ou entité"
                  className="w-full px-4 py-3 rounded-xl bg-[#080F20] border border-white/15 text-sm text-[#FDFCF8] placeholder:text-[#FDFCF8]/30 focus:border-[#C2927E] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-[#FDFCF8]/70 block mb-1 font-medium">
                  Adresse Email de contact *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nom@domaine.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#080F20] border border-white/15 text-sm text-[#FDFCF8] placeholder:text-[#FDFCF8]/30 focus:border-[#C2927E] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-[#FDFCF8]/70 block mb-1 font-medium">
                  Numéro de téléphone *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+33 6 ..."
                  className="w-full px-4 py-3 rounded-xl bg-[#080F20] border border-white/15 text-sm text-[#FDFCF8] placeholder:text-[#FDFCF8]/30 focus:border-[#C2927E] focus:outline-none"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-rosegold-gradient text-[#050B18] text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 hover:opacity-95 transition-opacity shadow-lg"
                >
                  <span>Confirmer la sélection de l'offre</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[10px] text-center text-[#FDFCF8]/40 pt-1">
                L’équipe de direction créative Saya Form revient vers vous sous 24h avec votre cadrage.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
