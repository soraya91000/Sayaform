import { ProjectCaseStudy, MembershipTier, InstagramFeedItem } from '../types';

export const HERO_DATA = {
  issue: "COLLECTION DIRECTION ARTISTIQUE • 2026",
  headline: "IMAGE. IDENTITY. DIRECTION.",
  subheadline: "We shape perception.",
  description:
    "Maison de direction créative et d'architecture d'image opérant à la convergence de l'athlète d'élite, du luxe contemporain et de la puissance de marque.",
  stats: [
    { label: "Athlètes & Talents sous Direction", value: "34+" },
    { label: "Maisons & Marques Accompagnées", value: "22" },
    { label: "Audience Cumulée Réseaux", value: "48M+" },
    { label: "Taux de Rétention Privée", value: "98%" }
  ]
};

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'olympia-nocturne',
    number: '01',
    title: 'OLYMPIA NOCTURNE',
    subtitle: 'Campagne Tunnel, Vestiaire & Image Joueur International',
    category: 'athletes',
    universeLabel: 'ATHLETES • FOOTBALL D’ÉLITE',
    year: '2026',
    heroImage: '/src/assets/images/sf_hero_campaign_1788627055331.jpg',
    galleryImages: [
      '/src/assets/images/sf_athletes_cinematic_1788627081394.jpg',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1400&auto=format&fit=crop'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1000&auto=format&fit=crop',
    afterImage: '/src/assets/images/sf_hero_campaign_1788627055331.jpg',
    brief:
      "Repositionner un attaquant international de Ligue 1 & sélection nationale comme une icône de mode et d'élégance froide, bien au-delà de la seule performance athlétique.",
    direction:
      "Cadrages cinématographiques 35mm en tunnel brut, manteau sur-mesure bleu nuit profond, touches cuivrées en contre-jour et élimination totale de l'esthétique 'commerciale' standard.",
    quote: "Le tunnel du stade est devenu le défilé le plus scruté de la planète sport.",
    client: 'Athlète International (Top 5 Européen)',
    services: [
      "Direction Artistique Complète",
      "Stylisme & Curation Vestiaire d'Avant-Match",
      "Shooting Éditorial 35mm",
      "Harmonisation Feed & Image Réseaux"
    ],
    palette: ['#070B14', '#0B1220', '#C9937E', '#F8F6F0'],
    metrics: [
      { label: "Engagement Feed Post-Lancement", value: "+310%" },
      { label: "Contrats Marque Luxe Signés", value: "3 Partenariats" }
    ]
  },
  {
    id: 'maison-kallos',
    number: '02',
    title: 'MAISON KALLOS',
    subtitle: 'Direction Artistique Hospitality, Hôtel & Architecture',
    category: 'brands',
    universeLabel: 'BRANDS • HOSPITALITY DE PRESTIGE',
    year: '2025',
    heroImage: '/src/assets/images/sf_brands_hospitality_1788627098408.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop',
    afterImage: '/src/assets/images/sf_brands_hospitality_1788627098408.jpg',
    brief:
      "Concevoir l'univers visuel et l'expérience tactile d'un hôtel particulier confidentiel à Genève : identité, papeterie, menus cuir et signalétique cuivre rosé.",
    direction:
      "Harmonie entre le bleu nuit des tissus sur-mesure, le marbre travertin crème et les finitions cuivrées brossées inspirées des symboles SAYA FORM.",
    quote: "L'hospitalité contemporaine n'est plus une question de dorures, mais de retenue et de tension géométrique.",
    client: 'Groupe Hôtelier Privé Kallos',
    services: [
      "Identité Visuelle & Monogramme",
      "Packaging Cuir & Gaufrage Rose Gold",
      "Direction de la Photographie In Situ",
      "Curation de la Musique & Atmosphère"
    ],
    palette: ['#0A0F1D', '#C9937E', '#E8B29F', '#F4EFE6'],
    metrics: [
      { label: "Couverture Presse Magazine Déco", value: "14 Parutions" },
      { label: "Taux de Remplissage Dès l'Ouverture", value: "100%" }
    ]
  },
  {
    id: 'dynastie-football',
    number: '03',
    title: 'DYNASTIE VELOURS',
    subtitle: 'Campagne Éditoriale, Lifestyle & Image Personnelle',
    category: 'athletes',
    universeLabel: 'ATHLETES • IMAGE DE MARQUE',
    year: '2026',
    heroImage: '/src/assets/images/sf_athletes_cinematic_1788627081394.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521967906867-14ec9d64bee8?q=80&w=1400&auto=format&fit=crop'
    ],
    brief:
      "Créer un récit visuel puissant autour d'un capitaine de sélection : rupture avec les clichés du joueur survêtement fluo au profit d'un vestiaire sculptural et introspectif.",
    direction:
      "Éclairages sombres sculptés au millimètre, poses architecturales, textures de velours et touches métalliques discrètes.",
    quote: "La véritable stature ne crie pas. Elle impose le silence dans la pièce.",
    client: 'Capitaine de Sélection Internationale',
    services: [
      "Stratégie de Perception Médiatique",
      "Édition d'un Lookbook Privé",
      "Curation Storytelling Instagram",
      "Charte Graphique de Prises de Parole"
    ],
    palette: ['#060A14', '#152138', '#C9937E', '#F8F6F0'],
    metrics: [
      { label: "Valorisation Sponsoring Personnel", value: "+45%" },
      { label: "Partages Organiques Médias", value: "1.8M" }
    ]
  },
  {
    id: 'le-grand-pavillon',
    number: '04',
    title: 'LE GRAND PAVILLON',
    subtitle: 'Branding Haute Gastronomie & Scénographie de Table',
    category: 'brands',
    universeLabel: 'BRANDS • GASTRONOMIE ÉTOILÉE',
    year: '2025',
    heroImage: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1400&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop'
    ],
    brief:
      "Refonte de l'identité d'un restaurant gastronomique parisien doublement étoilé pour séduire une clientèle internationale plus jeune et esthète.",
    direction:
      "Papiers de création ivoire texturé, dorure à chaud cuivre rosé, typographie serif fine et univers photographique clair-obscur.",
    quote: "Chaque détail du menu doit être ressenti comme un objet de collection.",
    client: 'Chef Propriétaire & Associés',
    services: [
      "Direction de Marque",
      "Édition des Menus Cuir Végétal",
      "Direction Visuelle Digitale & Print",
      "Shooting Culinaire Éditorial"
    ],
    palette: ['#0B1220', '#C9937E', '#EFE9DF', '#FFFFFF'],
    metrics: [
      { label: "Réservations VIP Directes", value: "+84%" }
    ]
  }
];

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: 'access',
    name: 'SAYA FORM ACCESS',
    code: 'ACCESS PASS',
    price: 365,
    cadence: '€ / an',
    memberIdPrefix: 'SF-ACC-2026',
    description:
      "Le passeport d'entrée dans l'écosystème créatif SAYA FORM. Conçu pour les athlètes émergents et créateurs de marques en phase d'affirmation.",
    features: [
      "Audit semestriel de perception & identité digitale",
      "Accès à la bibliothèque de codes visuels & moodboards SAYA FORM",
      "Invitation aux masterclasses privées Direction Artistique",
      "Hotline conseil réactif (validation tenues, shoots & posts clés)",
      "Carte membre physique en aluminium brossé gravée au laser"
    ],
    cardMaterial: 'Bleu Nuit Profond & Liséré Rose Gold',
    badge: 'MEMBRE OFFICIEL',
  },
  {
    id: 'signature',
    name: 'SAYA FORM SIGNATURE',
    code: 'SIGNATURE PASS',
    price: 550,
    cadence: '€ / an',
    memberIdPrefix: 'SF-SIG-2026',
    description:
      "La formule de référence pour ceux dont l'image est un levier d'influence majeur. Direction proactive, curation sur-mesure et accès prioritaire.",
    features: [
      "Direction artistique continue pour vos apparitions publiques & tunnels",
      "Curation complète du feed Instagram (rythme, tonalité, cadrage)",
      "Shooting éditorial annuel encadré par notre direction photo",
      "Mise en relation avec notre réseau de marques de luxe partenaires",
      "Pass Signature avec accès direct à notre directeur créatif"
    ],
    cardMaterial: 'Cuivre Rosé Métallique & Gravure Profonde',
    badge: 'LE CHOIX D’ÉLITE',
    limitedSpots: 'Limité à 50 membres par an'
  },
  {
    id: 'private',
    name: 'SAYA FORM PRIVATE',
    code: 'PRIVATE BLACK PASS',
    price: 750,
    cadence: '€ / an',
    memberIdPrefix: 'SF-PRV-2026',
    description:
      "Le cercle le plus exclusif de la maison. Accompagnement sur-mesure haute couture pour athlètes de premier plan et marques de prestige.",
    features: [
      "Prise en charge intégrale de l'architecture d'image & branding",
      "Direction créative sur site lors des matches clés & lancements",
      "Création de votre monogramme & univers graphique personnel déposé",
      "Gestion & négociation stylistique des contrats avec les maisons de mode",
      "Carte membre Private taillée dans un bloc de titane cuivré",
      "Ligne privée confidentielle 24/7"
    ],
    cardMaterial: 'Titane Cuivré & Finition Miroir Bleu Nuit',
    badge: 'CERCLE FERMÉ',
    limitedSpots: 'Accès uniquement sur cooptation ou dossier'
  }
];

export const INSTAGRAM_FEED: InstagramFeedItem[] = [
  {
    id: 'ig-1',
    type: 'image',
    image: '/src/assets/images/sf_hero_campaign_1788627055331.jpg',
    caption: 'Tunnel walk. Silence. The tailoring speaks before the game begins. #SayaForm #Athletes',
    likes: '14.2k',
    category: 'ATHLETES'
  },
  {
    id: 'ig-2',
    type: 'monogram',
    caption: 'Official Monogram. The interlocking SF in brushed rose gold over midnight midnight. #SayaFormIdentity',
    likes: '9.8k',
    category: 'IDENTITY'
  },
  {
    id: 'ig-3',
    type: 'image',
    image: '/src/assets/images/sf_brands_hospitality_1788627098408.jpg',
    caption: 'Hospitality as an editorial narrative. Midnight velvet and rose copper details. #CreativeDirection',
    likes: '11.5k',
    category: 'BRANDS'
  },
  {
    id: 'ig-4',
    type: 'quote',
    caption: '“We do not capture sports. We direct power and presence.” — SAYA FORM MANIFESTO',
    likes: '18.4k',
    category: 'EDITORIAL'
  },
  {
    id: 'ig-5',
    type: 'symbol',
    caption: 'Signature Highlights Emblem. Two curved leaves in perpetual dialogue. #SayaFormSymbol',
    likes: '12.1k',
    category: 'SIGNATURE'
  },
  {
    id: 'ig-6',
    type: 'image',
    image: '/src/assets/images/sf_athletes_cinematic_1788627081394.jpg',
    caption: 'Introspection in the locker room. Contrast, composure, cinematic light. #Athletes',
    likes: '16.7k',
    category: 'ATHLETES'
  },
  {
    id: 'ig-7',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop',
    caption: 'Stadium lights meeting tailored silhouettes. The new standard. #SayaFormDirection',
    likes: '10.3k',
    category: 'STADIUM'
  },
  {
    id: 'ig-8',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop',
    caption: 'Brushed metal, ivory limestone and midnight darkness. Textures that endure. #Craftsmanship',
    likes: '8.9k',
    category: 'MATERIAL'
  },
  {
    id: 'ig-9',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1000&auto=format&fit=crop',
    caption: 'Behind the lens. Crafting the next international campaign. #CreativeStudio',
    likes: '15.9k',
    category: 'BACKSTAGE'
  }
];
