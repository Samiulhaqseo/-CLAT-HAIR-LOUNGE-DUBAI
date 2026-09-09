import { HairService, Stylist, TransformationItem, Testimonial } from '../types';

export const SALON_SERVICES: HairService[] = [
  {
    id: 'bespoke-couture-cut',
    name: 'Bespoke Haute Cut & Blowout',
    arabicName: 'قص وتصفيف الشعر الفاخر',
    category: 'cut',
    duration: '60 min',
    priceAED: 450,
    popular: true,
    tag: 'Signature',
    description: 'Face-framing diagnostic, custom dry-cutting or precision wet geometry, followed by our signature red-carpet volume blowout.',
    includes: ['Scalp detox wash with filtered RO water', 'Customized Kérastase deep moisture bath', 'Precision artisan cut & personalized style finish']
  },
  {
    id: 'french-signature-balayage',
    name: 'Signature French Balayage & Gloss',
    arabicName: 'بالياج فرنسي مع تلميع ولمعان',
    category: 'color',
    duration: '180 min',
    priceAED: 1100,
    popular: true,
    tag: 'Most Requested',
    description: 'Hand-painted sun-kissed dimension customized to your complexion, topped with an acidic liquid glass toner for mirror shine.',
    includes: ['Colorist chromatic consultation', 'Bond-protecting lightening system (Olaplex N°1 & N°2)', 'Custom acidic gloss toner', 'Hydrating blow-dry & styling']
  },
  {
    id: 'dubai-sun-bleach-toner',
    name: 'Full Platinum or Sun Blonde Transformation',
    arabicName: 'تحول بلاتيني كامل وحماية الألياف',
    category: 'color',
    duration: '210 min',
    priceAED: 1450,
    popular: false,
    tag: 'High Impact',
    description: 'Root-to-tip seamless lightening tailored to desert light, neutralizing brassiness and preserving tensile hair strength.',
    includes: ['Fiber resilience pretreatment', 'Multi-zone lightening', 'Custom double-toning ritual', 'Post-color sealing mask']
  },
  {
    id: 'brazilian-botoplex-smoothing',
    name: 'Botoplex Nano-Keratin Anti-Humidity Ritual',
    arabicName: 'علاج بوتوبلكس نانو كيراتين المقاوم للرطوبة',
    category: 'ritual',
    duration: '150 min',
    priceAED: 1350,
    popular: true,
    tag: 'Dubai Weather Essential',
    description: 'Formulated specifically for Gulf high-humidity climates. Eliminates frizz 100%, seals the cuticle, and retains natural wave or sleek straightness for 4-5 months.',
    includes: ['Formaldehyde-free organic formula', 'Deep cortex reconstruction', 'Thermo-activated silk seal', 'Home care guidance & travel travel serum']
  },
  {
    id: 'gold-caviar-spa',
    name: '24K Gold & Black Caviar Scalp Spa Ritual',
    arabicName: 'طقس السبا الفاخر بالذهب عيار 24 والكافيار الأسود',
    category: 'ritual',
    duration: '75 min',
    priceAED: 650,
    popular: false,
    tag: 'Pure Luxury',
    description: 'Deep micro-mist exfoliation, 24K colloidal gold scalp infusion, and cold-pressed bio-caviar mask to repair damage from hard water and UV sun exposure.',
    includes: ['Aromatherapy shiatsu scalp massage', 'Micro-mist ultrasonic infusion chamber', 'Cold jade comb circulation treatment', 'Velvet finishing blow-dry']
  },
  {
    id: 'invisible-russian-extensions',
    name: 'Invisible Seamless Russian Hair Extensions',
    arabicName: 'وصلات شعر روسية طبيعية غير مرئية',
    category: 'extensions',
    duration: '180 min',
    priceAED: 2400,
    popular: true,
    tag: 'Couture Volume',
    description: '100% ethically sourced virgin Slavic hair applied with micro-nano bond or invisible tape methods that lie completely flat against the scalp.',
    includes: ['Complimentary shade matching & density test', '100g premium virgin hair installation', 'Custom blending haircut & hot tool styling']
  },
  {
    id: 'vip-royal-bridal-package',
    name: 'The Royal Dubai Bridal Suite & Styling',
    arabicName: 'باقة العروس الملكية وجناح كبار الشخصيات',
    category: 'bridal',
    duration: '240 min',
    priceAED: 3200,
    popular: false,
    tag: 'VIP Suite',
    description: 'Exclusive private suite booking for the bride. Comprehensive trial, day-of architectural updo or glamorous Hollywood waves, veil/tiara placement, and champagne service.',
    includes: ['Private VIP suite with separate dressing room', 'Full preview rehearsal session', 'Day-of haute couture hairstyle & veil anchoring', 'Complimentary artisanal catering & luxury gift box']
  },
  {
    id: 'gloss-hydration-refresh',
    name: 'Cellular Hydration & Mirror Gloss Flash',
    arabicName: 'علاج الترطيب الخلوي ولمعان المرآة السريع',
    category: 'ritual',
    duration: '45 min',
    priceAED: 350,
    popular: false,
    tag: 'Express Glam',
    description: 'Quick pick-me-up between color services. Recharges moisture balance and seals color vibrancy with instantaneous glass-like reflection.',
    includes: ['Chelating wash to remove chlorine and minerals', 'pH balanced shine glaze', 'Signature express blowout']
  }
];

export const STYLISTS: Stylist[] = [
  {
    id: 'camille-laurent',
    name: 'Camille Laurent',
    title: 'Creative Artistic Director & Master Colorist',
    experienceYears: 14,
    origin: 'Paris, France',
    specialty: 'Balayage Français, Dimensional Blonding, Precision Bob Geometry',
    bio: 'Trained at Haute Coiffure Française in Paris. Styled runway shows across Paris and Milan before bringing Parisian effortlessly chic balayage to Dubai.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    languages: ['English', 'Français'],
    instagram: '@camille.haute'
  },
  {
    id: 'tariq-al-mansoor',
    name: 'Tariq Mansoor',
    title: 'Senior Hair Architect & VIP Stylist',
    experienceYears: 12,
    origin: 'Beirut / Dubai',
    specialty: 'Hollywood Glamour Waves, Royal Bridal Styling, Volume Transformations',
    bio: 'Recognized as one of the GCC’s premier bridal and red-carpet specialists, creating showstopping movement and enduring glam for Dubai high society.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    languages: ['Arabic', 'English'],
    instagram: '@tariq.mansoor.hair'
  },
  {
    id: 'elena-novikova',
    name: 'Elena Novikova',
    title: 'Lead Extension & Texture Specialist',
    experienceYears: 9,
    origin: 'Moscow / London',
    specialty: 'Invisible Nano-Bonds, Slavic Hair Extensions, Botoplex Smoothing',
    bio: 'Certified trichology consultant dedicated to seamless extensions and rehabilitative treatments that withstand the intense Dubai summer climate.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    languages: ['English', 'Russian'],
    instagram: '@elena.hairarchitect'
  }
];

export const TRANSFORMATIONS: TransformationItem[] = [
  {
    id: 'tr-1',
    title: 'Champagne Honey Balayage & Face Frame',
    category: 'Balayage',
    beforeImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
    stylistName: 'Camille Laurent',
    duration: '3.5 hours',
    serviceUsed: 'Signature French Balayage + Acidic Glass Gloss',
    description: 'Lifted heavy brassy undertones into seamless sunlit beige and champagne threads with bespoke shadow roots for zero-maintenance grow-out.'
  },
  {
    id: 'tr-2',
    title: 'Anti-Humidity Botoplex Silk Glass Reborn',
    category: 'Keratin & Rituals',
    beforeImage: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
    stylistName: 'Elena Novikova',
    duration: '2.5 hours',
    serviceUsed: 'Botoplex Nano-Keratin Anti-Humidity',
    description: 'Rescued heat-damaged frizz from Dubai water and sea air into liquid glass silkiness with zero flat iron burn and 100% natural movement.'
  },
  {
    id: 'tr-3',
    title: 'Couture 22-Inch Slavic Hair Volume Makeover',
    category: 'Extensions',
    beforeImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    stylistName: 'Tariq Mansoor',
    duration: '4 hours',
    serviceUsed: 'Invisible Seamless Russian Extensions',
    description: 'Added 120 grams of hand-selected virgin Slavic hair with invisible micro-bonds for an undetectable, voluminous celebrity finish.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Sheikha Noor Al Qasimi',
    district: 'Jumeirah 1, Dubai',
    rating: 5,
    service: 'VIP Private Suite & Balayage',
    comment: 'The private VIP suite offers the absolute utmost privacy, discretion, and peaceful luxury. Camille is an artist who understands how to treat fine hair in Dubai weather.',
    date: '2 days ago',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Dr. Charlotte Davies',
    district: 'Downtown Dubai (The Address)',
    rating: 5,
    service: 'Botoplex Smoothing & Haute Cut',
    comment: 'Living opposite Dubai Mall, I’ve tried four other high-end salons in Downtown. Éclat’s reverse-osmosis purified water hair wash makes all the difference! My hair hasn’t felt this soft in years.',
    date: '1 week ago',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Yara El-Hage',
    district: 'DIFC, Dubai',
    rating: 5,
    service: 'Hollywood Glamour Waves & Gloss',
    comment: 'Booked Tariq for an Emirates Woman Gala styling. The waves stayed impeccably crisp all evening without any stiffness. The matcha and dates in the lounge were delightful.',
    date: '2 weeks ago',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Victoria Lindqvist',
    district: 'Palm Jumeirah',
    rating: 5,
    service: 'Invisible Russian Extensions',
    comment: 'The match on my Scandinavian ash blonde was 100% flawless. Completely invisible even when I tie high ponytails at Pilates. Worth every single dirham.',
    date: '3 weeks ago',
    verified: true
  }
];

export const SALON_AMENITIES = [
  {
    title: 'Purified RO Water System',
    description: 'Every wash basin is powered by hospital-grade 7-stage reverse osmosis filtration to neutralize harsh desalinated minerals and chlorine.',
    icon: 'Droplets'
  },
  {
    title: 'Private VIP Suites',
    description: 'Dedicated secluded suites featuring private entrances and separate wash stations, ideal for veil wearers and discreet celebrity clients.',
    icon: 'Lock'
  },
  {
    title: 'Complimentary Valet Parking',
    description: 'Direct valet drop-off at Boulevard Point Tower Entrance P1 with effortless access and dedicated salon concierge greeters.',
    icon: 'Car'
  },
  {
    title: 'Artisanal Beverage Lounge',
    description: 'Enjoy ceremonial grade Uji matcha, espresso by Dubai roasters, fresh organic cold juices, and royal Medjool dates with our compliments.',
    icon: 'Coffee'
  },
  {
    title: 'Certified Clean Formulas',
    description: 'Strictly cruelty-free, vegan-conscious formulations free of parabens, phthalates, and formaldehyde, safe for sensitive scalps.',
    icon: 'Sparkles'
  },
  {
    title: 'Multilingual Master Team',
    description: 'Consultations conducted comfortably in English, Arabic, French, and Russian by European-trained senior artists.',
    icon: 'Globe'
  }
];
