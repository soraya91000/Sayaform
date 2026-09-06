import React, { useState } from 'react';
import { MEMBERSHIP_TIERS } from '../data/sayaFormData';
import { MembershipTier } from '../types';
import { SayaFormSymbol } from './brand/SayaFormSymbol';
import { SayaFormLogo } from './brand/SayaFormLogo';
import { X, Check, ArrowRight, ShieldCheck, Lock, Sparkles } from 'lucide-react';

interface MembershipModalProps {
  initialTierId?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const MembershipModal: React.FC<MembershipModalProps> = ({
  initialTierId = 'signature',
  isOpen,
  onClose,
}) => {
  const [selectedTierId, setSelectedTierId] = useState<string>(initialTierId);
  const [applicantName, setApplicantName] = useState('');
  const [email, setEmail] = useState('');
  const [profession, setProfession] = useState('athlete');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const currentTier =
    MEMBERSHIP_TIERS.find((t) => t.id === selectedTierId) || MEMBERSHIP_TIERS[1];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#050B18]/92 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#080F1F] border border-[#C2927E]/30 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-[#050B18] border border-[#C2927E]/30 text-[#FDFCF8] hover:text-[#C2927E] hover:border-[#C2927E] transition-colors z-20"
          aria-label="Fermer la modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="border-b border-[#C2927E]/20 pb-6 pr-12">
          <div className="flex items-center gap-2.5 text-[10px] uppercase tracking-[0.4em] text-[#C2927E] mb-2 font-semibold">
            <SayaFormSymbol size={18} showRing={false} />
            <span>CANDIDATURE PRIVÉE • CLUB SAYA FORM</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#FDFCF8]">
            Demande d'Adhésion Membre
          </h3>
          <p className="text-xs text-[#FDFCF8]/70 font-light mt-1">
            Sélectionnez votre formule et complétez votre fiche de membre officielle.
          </p>
        </div>

        {/* Tier Selector Tabs */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 p-1.5 rounded-2xl bg-[#050B18] border border-[#C2927E]/25">
          {MEMBERSHIP_TIERS.map((tier) => (
            <button
              key={tier.id}
              onClick={() => {
                setSelectedTierId(tier.id);
                setIsSuccess(false);
              }}
              className={`py-3 px-2 rounded-xl text-center transition-all ${
                selectedTierId === tier.id
                  ? 'bg-rosegold-gradient text-[#050B18] font-medium shadow-md'
                  : 'text-[#FDFCF8]/70 hover:text-[#FDFCF8]'
              }`}
            >
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] truncate font-semibold">
                {tier.code}
              </div>
              <div className="text-sm sm:text-base font-bold text-[#FDFCF8]">
                {tier.price} €/an
              </div>
            </button>
          ))}
        </div>

        {isSuccess ? (
          <div className="py-12 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-[#C2927E]/10 border-2 border-[#C2927E] flex items-center justify-center mx-auto text-[#C2927E]">
              <SayaFormSymbol size={44} showRing={false} />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C2927E] font-semibold">
                Candidature Transmise
              </span>
              <h4 className="editorial-font text-3xl sm:text-4xl text-[#FDFCF8] italic">
                Bienvenue dans l'Attente du Comité
              </h4>
              <p className="text-sm text-[#FDFCF8]/75 font-light max-w-lg mx-auto">
                Votre demande d'adhésion pour le pass{' '}
                <strong className="text-[#C2927E]">{currentTier.name}</strong> au nom de{' '}
                <strong className="text-[#FDFCF8]">{applicantName || 'Membre Invité'}</strong> a été
                enregistrée. Le secrétariat particulier de SAYA FORM vous adressera votre kit
                d'accueil et les modalités sous 24h.
              </p>
            </div>
            <button
              onClick={onClose}
              className="px-8 py-3.5 rounded-full bg-rosegold-gradient text-[#050B18] font-medium text-[10px] uppercase tracking-[0.25em]"
            >
              Fermer et Retourner au Site
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Live Interactive Pass Card Preview */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-sm rounded-2xl p-6 bg-gradient-to-br from-[#0B1426] via-[#050B18] to-[#040813] border-2 border-[#C2927E] shadow-[0_20px_45px_rgba(194,146,126,0.3)] relative overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                  <SayaFormLogo size={32} showWordmark={true} id="modal-card-logo" />
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#C2927E] px-2 py-0.5 rounded border border-[#C2927E]/40 font-mono">
                    {currentTier.code}
                  </span>
                </div>

                <div className="flex justify-center my-4">
                  <div className="p-3 rounded-full bg-[#050B18]/80 border border-[#C2927E]/50">
                    <SayaFormSymbol size={44} showRing={true} />
                  </div>
                </div>

                <div className="pt-6 border-t border-[#C2927E]/20 space-y-2">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-[#C2927E] uppercase tracking-widest">Titulaire</span>
                    <span className="font-mono text-[#FDFCF8] font-medium uppercase tracking-wider">
                      {applicantName || 'VOTRE NOM'}
                    </span>
                  </div>
                  <div className="flex justify-between text-[10px]">
                    <span className="text-[#C2927E] uppercase tracking-widest">Pass ID</span>
                    <span className="font-mono text-[#DFC0B5]">
                      {currentTier.memberIdPrefix}-0421
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center text-xs text-[#FDFCF8]/60 font-light flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#C2927E]" />
                <span>Carte physique gravée remise lors de l'admission</span>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-[#C2927E] font-semibold">
                    Nom & Prénom du Membre *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="Ex: Marcus V."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050B18] border border-[#C2927E]/30 text-sm text-[#FDFCF8] focus:outline-none focus:border-[#C2927E]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-[#C2927E] font-semibold">
                    Email Personnel Confidentiel *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contact@athlete-ou-marque.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050B18] border border-[#C2927E]/30 text-sm text-[#FDFCF8] focus:outline-none focus:border-[#C2927E]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-[#C2927E] font-semibold">
                    Votre Profil d'Activité
                  </label>
                  <select
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050B18] border border-[#C2927E]/30 text-sm text-[#FDFCF8] focus:outline-none focus:border-[#C2927E]"
                  >
                    <option value="athlete">Athlète Professionnel (Football / Autre)</option>
                    <option value="agent">Agent / Représentant de Sportif</option>
                    <option value="brand">Fondateur / Créateur de Marque</option>
                    <option value="hospitality">Dirigeant Hospitality / Restaurant / Hôtel</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-[#C2927E] font-semibold">
                    Attentes vis-à-vis du Club SAYA FORM
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Ex: Refonte d'image pour la prochaine saison, harmonisation de mes partenariats..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050B18] border border-[#C2927E]/30 text-sm text-[#FDFCF8] focus:outline-none focus:border-[#C2927E] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-rosegold-gradient text-[#050B18] font-medium text-[10px] uppercase tracking-[0.25em] shadow-lg hover:opacity-95 transition-opacity flex items-center justify-center gap-2 mt-2"
                >
                  <span>Postuler pour le {currentTier.name} ({currentTier.price}€)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
