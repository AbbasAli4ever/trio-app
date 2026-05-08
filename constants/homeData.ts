export const HERO = {
  backgroundImage: 'https://c.animaapp.com/6tGBECKN/img/hero-section.png',
  welcomeText: 'Welcome to',
  title: 'TRIO by Maham',
  tagline: 'Dining · Bouquets · Cinema · Decor · Hi-Tea · Activities\nAll Under One Roof.',
};

export const NAV_OPTIONS = [
  { id: 'home', label: 'Home', active: true, imageSrc: null },
  {
    id: 'dining',
    label: 'Dining',
    active: false,
    imageSrc: 'https://c.animaapp.com/6tGBECKN/img/image-2@2x.png',
  },
  {
    id: 'drinks',
    label: 'Drinks',
    active: false,
    imageSrc: 'https://c.animaapp.com/6tGBECKN/img/image-2-1@2x.png',
  },
  {
    id: 'flowers',
    label: 'Flowers',
    active: false,
    imageSrc: 'https://c.animaapp.com/6tGBECKN/img/image-2-2@2x.png',
  },
  {
    id: 'cinema',
    label: 'Cinema',
    active: false,
    imageSrc: 'https://c.animaapp.com/6tGBECKN/img/image-2-3@2x.png',
  },
  {
    id: 'hi-tea',
    label: 'Hi-tea',
    active: false,
    imageSrc: 'https://c.animaapp.com/6tGBECKN/img/image-2-4@2x.png',
  },
  {
    id: 'dundles',
    label: 'Dundles',
    active: false,
    imageSrc: 'https://c.animaapp.com/6tGBECKN/img/image-2-5@2x.png',
  },
];

export const SPECIAL_DAYS = [
  { id: 'birthday', title: 'Birthday', image: 'https://c.animaapp.com/6tGBECKN/img/birhtday-2-1@2x.png' },
  { id: 'anniversary', title: 'Anniversary', image: 'https://c.animaapp.com/6tGBECKN/img/birhtday-2@2x.png' },
  { id: 'date-night', title: 'Date Night', image: 'https://c.animaapp.com/6tGBECKN/img/birhtday-1@2x.png' },
  { id: 'bridal-shower', title: 'Bridal Shower', image: 'https://c.animaapp.com/6tGBECKN/img/birhtday-1-1@2x.png' },
  { id: 'friends-date', title: 'Friends Date', image: 'https://c.animaapp.com/6tGBECKN/img/birhtday-1-2@2x.png' },
  { id: 'small-event', title: 'Small Event', image: 'https://c.animaapp.com/6tGBECKN/img/birhtday-1-3@2x.png' },
];

export type SmartBundle = {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  originalPrice: string;
  image: string;
  headerBg: string;
  bodyBg: string;
  badgeBg: string;
  badgeText: string;
  featureColor: string;
  buttonBg: string;
  buttonGradient: [string, string] | null;
};

export const SMART_BUNDLES: SmartBundle[] = [
  {
    id: 'hitea',
    title: 'Hi-Tea for Two + Bouquet',
    description: 'Hi-tea For Two (with The Robot Cake-trolley) + a Books & Roses Bouquet To Take Home.',
    features: ['Books & Roses', 'Books & Roses'],
    price: 'Rs 10,350',
    originalPrice: 'Rs 11,499',
    image: 'https://c.animaapp.com/6tGBECKN/img/rectangle-1@2x.png',
    headerBg: '#e1d5f5',
    bodyBg: '#e1d5f5',
    badgeBg: '#cfb9ff',
    badgeText: '#775596',
    featureColor: '#775596',
    buttonBg: '#775596',
    buttonGradient: null,
  },
  {
    id: 'cinema',
    title: 'Cinema Date',
    description: 'Two Cinema Seats, One Shareable Plate, two Mocktails.',
    features: ['2 Cinema seats', 'Cheese Board', '2 Lavender Lemonades'],
    price: 'Ask staff',
    originalPrice: '',
    image: 'https://c.animaapp.com/6tGBECKN/img/rectangle-1-1@2x.png',
    headerBg: '#ffdfea',
    bodyBg: '#ffdfea',
    badgeBg: 'rgba(233,20,93,0.15)',
    badgeText: '#e9145d',
    featureColor: '#e9145d',
    buttonBg: '#e9145d',
    buttonGradient: null,
  },
  {
    id: 'birthday',
    title: 'Birthday Bundle',
    description: 'Pink Full Decor + Strawberry Bouquet + Cake on The Robot Trolley + Cinema Slot.',
    features: ['Pink Full decor (Rs 10,000)', 'Strawberry Bouquet', 'Robot cake delivery', 'Cinema slot'],
    price: 'Rs 14,800',
    originalPrice: 'Rs 18,500',
    image: 'https://c.animaapp.com/6tGBECKN/img/rectangle-1-2@2x.png',
    headerBg: '#fbe6d4',
    bodyBg: '#fce6d4',
    badgeBg: 'rgba(254,86,15,0.22)',
    badgeText: '#fd4b00',
    featureColor: '#fe560f',
    buttonBg: '#fd4b00',
    buttonGradient: ['#fd4b00', '#fe7840'],
  },
];

export const BROWSE_CARDS = [
  {
    id: 'dining',
    title: 'Dining',
    subtitle: 'SALADS TO SEA FOOD',
    backgroundImage: 'https://c.animaapp.com/6tGBECKN/img/frame-19@2x.png',
  },
  {
    id: 'beverages',
    title: 'Beverages',
    subtitle: 'COFFEE · MOCKTAILS · TEA',
    backgroundImage: 'https://c.animaapp.com/6tGBECKN/img/frame-19-1@2x.png',
  },
  {
    id: 'flowers',
    title: 'Flowers',
    subtitle: 'HAND-TIED BOUQUETS',
    backgroundImage: 'https://c.animaapp.com/6tGBECKN/img/frame-20@2x.png',
  },
  {
    id: 'cinema',
    title: 'Cinema',
    subtitle: 'MOVIES · SCREENINGS',
    backgroundImage: 'https://c.animaapp.com/6tGBECKN/img/frame-19@2x.png',
  },
  {
    id: 'hi-tea',
    title: 'Hi-Tea',
    subtitle: 'CAKES · PASTRIES · TEA',
    backgroundImage: 'https://c.animaapp.com/6tGBECKN/img/frame-19-1@2x.png',
  },
];

export const CTA_SPIN = {
  image: 'https://c.animaapp.com/6tGBECKN/img/magnific-create-a-3d-restaurant-sp-2916037334-2@2x.png',
  tagline: "Can't decide?",
  title: 'Spin To Find Out',
  subtitle: "We'll pick something perfect.",
};

export const CTA_BOUQUET = {
  image: 'https://c.animaapp.com/6tGBECKN/img/magnific-a-bouquet-of-pink-and-pea-2915419402-1@2x.png',
  title: 'Build your own bouquet',
  subtitle: 'Pick the stems, the wrap, the ribbon — done in 90 seconds.',
};
