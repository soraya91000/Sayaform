import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ManifestoSection } from './components/ManifestoSection';
import { BrandIdentitySection } from './components/BrandIdentitySection';
import { UniversSection } from './components/UniversSection';
import { PortfolioSection } from './components/PortfolioSection';
import { InstagramFeedSection } from './components/InstagramFeedSection';
import { MembershipSection } from './components/MembershipSection';
import { ContactSection } from './components/ContactSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { MembershipModal } from './components/MembershipModal';
import { PROJECTS } from './data/sayaFormData';
import { ProjectCaseStudy, UniverseType } from './types';
import { BrandWatermark } from './components/brand/BrandWatermark';

export default function App() {
  const [activeUniverse, setActiveUniverse] = useState<UniverseType>('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectCaseStudy | null>(null);
  const [membershipModalOpen, setMembershipModalOpen] = useState<boolean>(false);
  const [selectedMembershipTier, setSelectedMembershipTier] = useState<string>('signature');

  const handleSelectUniverse = (universe: UniverseType) => {
    setActiveUniverse(universe);
    const element = document.getElementById('section-portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewProject = (projectId: string) => {
    const proj = PROJECTS.find((p) => p.id === projectId);
    if (proj) {
      setSelectedCaseStudy(proj);
    }
  };

  const handleOpenMembershipModal = (tierId: string = 'signature') => {
    setSelectedMembershipTier(tierId);
    setMembershipModalOpen(true);
  };

  const handleOpenContact = () => {
    const element = document.getElementById('section-contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050B18] text-[#FDFCF8] selection:bg-[#C2927E] selection:text-[#050B18] relative font-sans">
      {/* Background Decorative Subtle Watermarks */}
      <BrandWatermark type="logo" size={750} className="top-1/4 -left-48" opacity={0.02} />
      <BrandWatermark type="symbol" size={600} className="bottom-1/3 -right-40" opacity={0.025} />

      {/* Side Vertical Hallmark from Bold Typography Theme */}
      <div className="fixed left-6 bottom-12 hidden 2xl:flex items-center space-x-3.5 opacity-40 z-30 pointer-events-none">
        <div className="h-12 w-[1px] bg-[#C2927E]"></div>
        <span className="text-[9px] uppercase tracking-[0.4em] vertical-rl rotate-180 text-[#C2927E] font-medium">
          SAYA FORM OFFICIAL
        </span>
      </div>

      {/* Main Global Navigation */}
      <Header
        activeUniverse={activeUniverse}
        onSelectUniverse={setActiveUniverse}
        onOpenMembershipModal={handleOpenMembershipModal}
        onOpenContactModal={handleOpenContact}
      />

      {/* Hero Section */}
      <main>
        <HeroSection
          onSelectUniverse={handleSelectUniverse}
          onOpenMembershipModal={() => handleOpenMembershipModal('signature')}
          onOpenContactModal={handleOpenContact}
        />

        {/* Respiration Section: Ivory / Crème Clair Manifesto */}
        <ManifestoSection />

        {/* Pôle Marques: Gestion d'Image, Identité Visuelle, Sites Web, Branding & Re-Branding */}
        <BrandIdentitySection
          onOpenContact={handleOpenContact}
          onViewProject={handleViewProject}
        />

        {/* Dual Universes: Athlètes vs Marques */}
        <UniversSection
          activeUniverse={activeUniverse}
          onSelectUniverse={setActiveUniverse}
          onViewProject={handleViewProject}
        />

        {/* Visual Case Studies Portfolio */}
        <PortfolioSection
          projects={PROJECTS}
          activeUniverse={activeUniverse}
          onSelectUniverse={setActiveUniverse}
          onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)}
        />

        {/* Instagram Continuity Feed (Rituel SAYA FORM) */}
        <InstagramFeedSection />

        {/* SAYA FORM Private Club Membership Passes */}
        <MembershipSection onOpenMembershipModal={handleOpenMembershipModal} />

        {/* Confidential Consultation & Footer */}
        <ContactSection onOpenMembershipModal={() => handleOpenMembershipModal('private')} />
      </main>

      {/* Case Study Full Dossier Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenContact={handleOpenContact}
      />

      {/* Private Club Membership Application Modal */}
      <MembershipModal
        isOpen={membershipModalOpen}
        initialTierId={selectedMembershipTier}
        onClose={() => setMembershipModalOpen(false)}
      />
    </div>
  );
}
