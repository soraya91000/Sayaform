import React from 'react';
import { ArrowUpRight, ArrowLeft, Sparkles } from 'lucide-react';
import { SayaFormLogo } from './brand/SayaFormLogo';

interface LaMaisonPageProps {
  onBackToHome: () => void;
  onOpenContact: (subject?: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

interface ProjectItem {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  scope: string;
  image: string;
  aspect: string;
}

const SELECTED_PROJECTS: ProjectItem[] = [
  {
    id: 'project-1',
    number: '01',
    category: 'Maison de Mode & Haute Joaillerie',
    title: 'Maison Aurèle',
    description: 'Façonner une allure intemporelle : refonte intégrale de la grammaire visuelle, direction éditoriale et mise en scène du magnétisme.',
    scope: 'Identité • Direction Artistique • Univers de Marque',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=85',
    aspect: 'aspect-[16/10]',
  },
  {
    id: 'project-2',
    number: '02',
    category: 'Sportif International & Talent Public',
    title: 'Julian V.',
    description: 'Élever la performance athlétique brute au rang de stature publique convoitée. Cohérence absolue entre l’arène sportive et les apparitions médiatiques.',
    scope: 'Personal Branding • Image Digitale • Direction Publique',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=85',
    aspect: 'aspect-[16/10]',
  },
  {
    id: 'project-3',
    number: '03',
    category: 'Hospitality & Gastronomie de Prestige',
    title: 'Le Domaine des Hauts',
    description: 'Une scénographie visuelle où chaque détail insuffle l’exclusivité. Rebranding d’un hôtel particulier et direction de son aura sensorielle.',
    scope: 'Rebranding • Direction Spatiale • Désirabilité',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85',
    aspect: 'aspect-[16/10]',
  },
];

export const LaMaisonPage: React.FC<LaMaisonPageProps> = ({
  onBackToHome,
  onOpenContact,
  onNavigateSection,
}) => {
  return (
    <div className="bg-[#FAF8F5] text-[#050B18] min-h-screen pt-28 pb-0">
      {/* ========================================================
          1. EN-TÊTE ÉDITORIAL DE LA MAISON
          ======================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="flex items-center justify-between pb-8 border-b border-[#050B18]/10 mb-12">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#050B18]/60 hover:text-[#C2927E] transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Retour à l'accueil</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8F5542] font-semibold">
              MAISON SAYA FORM
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#C2927E]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#050B18]/50">
              PARIS
            </span>
          </div>
        </div>

        {/* Titre Principal */}
        <div className="text-center max-w-4xl mx-auto py-8">
          <div className="inline-flex items-center justify-center mb-6">
            <SayaFormLogo size={64} id="la-maison-hero-logo" />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-[#050B18] leading-[1.08]">
            LA MAISON
          </h1>
          <p className="mt-4 text-xs sm:text-sm uppercase tracking-[0.35em] text-[#8F5542] font-semibold">
            Direction Créative • Image • Perception
          </p>
        </div>
      </section>

      {/* ========================================================
          2. VISION SAYA FORM
          ======================================================== */}
      <section className="py-20 border-y border-[#050B18]/10 bg-[#F4EFEA]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#8F5542] font-bold block mb-6">
            VISION SAYA FORM
          </span>

          <blockquote className="text-xl sm:text-3xl md:text-4xl font-serif text-[#050B18] leading-relaxed italic max-w-3xl mx-auto">
            “SAYA FORM est une maison de direction créative dédiée à l’image, l’identité et la perception. Nous transformons une présence en univers reconnaissable, désirable et cohérent.”
          </blockquote>

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-[#C2927E]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#050B18]/60 font-semibold">
              SAYA FORM • DIRECTION ARTISTIQUE & STRATÉGIE
            </span>
            <div className="h-px w-12 bg-[#C2927E]" />
          </div>
        </div>
      </section>

      {/* ========================================================
          3. NOTRE APPROCHE
          ======================================================== */}
      <section className="py-28 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#8F5542] font-bold block mb-4">
            NOTRE APPROCHE
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#050B18] leading-tight">
            IMAGE. IDENTITÉ. DIRECTION.
          </h2>

          <p className="mt-6 text-base sm:text-xl text-[#050B18]/75 font-light max-w-2xl mx-auto leading-relaxed">
            Nous ne façonnons pas seulement une esthétique de surface, mais l’architecture complète de votre perception : ce que l’on ressent, ce que l’on retient et ce que l’on désire à votre contact.
          </p>

          {/* Trois dimensions épurées */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-white border border-[#050B18]/10 shadow-sm">
              <span className="text-xs font-mono text-[#C2927E] font-bold block mb-3">01</span>
              <h3 className="text-lg font-bold uppercase tracking-wider text-[#050B18]">
                L'IMAGE
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#050B18]/70 font-light leading-relaxed">
                Le magnétisme visuel immédiat, la pureté des lignes et l'intensité de la première impression.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#050B18]/10 shadow-sm">
              <span className="text-xs font-mono text-[#C2927E] font-bold block mb-3">02</span>
              <h3 className="text-lg font-bold uppercase tracking-wider text-[#050B18]">
                L'IDENTITÉ
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#050B18]/70 font-light leading-relaxed">
                Le langage propre, la grammaire singulière et les valeurs qui vous rendent inimitable dans la durée.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#050B18]/10 shadow-sm">
              <span className="text-xs font-mono text-[#C2927E] font-bold block mb-3">03</span>
              <h3 className="text-lg font-bold uppercase tracking-wider text-[#050B18]">
                LA DIRECTION
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#050B18]/70 font-light leading-relaxed">
                La vision d'ensemble et le calibrage rigoureux de chaque prise de parole, campagne ou apparition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. SELECTED WORK (Grandes images, style éditorial premium)
          ======================================================== */}
      <section className="py-24 bg-[#F5F1EB] border-t border-[#050B18]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#050B18]/15 mb-16">
            <div>
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#8F5542] font-bold block mb-2">
                SÉLECTION ÉDITORIALE
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#050B18]">
                SELECTED WORK
              </h2>
            </div>
            <p className="mt-3 md:mt-0 text-xs sm:text-sm text-[#050B18]/60 uppercase tracking-[0.2em] font-medium">
              Une sélection restreinte d’univers sculptés
            </p>
          </div>

          {/* Liste des projets éditoriaux */}
          <div className="space-y-24">
            {SELECTED_PROJECTS.map((project, index) => (
              <article
                key={project.id}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Image du projet (Grande, soignée) */}
                <div className={`lg:col-span-8 overflow-hidden rounded-3xl bg-[#050B18] shadow-xl ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                    
                    {/* Badge Projet Numéro */}
                    <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-[#050B18]/80 backdrop-blur-md border border-[#C2927E]/40 text-xs font-mono text-[#FDFCF8]">
                      {project.number}
                    </div>
                  </div>
                </div>

                {/* Légende & Contexte Éditorial */}
                <div className={`lg:col-span-4 space-y-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#8F5542] font-bold block">
                    {project.category}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#050B18]">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#050B18]/75 font-light leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-3 border-t border-[#050B18]/10">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#050B18]/50 block font-medium">
                      CHAMP D'INTERVENTION
                    </span>
                    <span className="text-xs font-semibold text-[#8F5542] mt-1 block">
                      {project.scope}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. CTA FINAL SUR FOND BLEU NUIT (Exact demandé)
          “Votre image mérite une direction.”
          Bouton : Demander un devis
          ======================================================== */}
      <section className="bg-[#050B18] text-[#FDFCF8] py-28 relative overflow-hidden border-t border-[#C2927E]/30">
        {/* Halo décoratif discret */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C2927E]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <div className="inline-flex items-center justify-center">
            <SayaFormLogo size={60} id="la-maison-cta-logo" />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#FDFCF8] leading-tight">
            Votre image mérite une direction.
          </h2>

          <p className="text-sm sm:text-base text-[#FDFCF8]/70 font-light max-w-xl mx-auto leading-relaxed">
            Échangeons sur vos ambitions, votre positionnement et la vision à bâtir pour votre marque, votre entreprise ou votre stature publique.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenContact('Demande de devis — Depuis La Maison')}
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-rosegold-gradient text-[#050B18] hover:opacity-95 text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 transition-all shadow-xl"
            >
              <span>Demander un devis</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={onBackToHome}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-white/20 text-[#FDFCF8] hover:border-[#C2927E] hover:text-[#C2927E] text-xs uppercase tracking-[0.2em] font-semibold transition-colors"
            >
              <span>Découvrir nos offres</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer Minimaliste La Maison */}
      <footer className="bg-[#030710] text-[#FDFCF8]/60 py-8 border-t border-white/10 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <SayaFormLogo size={28} id="maison-footer-logo" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#FDFCF8]">
              SAYA FORM • DIRECTION CRÉATIVE
            </span>
          </div>

          <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest text-[#FDFCF8]/50">
            <a href="mailto:sayaform1@gmail.com" className="hover:text-[#C2927E] transition-colors">
              sayaform1@gmail.com
            </a>
            <span>•</span>
            <a
              href="https://wa.me/message/RQEDCHRDQ6HJL1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C2927E] transition-colors"
            >
              +33 7 56 96 63 97
            </a>
            <span>•</span>
            <span>Paris</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
