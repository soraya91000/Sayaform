import React, { useState } from 'react';
import { SayaFormLogo } from './brand/SayaFormLogo';
import { SayaFormSymbol } from './brand/SayaFormSymbol';
import { RoseGoldDivider } from './brand/RoseGoldDivider';
import { ArrowUpRight, Send, CheckCircle2, Instagram, Mail, MapPin } from 'lucide-react';

interface ContactSectionProps {
  onOpenMembershipModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenMembershipModal,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'athlete',
    instagram: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <footer id="section-contact" className="bg-[#050B18] text-[#FDFCF8] relative overflow-hidden pt-28 pb-14 border-t border-[#C2927E]/20">
      {/* Background Graphic Watermark */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none opacity-5">
        <SayaFormLogo size={700} monogramOnly={true} id="footer-bg-watermark" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Contact Form & Studio Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-24 border-b border-[#C2927E]/20">
          {/* Left Column: Vision & Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-[#C2927E] font-semibold">
                <SayaFormSymbol size={18} showRing={false} />
                <span>CONSULTATION CONFIDENTIELLE</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#FDFCF8]">
                INITIER VOTRE{' '}
                <span className="text-rosegold-gradient">
                  DIRECTION.
                </span>
              </h3>
              <p className="text-sm text-[#FDFCF8]/75 font-light leading-relaxed">
                Que vous soyez un athlète d'élite en préparation de saison ou une marque de prestige cherchant à redéfinir son empreinte, nos directeurs créatifs étudient chaque sollicitation sous le sceau du secret le plus strict.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#C2927E]/15 text-xs text-[#FDFCF8]/80">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#080F1F] border border-[#C2927E]/30 flex items-center justify-center text-[#C2927E]">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-light">Bureau de Direction : Paris 8e • Sur Rendez-vous Privé</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#080F1F] border border-[#C2927E]/30 flex items-center justify-center text-[#C2927E]">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-light">direction@sayaform.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#080F1F] border border-[#C2927E]/30 flex items-center justify-center text-[#C2927E]">
                  <Instagram className="w-4 h-4" />
                </div>
                <span className="font-light">@sayaform (Instagram Officiel)</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#080F1F] border border-[#C2927E]/20">
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#C2927E] block mb-1 font-semibold">
                L'Engagement SAYA FORM
              </span>
              <p className="editorial-font italic text-base text-[#FDFCF8]">
                “We shape perception. Jamais nous ne produisons d'images génériques. Chaque projet est un manifeste d'autorité visuelle.”
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Private Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#080F1F]/90 border border-[#C2927E]/25 shadow-2xl relative">
              {isSubmitted ? (
                <div className="py-16 text-center space-y-4 animate-in fade-in duration-500">
                  <div className="w-16 h-16 rounded-full bg-[#C2927E]/10 border border-[#C2927E] flex items-center justify-center mx-auto text-[#C2927E]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="editorial-font text-3xl text-[#FDFCF8] italic font-light">
                    Demande Reçue avec Succès
                  </h4>
                  <p className="text-sm text-[#FDFCF8]/75 font-light max-w-md mx-auto">
                    Notre direction artistique prendra contact sous 24h ouvrées. Un dossier confidentiel d'exploration préliminaire vous sera remis.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full border border-[#C2927E]/40 text-[10px] uppercase tracking-[0.25em] text-[#C2927E] hover:bg-[#C2927E]/10"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.25em] text-[#C2927E] font-semibold">
                        Votre Nom / Représentant *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Kylian / Alexandre V."
                        className="w-full px-4 py-3 rounded-xl bg-[#050B18] border border-[#C2927E]/30 text-sm text-[#FDFCF8] focus:outline-none focus:border-[#C2927E] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.25em] text-[#C2927E] font-semibold">
                        Email Confidentiel *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contact@agence-ou-talent.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#050B18] border border-[#C2927E]/30 text-sm text-[#FDFCF8] focus:outline-none focus:border-[#C2927E] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.25em] text-[#C2927E] font-semibold">
                        Votre Statut / Profil
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#050B18] border border-[#C2927E]/30 text-sm text-[#FDFCF8] focus:outline-none focus:border-[#C2927E] transition-colors"
                      >
                        <option value="athlete">Athlète Professionnel / Football</option>
                        <option value="agent">Agent / Maison de Management</option>
                        <option value="brand">Fondateur / Dirigeant de Marque</option>
                        <option value="hospitality">Hôtellerie / Restaurant / Espace</option>
                        <option value="other">Autre Projet d'Image</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.25em] text-[#C2927E] font-semibold">
                        Compte Instagram / Référence
                      </label>
                      <input
                        type="text"
                        value={formData.instagram}
                        onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                        placeholder="@votrecompte"
                        className="w-full px-4 py-3 rounded-xl bg-[#050B18] border border-[#C2927E]/30 text-sm text-[#FDFCF8] focus:outline-none focus:border-[#C2927E] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.25em] text-[#C2927E] font-semibold">
                      Objectif de Direction Artistique *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Décrivez votre vision, vos échéances (ex: mercato, lancement de marque, tunnel walk, refonte d'identité)..."
                      className="w-full px-4 py-3 rounded-xl bg-[#050B18] border border-[#C2927E]/30 text-sm text-[#FDFCF8] focus:outline-none focus:border-[#C2927E] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-rosegold-gradient text-[#050B18] font-medium text-[10px] uppercase tracking-[0.25em] hover:opacity-95 transition-opacity shadow-[0_10px_30px_rgba(194,146,126,0.3)] flex items-center justify-center gap-2"
                  >
                    <span>Transmettre la Demande à la Direction</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Branding & Hallmark Bar */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#FDFCF8]/60">
          <div className="flex items-center gap-4">
            <SayaFormLogo size={42} showWordmark={true} id="footer-logo-official" />
          </div>

          <div className="flex items-center gap-2 text-[#C2927E]">
            <SayaFormSymbol size={18} showRing={false} />
            <span className="editorial-font text-sm tracking-[0.25em] uppercase italic">
              Image • Identity • Direction
            </span>
          </div>

          <div className="text-right text-[11px] font-light">
            © {new Date().getFullYear()} SAYA FORM. Tous droits réservés. Maison de direction créative.
          </div>
        </div>
      </div>
    </footer>
  );
};
