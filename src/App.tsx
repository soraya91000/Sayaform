import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { DualPillarsSection } from './components/DualPillarsSection';
import { MarquesSection } from './components/MarquesSection';
import { AthletesSection } from './components/AthletesSection';
import { OffresSection } from './components/OffresSection';
import { ContactSection } from './components/ContactSection';
import { ClubModal } from './components/ClubModal';
import { LaMaisonPage } from './components/LaMaisonPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'maison'>(() => {
    if (typeof window !== 'undefined') {
      return window.location.hash === '#maison' ? 'maison' : 'home';
    }
    return 'home';
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState({
    name: 'Signature',
    price: '550 € / an',
    pole: 'Pôle Marques & Entreprises',
  });
  const [contactSubject, setContactSubject] = useState('Demande de devis');

  // Handle browser hash navigation (e.g. Back button, direct link)
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#maison') {
        setCurrentPage('maison');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigateToMaison = () => {
    setCurrentPage('maison');
    window.location.hash = 'maison';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToHome = (sectionId?: string) => {
    setCurrentPage('home');
    if (window.location.hash === '#maison') {
      history.pushState('', document.title, window.location.pathname + window.location.search);
    }

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = (subject: string = 'Demande de devis') => {
    setContactSubject(subject);
    if (currentPage !== 'home') {
      handleNavigateToHome('section-contact');
    } else {
      scrollTo('section-contact');
    }
  };

  const handleSelectOffer = (offerName: string, offerPrice: string, pole: string) => {
    setSelectedOffer({ name: offerName, price: offerPrice, pole });
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#050B18] flex flex-col antialiased selection:bg-[#C2927E] selection:text-[#050B18]">
      {/* 
        Navigation Épurée :
        - Logo Saya Form officiel UNIQUEMENT en haut
        - Maison (Lien vers la page dédiée LA MAISON)
        - Marques & Entreprises
        - Athlètes & Talents
        - Offres
        - Contact
      */}
      <Header
        currentPage={currentPage}
        onNavigateToMaison={handleNavigateToMaison}
        onNavigateToHome={handleNavigateToHome}
        onOpenContact={handleOpenContact}
        onOpenClub={() => {
          if (currentPage !== 'home') {
            handleNavigateToHome('section-offres');
          } else {
            scrollTo('section-offres');
          }
        }}
      />

      <main className="flex-1">
        {currentPage === 'maison' ? (
          /* ========================================================
              PAGE DÉDIÉE : LA MAISON
              - Vision SAYA FORM
              - Notre approche : IMAGE. IDENTITÉ. DIRECTION.
              - Selected Work : Grandes images éditoriales premium
              - CTA final sur fond bleu nuit : “Votre image mérite une direction.”
             ======================================================== */
          <LaMaisonPage
            onBackToHome={() => handleNavigateToHome()}
            onOpenContact={handleOpenContact}
            onNavigateSection={handleNavigateToHome}
          />
        ) : (
          /* ========================================================
              PAGE PRINCIPALE ACCUEIL
             ======================================================== */
          <>
            {/* 1. Hero Section sur fond clair */}
            <HeroSection
              onScrollToMarques={() => scrollTo('section-marques')}
              onScrollToAthletes={() => scrollTo('section-athletes')}
            />

            {/* 2. Deux Blocs Principaux sur fond bleu nuit */}
            <DualPillarsSection
              onScrollToMarques={() => scrollTo('section-marques')}
              onScrollToAthletes={() => scrollTo('section-athletes')}
            />

            {/* 3. Section Marques & Entreprises */}
            <MarquesSection onOpenContact={handleOpenContact} />

            {/* 4. Section Athlètes & Talents */}
            <AthletesSection onOpenContact={handleOpenContact} />

            {/* 5. Section Offres SAYA FORM */}
            <OffresSection
              onSelectOffer={handleSelectOffer}
              onOpenContact={handleOpenContact}
            />

            {/* 6. Section Contact */}
            <ContactSection initialSubject={contactSubject} />
          </>
        )}
      </main>

      {/* Modal Élégant de Choix d'Offre */}
      <ClubModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        tierName={selectedOffer.name}
        tierPrice={selectedOffer.price}
        pole={selectedOffer.pole}
      />
    </div>
  );
}
