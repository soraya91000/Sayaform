import React, { useState, useEffect } from 'react';
import { Mail, Phone, ArrowUpRight, Check, Send, Sparkles, MessageSquare } from 'lucide-react';
import { SayaFormLogo } from './brand/SayaFormLogo';

interface ContactSectionProps {
  initialSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSubject = 'Demande de devis' }) => {
  const [formData, setFormData] = useState({
    type: 'Demander un devis',
    pole: 'Pôle marques & entreprises',
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Branding & Identité visuelle',
    budget: '500 € - 1 500 €',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');

  const WHATSAPP_PHONE = '33756966397';
  const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_PHONE}`;

  useEffect(() => {
    if (!initialSubject) return;

    if (initialSubject.includes('Athlète') || initialSubject.includes('Talent')) {
      setFormData((prev) => ({
        ...prev,
        pole: 'Pôle athlètes & talents',
        type: 'Demander un devis',
        projectType: initialSubject.includes('Image 360')
          ? 'Formule Athlète 360 (850 €/mois)'
          : initialSubject.includes('Image')
          ? 'Formule Athlète Image (450 €/mois)'
          : 'Management & Direction d\'image',
      }));
    } else if (initialSubject.includes('Marque') || initialSubject.includes('Entreprise')) {
      setFormData((prev) => ({
        ...prev,
        pole: 'Pôle marques & entreprises',
        type: 'Demander un devis',
        projectType: initialSubject.includes('Essential')
          ? 'Formule Essential (365 €)'
          : initialSubject.includes('Signature')
          ? 'Formule Signature (550 €)'
          : initialSubject.includes('Direction')
          ? 'Formule Direction (750 €)'
          : 'Branding & Identité visuelle',
      }));
    } else if (initialSubject.includes('sur-mesure') || initialSubject.includes('Sur-mesure')) {
      setFormData((prev) => ({
        ...prev,
        pole: 'Projet sur-mesure',
        type: 'Demander un devis',
        projectType: 'Projet sur-mesure / Autre',
      }));
    }
  }, [initialSubject]);

  const buildWhatsAppMessage = () => {
    const lines = [
      `*DEMANDE DE DEVIS — SAYA FORM*`,
      ``,
      `• *Objet :* ${formData.type}`,
      `• *Pôle :* ${formData.pole}`,
      `• *Nom complet :* ${formData.name}`,
      formData.company ? `• *Entreprise / Marque :* ${formData.company}` : null,
      `• *Email :* ${formData.email}`,
      `• *Téléphone :* ${formData.phone}`,
      `• *Type de projet / Offre :* ${formData.projectType}`,
      `• *Budget estimé :* ${formData.budget}`,
      ``,
      `*Message / Précisions :*`,
      formData.message,
    ].filter(Boolean);

    return lines.join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = buildWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
    setLastWhatsAppUrl(whatsappUrl);
    setSubmitted(true);

    // Ouvre directement WhatsApp vers le numéro +33756966397 avec le message prérempli
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer id="section-contact" className="py-24 bg-[#050B18] text-[#FDFCF8] relative overflow-hidden border-t border-[#C2927E]/20">
      {/* Background Ambience */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C2927E]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-[#C2927E]/15">
          {/* Left Column: Vision & Official Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080F20] border border-[#C2927E]/30 text-[10px] uppercase tracking-[0.3em] text-[#C2927E] font-semibold mb-4">
                <span>PRISE DE CONTACT OFFICIELLE</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#FDFCF8] leading-tight">
                INITIER VOTRE <span className="text-[#C2927E]">DIRECTION.</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#FDFCF8]/75 font-light leading-relaxed">
                Que vous souhaitiez demander un devis pour votre marque ou planifier une consultation confidentielle pour un athlète, nous vous répondons sous 24 heures.
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-4 pt-4 border-t border-[#C2927E]/20">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C2927E] font-semibold block">
                Coordonnées Directes
              </span>

              {/* Email */}
              <a
                href="mailto:sayaform1@gmail.com"
                className="group p-4 rounded-2xl bg-[#080F20] border border-[#C2927E]/25 hover:border-[#C2927E] flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#050B18] border border-[#C2927E]/40 flex items-center justify-center text-[#C2927E]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#FDFCF8]/60 block font-medium">
                      Email officiel
                    </span>
                    <span className="text-sm sm:text-base font-medium text-[#FDFCF8] group-hover:text-[#C2927E] transition-colors">
                      sayaform1@gmail.com
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#C2927E] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Téléphone / WhatsApp */}
              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-[#080F20] border border-[#C2927E]/25 hover:border-[#C2927E] flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#050B18] border border-[#C2927E]/40 flex items-center justify-center text-[#C2927E]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#FDFCF8]/60 block font-medium">
                      Ligne directe & WhatsApp
                    </span>
                    <span className="text-sm sm:text-base font-medium text-[#FDFCF8] group-hover:text-[#C2927E] transition-colors font-mono">
                      +33 7 56 96 63 97
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#C2927E] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Address & Confidentiality note */}
            <div className="p-4 rounded-2xl bg-[#080F20]/70 border border-white/10 text-xs text-[#FDFCF8]/70 space-y-1">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#C2927E] font-bold block">
                Discrétion & Cadre
              </span>
              <p>Bureau de direction : Paris • Sur rendez-vous privé.</p>
              <p className="text-[11px] text-[#FDFCF8]/50">
                Toutes les correspondances relatives aux athlètes et aux marques sont traitées sous secret professionnel.
              </p>
            </div>
          </div>

          {/* Right Column: Clean, Elegant Contact & Quote Form */}
          <div className="lg:col-span-7 bg-[#080F20] p-8 sm:p-10 rounded-3xl border border-[#C2927E]/30 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#C2927E]/20 border-2 border-[#C2927E] flex items-center justify-center mx-auto text-[#C2927E]">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-[#FDFCF8]">
                  Demande Transmise
                </h3>
                <p className="text-sm text-[#FDFCF8]/80 max-w-md mx-auto font-light leading-relaxed">
                  Votre demande de devis a été préremplie sur WhatsApp Pro. Si la conversation ne s'est pas ouverte automatiquement, cliquez sur le bouton ci-dessous :
                </p>

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={lastWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-rosegold-gradient text-[#050B18] text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Ouvrir mon WhatsApp Pro</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        type: 'Demander un devis',
                        pole: 'Pôle marques & entreprises',
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        projectType: 'Branding & Identité visuelle',
                        budget: '500 € - 1 500 €',
                        message: '',
                      });
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#C2927E]/40 text-xs uppercase tracking-widest text-[#C2927E] hover:bg-[#C2927E] hover:text-[#050B18] transition-colors"
                  >
                    Nouvelle demande
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Switcher: Demander un devis VS Prendre contact */}
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C2927E] block mb-2 font-semibold">
                    Objet de votre démarche
                  </span>
                  <div className="grid grid-cols-2 gap-3 p-1 rounded-xl bg-[#050B18] border border-[#C2927E]/20">
                    {['Demander un devis', 'Prendre contact'].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, type: opt })}
                        className={`py-2.5 px-3 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all ${
                          formData.type === opt
                            ? 'bg-rosegold-gradient text-[#050B18] shadow'
                            : 'text-[#FDFCF8]/70 hover:text-[#FDFCF8]'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pole Selection */}
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C2927E] block mb-2 font-semibold">
                    Pôle concerné
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      'Pôle marques & entreprises',
                      'Pôle athlètes & talents',
                      'Projet sur-mesure',
                    ].map((pole) => (
                      <button
                        key={pole}
                        type="button"
                        onClick={() => setFormData({ ...formData, pole })}
                        className={`py-2.5 px-3 rounded-xl text-[11px] uppercase tracking-wider text-center border transition-all ${
                          formData.pole === pole
                            ? 'bg-[#C2927E]/20 border-[#C2927E] text-[#FDFCF8] font-bold'
                            : 'bg-[#050B18]/60 border-white/10 text-[#FDFCF8]/65 hover:border-white/25'
                        }`}
                      >
                        {pole}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Company Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-[#FDFCF8]/70 block mb-1 font-medium">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Prénom & Nom"
                      className="w-full px-4 py-3 rounded-xl bg-[#050B18] border border-white/15 text-sm text-[#FDFCF8] placeholder:text-[#FDFCF8]/30 focus:border-[#C2927E] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-[#FDFCF8]/70 block mb-1 font-medium">
                      Entreprise / Marque / Entité
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Nom de votre structure"
                      className="w-full px-4 py-3 rounded-xl bg-[#050B18] border border-white/15 text-sm text-[#FDFCF8] placeholder:text-[#FDFCF8]/30 focus:border-[#C2927E] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Email & Phone Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-[#FDFCF8]/70 block mb-1 font-medium">
                      Adresse Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="contact@exemple.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#050B18] border border-white/15 text-sm text-[#FDFCF8] placeholder:text-[#FDFCF8]/30 focus:border-[#C2927E] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-[#FDFCF8]/70 block mb-1 font-medium">
                      Numéro de Téléphone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+33 6 ..."
                      className="w-full px-4 py-3 rounded-xl bg-[#050B18] border border-white/15 text-sm text-[#FDFCF8] placeholder:text-[#FDFCF8]/30 focus:border-[#C2927E] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Project Type & Budget Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-[#C2927E] block mb-1 font-medium">
                      Type de projet
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#050B18] border border-white/15 text-sm text-[#FDFCF8] focus:border-[#C2927E] focus:outline-none transition-colors"
                    >
                      <option value="Branding & Identité visuelle">Branding & Identité visuelle</option>
                      <option value="Re-branding complet">Re-branding complet</option>
                      <option value="Création de site internet">Création de site internet</option>
                      <option value="Management & Direction d'image">Management & Direction d'image</option>
                      <option value="Formule Essential (365 €)">Formule Essential (365 €)</option>
                      <option value="Formule Signature (550 €)">Formule Signature (550 €)</option>
                      <option value="Formule Direction (750 €)">Formule Direction (750 €)</option>
                      <option value="Formule Athlète Image (450 €/mois)">Formule Athlète Image (450 €/mois)</option>
                      <option value="Formule Athlète 360 (850 €/mois)">Formule Athlète 360 (850 €/mois)</option>
                      <option value="Projet sur-mesure / Autre">Projet sur-mesure / Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-[#C2927E] block mb-1 font-medium">
                      Budget envisagé
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#050B18] border border-white/15 text-sm text-[#FDFCF8] focus:border-[#C2927E] focus:outline-none transition-colors"
                    >
                      <option value="Moins de 500 €">Moins de 500 €</option>
                      <option value="500 € - 1 500 €">500 € - 1 500 €</option>
                      <option value="1 500 € - 5 000 €">1 500 € - 5 000 €</option>
                      <option value="Plus de 5 000 €">Plus de 5 000 €</option>
                      <option value="À définir ensemble">À définir ensemble</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#FDFCF8]/70 block mb-1 font-medium">
                    Votre Projet / Précisions *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Décrivez votre besoin (création d'identité, refonte, site web, management d'image...)"
                    className="w-full px-4 py-3 rounded-xl bg-[#050B18] border border-white/15 text-sm text-[#FDFCF8] placeholder:text-[#FDFCF8]/30 focus:border-[#C2927E] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-rosegold-gradient text-[#050B18] text-xs uppercase tracking-[0.22em] font-bold flex items-center justify-center gap-2 hover:opacity-95 transition-opacity shadow-xl cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Envoyer / Demander un devis</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Minimalist Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FDFCF8]/50">
          <div className="flex items-center gap-3">
            <SayaFormLogo size={32} variant="original" onDark={true} />
            <span className="tracking-widest uppercase font-semibold text-[#FDFCF8]/80">
              SAYA FORM
            </span>
          </div>

          <div className="flex items-center gap-6 text-[11px] tracking-wider">
            <span>Paris • Direction Artistique</span>
            <span>•</span>
            <a href="mailto:sayaform1@gmail.com" className="hover:text-[#C2927E] transition-colors">
              sayaform1@gmail.com
            </a>
          </div>

          <div className="text-[11px] tracking-wider">
            © {new Date().getFullYear()} SAYA FORM. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};
