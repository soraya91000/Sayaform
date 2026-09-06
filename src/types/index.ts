export type UniverseType = 'all' | 'athletes' | 'brands';

export interface ProjectCaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'athletes' | 'brands';
  universeLabel: string;
  year: string;
  heroImage: string;
  galleryImages: string[];
  beforeImage?: string;
  afterImage?: string;
  brief: string;
  direction: string;
  quote: string;
  client: string;
  services: string[];
  palette: string[];
  metrics?: { label: string; value: string }[];
}

export interface MembershipTier {
  id: string;
  name: string;
  code: string;
  price: number;
  cadence: string;
  memberIdPrefix: string;
  description: string;
  features: string[];
  cardMaterial: string;
  badge: string;
  limitedSpots?: string;
}

export interface InstagramFeedItem {
  id: string;
  type: 'image' | 'quote' | 'detail' | 'monogram' | 'symbol';
  image?: string;
  caption: string;
  likes: string;
  category: string;
  aspectRatio?: string;
}
