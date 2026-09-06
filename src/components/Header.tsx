import React, { useState, useEffect } from 'react';
import { SayaFormLogo } from './brand/SayaFormLogo';
import { SayaFormSymbol } from './brand/SayaFormSymbol';
import { Menu, X, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import { UniverseType } from '../types';

interface HeaderProps {
  activeUniverse: UniverseType;
  onSelectUniverse: (universe: UniverseType) => void;
  onOpenMembershipModal: (tierId?: string) => void;
  onOpenContactModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeUniverse,
  onSelectUniverse,
  onOpenMembershipModal,
  onOpenContactModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#050B18]/92 backdrop-blur-md border-b border-[#C2927E]/20 py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-[#050B18]/95 via-[#050B18]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <a
            href="#"
            id="header-brand-link"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <SayaFormLogo
              size={44}
              showWordmark={true}
              id="header-sf-logo"
            />
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-7">
            {/* Quick Universe Filter */}
            <div className="flex items-center bg-[#080F1F] p-1 rounded-full border border-[#C2927E]/20">
              <button
                id="header-universe-all"
                onClick={() => onSelectUniverse('all')}
                className={`px-3.5 py-1 text-[10px] uppercase tracking-[0.3em] font-light rounded-full transition-all duration-300 ${
                  activeUniverse === 'all'
                    ? 'bg-rosegold-gradient text-[#050B18] font-medium shadow-md'
                    : 'text-[#FDFCF8]/70 hover:text-[#FDFCF8]'
                }`}
              >
                Maison
              </button>
              <button
                id="header-universe-athletes"
                onClick={() => onSelectUniverse('athletes')}
                className={`px-3.5 py-1 text-[10px] uppercase tracking-[0.3em] font-light rounded-full transition-all duration-300 ${
                  activeUniverse === 'athletes'
                    ? 'bg-rosegold-gradient text-[#050B18] font-medium shadow-md'
                    : 'text-[#FDFCF8]/70 hover:text-[#FDFCF8]'
                }`}
              >
                Athlètes
              </button>
              <button
                id="header-universe-brands"
                onClick={() => {
                  onSelectUniverse('brands');
                  scrollTo('section-brand-identity');
                }}
                className={`px-3.5 py-1 text-[10px] uppercase tracking-[0.3em] font-light rounded-full transition-all duration-300 ${
                  activeUniverse === 'brands'
                    ? 'bg-rosegold-gradient text-[#050B18] font-medium shadow-md'
                    : 'text-[#FDFCF8]/70 hover:text-[#FDFCF8]'
                }`}
              >
                Brands
              </button>
            </div>

            <button
              onClick={() => scrollTo('section-brand-identity')}
              className="text-[10px] uppercase tracking-[0.35em] font-semibold text-[#DFC0B5] hover:text-[#C2927E] transition-colors"
            >
              Pôle Marques
            </button>
            <button
              onClick={() => scrollTo('section-univers')}
              className="text-[10px] uppercase tracking-[0.35em] font-light text-[#FDFCF8]/80 hover:text-[#C2927E] transition-colors"
            >
              Univers
            </button>
            <button
              onClick={() => scrollTo('section-manifesto')}
              className="text-[10px] uppercase tracking-[0.35em] font-light text-[#FDFCF8]/80 hover:text-[#C2927E] transition-colors"
            >
              Direction
            </button>
            <button
              onClick={() => scrollTo('section-portfolio')}
              className="text-[10px] uppercase tracking-[0.35em] font-light text-[#FDFCF8]/80 hover:text-[#C2927E] transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollTo('section-feed')}
              className="text-[10px] uppercase tracking-[0.35em] font-light text-[#FDFCF8]/80 hover:text-[#C2927E] transition-colors"
            >
              Journal
            </button>
            <button
              onClick={() => scrollTo('section-membership')}
              className="text-[10px] uppercase tracking-[0.35em] text-[#C2927E] font-medium hover:text-[#FDFCF8] transition-colors flex items-center gap-1.5"
            >
              <span>Access</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C2927E] animate-pulse" />
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-cta-membership"
              onClick={() => onOpenMembershipModal()}
              className="relative px-5 py-2.5 rounded-full text-[10px] uppercase tracking-[0.3em] font-light text-[#FDFCF8] border border-[#C2927E]/40 hover:border-[#C2927E] hover:bg-[#C2927E]/10 transition-all duration-300 flex items-center gap-2 group"
            >
              <SayaFormSymbol size={16} showRing={false} />
              <span>Accès Club</span>
            </button>

            <button
              id="header-cta-contact"
              onClick={onOpenContactModal}
              className="px-5 py-2.5 rounded-full text-[10px] uppercase tracking-[0.3em] text-[#050B18] bg-rosegold-gradient font-medium hover:opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(194,146,126,0.3)] flex items-center gap-1.5"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F8F6F0] hover:text-[#C9937E] focus:outline-none"
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="fixed inset-0 z-40 bg-[#070B14]/98 backdrop-blur-xl flex flex-col justify-between p-8 pt-28 lg:hidden animate-in fade-in duration-300"
        >
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-2 text-[#C9937E] text-xs uppercase tracking-[0.3em] pb-3 border-b border-[#C9937E]/20">
              <SayaFormSymbol size={20} />
              <span>SAYA FORM • Direction Artistique</span>
            </div>

            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollTo('section-brand-identity')}
                className="text-left text-2xl font-bold uppercase tracking-tight text-[#DFC0B5] hover:text-[#C2927E]"
              >
                01. Pôle Marques & Identité
              </button>
              <button
                onClick={() => scrollTo('section-univers')}
                className="text-left text-2xl font-bold uppercase tracking-tight text-[#FDFCF8] hover:text-[#C2927E]"
              >
                02. Les Deux Univers
              </button>
              <button
                onClick={() => scrollTo('section-manifesto')}
                className="text-left text-2xl font-bold uppercase tracking-tight text-[#FDFCF8] hover:text-[#C2927E]"
              >
                03. Le Manifeste
              </button>
              <button
                onClick={() => scrollTo('section-portfolio')}
                className="text-left text-2xl font-bold uppercase tracking-tight text-[#FDFCF8] hover:text-[#C2927E]"
              >
                04. Portfolio & Case Studies
              </button>
              <button
                onClick={() => scrollTo('section-feed')}
                className="text-left text-2xl font-bold uppercase tracking-tight text-[#FDFCF8] hover:text-[#C2927E]"
              >
                05. Journal @sayaform
              </button>
              <button
                onClick={() => scrollTo('section-membership')}
                className="text-left text-2xl font-bold uppercase tracking-tight text-[#C2927E]"
              >
                06. Club Privé (Pass)
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-[#C9937E]/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMembershipModal();
              }}
              className="w-full py-3.5 rounded-full text-center text-xs uppercase tracking-[0.25em] text-[#F8F6F0] border border-[#C9937E]/60"
            >
              Rejoindre le Club (365€ - 750€)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactModal();
              }}
              className="w-full py-3.5 rounded-full text-center text-xs uppercase tracking-[0.25em] text-[#070B14] bg-rosegold-gradient font-medium"
            >
              Demande de Direction Artistique
            </button>
          </div>
        </div>
      )}
    </>
  );
};
