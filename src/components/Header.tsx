import React, { useState, useEffect } from 'react';
import { SayaFormLogo } from './brand/SayaFormLogo';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: 'home' | 'maison';
  onNavigateToMaison: () => void;
  onNavigateToHome: (sectionId?: string) => void;
  onOpenContact: (subject?: string) => void;
  onOpenClub: (tierId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigateToMaison,
  onNavigateToHome,
  onOpenContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (target: 'maison' | string) => {
    setMobileMenuOpen(false);
    if (target === 'maison') {
      onNavigateToMaison();
    } else {
      onNavigateToHome(target);
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050B18]/95 backdrop-blur-md border-b border-[#C2927E]/20 py-3 shadow-lg'
            : 'bg-[#FAF8F5]/90 backdrop-blur-sm border-b border-[#050B18]/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Officiel Fixe SAYA FORM */}
          <button
            id="header-logo-link"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={() => onNavigateToHome()}
            aria-label="SAYA FORM Accueil"
          >
            <SayaFormLogo
              size={isScrolled ? 42 : 46}
              id="header-official-logo"
            />
          </button>

          {/* Navigation Simple */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavClick('maison')}
              className={`text-[11px] uppercase tracking-[0.25em] font-semibold transition-all py-1 ${
                currentPage === 'maison'
                  ? 'text-[#C2927E] border-b-2 border-[#C2927E] font-bold'
                  : isScrolled
                  ? 'text-[#FDFCF8]/80 hover:text-[#C2927E]'
                  : 'text-[#050B18]/80 hover:text-[#C2927E]'
              }`}
            >
              Maison
            </button>
            <button
              onClick={() => handleNavClick('section-marques')}
              className={`text-[11px] uppercase tracking-[0.25em] font-semibold transition-colors py-1 ${
                isScrolled
                  ? 'text-[#FDFCF8]/80 hover:text-[#C2927E]'
                  : 'text-[#050B18]/80 hover:text-[#C2927E]'
              }`}
            >
              Marques & Entreprises
            </button>
            <button
              onClick={() => handleNavClick('section-athletes')}
              className={`text-[11px] uppercase tracking-[0.25em] font-semibold transition-colors py-1 ${
                isScrolled
                  ? 'text-[#FDFCF8]/80 hover:text-[#C2927E]'
                  : 'text-[#050B18]/80 hover:text-[#C2927E]'
              }`}
            >
              Athlètes & Talents
            </button>
            <button
              onClick={() => handleNavClick('section-offres')}
              className={`text-[11px] uppercase tracking-[0.25em] font-semibold transition-colors py-1 ${
                isScrolled
                  ? 'text-[#FDFCF8]/80 hover:text-[#C2927E]'
                  : 'text-[#050B18]/80 hover:text-[#C2927E]'
              }`}
            >
              Offres
            </button>
            <button
              onClick={() => handleNavClick('section-contact')}
              className={`text-[11px] uppercase tracking-[0.25em] font-semibold transition-colors py-1 ${
                isScrolled
                  ? 'text-[#FDFCF8]/80 hover:text-[#C2927E]'
                  : 'text-[#050B18]/80 hover:text-[#C2927E]'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Action Rapide Devis / Contact */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenContact('Demande de devis')}
              className={`px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold transition-all ${
                isScrolled
                  ? 'bg-rosegold-gradient text-[#050B18] hover:opacity-90 shadow-md'
                  : 'bg-[#050B18] text-[#FAF8F5] hover:bg-[#C2927E] hover:text-[#050B18]'
              }`}
            >
              Demander un devis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-[#FDFCF8]' : 'text-[#050B18]'
            }`}
            aria-label="Menu de navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="fixed inset-0 z-40 bg-[#050B18] text-[#FDFCF8] flex flex-col justify-between p-8 pt-24 md:hidden animate-in fade-in duration-200"
        >
          <div className="flex flex-col space-y-6">
            <div className="pb-4 border-b border-[#C2927E]/20 flex items-center justify-between">
              <SayaFormLogo size={42} id="mobile-drawer-logo" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#FDFCF8]/70 hover:text-[#C2927E]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col space-y-5 pt-2">
              <button
                onClick={() => handleNavClick('maison')}
                className={`text-left text-xl font-bold uppercase tracking-wider ${
                  currentPage === 'maison'
                    ? 'text-[#C2927E]'
                    : 'text-[#FDFCF8] hover:text-[#C2927E]'
                }`}
              >
                Maison
              </button>
              <button
                onClick={() => handleNavClick('section-marques')}
                className="text-left text-xl font-bold uppercase tracking-wider text-[#FDFCF8] hover:text-[#C2927E]"
              >
                Marques & Entreprises
              </button>
              <button
                onClick={() => handleNavClick('section-athletes')}
                className="text-left text-xl font-bold uppercase tracking-wider text-[#FDFCF8] hover:text-[#C2927E]"
              >
                Athlètes & Talents
              </button>
              <button
                onClick={() => handleNavClick('section-offres')}
                className="text-left text-xl font-bold uppercase tracking-wider text-[#FDFCF8] hover:text-[#C2927E]"
              >
                Offres & Formules
              </button>
              <button
                onClick={() => handleNavClick('section-contact')}
                className="text-left text-xl font-bold uppercase tracking-wider text-[#FDFCF8] hover:text-[#C2927E]"
              >
                Contact & Devis
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-[#C2927E]/20 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact('Demande de devis');
              }}
              className="w-full py-3.5 rounded-full bg-rosegold-gradient text-[#050B18] text-xs uppercase tracking-[0.2em] font-bold text-center"
            >
              Demander un devis
            </button>
            <a
              href="mailto:sayaform1@gmail.com"
              className="text-center text-xs text-[#C2927E] tracking-wider py-2"
            >
              sayaform1@gmail.com
            </a>
          </div>
        </div>
      )}
    </>
  );
};
