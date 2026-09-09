export interface HairService {
  id: string;
  name: string;
  arabicName?: string;
  category: 'cut' | 'color' | 'ritual' | 'extensions' | 'bridal';
  duration: string;
  priceAED: number;
  popular?: boolean;
  tag?: string;
  description: string;
  includes: string[];
}

export interface Stylist {
  id: string;
  name: string;
  title: string;
  experienceYears: number;
  origin: string;
  specialty: string;
  bio: string;
  avatar: string;
  languages: string[];
  instagram: string;
}

export interface TransformationItem {
  id: string;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  stylistName: string;
  duration: string;
  serviceUsed: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  district: string;
  rating: number;
  service: string;
  comment: string;
  date: string;
  verified: boolean;
}

export interface BookingState {
  serviceId: string;
  stylistId: string;
  date: string;
  timeSlot: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  vipSuite: boolean;
  notes: string;
}
