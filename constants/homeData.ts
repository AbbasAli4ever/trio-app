import type { ImageSourcePropType } from 'react-native';

export const HERO = {
  backgroundImage: require('@/public/home/HS.png') as ImageSourcePropType,
  welcomeText: 'Welcome to',
  title: 'TRIO by Maham',
  tagline: 'Dining · Bouquets · Cinema · Decor · Hi-Tea · Activities\nAll Under One Roof.',
};

export const NAV_OPTIONS = [
  { id: 'home', label: 'Home', active: true, imageSrc: null as ImageSourcePropType | null },
  { id: 'dining', label: 'Dining', active: false, imageSrc: require('@/public/navbar/dining.png') as ImageSourcePropType },
  { id: 'drinks', label: 'Drinks', active: false, imageSrc: require('@/public/navbar/drinks.png') as ImageSourcePropType },
  { id: 'flowers', label: 'Flowers', active: false, imageSrc: require('@/public/navbar/flowers.png') as ImageSourcePropType },
  { id: 'cinema', label: 'Cinema', active: false, imageSrc: require('@/public/navbar/popcorn.png') as ImageSourcePropType },
  { id: 'hi-tea', label: 'Hi-tea', active: false, imageSrc: require('@/public/navbar/beverages.png') as ImageSourcePropType },
  { id: 'bundles', label: 'Bundles', active: false, imageSrc: require('@/public/navbar/bundles.png') as ImageSourcePropType },
];

export const SPECIAL_DAYS = [
  { id: 'birthday', title: 'Birthday', image: require('@/public/home/birthday.png') as ImageSourcePropType },
  { id: 'anniversary', title: 'Anniversary', image: require('@/public/home/aniversary.png') as ImageSourcePropType },
  { id: 'date-night', title: 'Date Night', image: require('@/public/home/datenight.png') as ImageSourcePropType },
  { id: 'bridal-shower', title: 'Bridal Shower', image: require('@/public/home/shower.png') as ImageSourcePropType },
  { id: 'friends-date', title: 'Friends Date', image: require('@/public/home/FriendsDate.png') as ImageSourcePropType },
  { id: 'small-event', title: 'Small Event', image: require('@/public/home/SmallEvent.png') as ImageSourcePropType },
];

export type SmartBundle = {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  originalPrice: string;
  image: ImageSourcePropType;
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
    image: require('@/public/home/breakfast.png') as ImageSourcePropType,
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
    image: require('@/public/home/popcorn.png') as ImageSourcePropType,
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
    image: require('@/public/home/cake.png') as ImageSourcePropType,
    headerBg: '#fbe6d4',
    bodyBg: '#fce6d4',
    badgeBg: 'rgba(254,86,15,0.22)',
    badgeText: '#fd4b00',
    featureColor: '#fe560f',
    buttonBg: '#fd4b00',
    buttonGradient: ['#fd4b00', '#fe7840'],
  },
];

export type BundleCard = {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  originalPrice: string;
  image: ImageSourcePropType;
};

export const PRECURATED_BUNDLES: BundleCard[] = [
  {
    id: 'hitea',
    title: 'Hi-Tea for Two + Bouquet',
    description: 'Hi-Tea For Two (With The Robot Cake-Trolley) + A Books & Roses Bouquet To Take Home.',
    features: ['Hi-Tea for 2', 'Books & Roses'],
    price: 'Rs 10,350',
    originalPrice: 'Rs 11,499',
    image: require('@/public/smart-bundles/card1.png'),
  },
  {
    id: 'cinema',
    title: 'Cinema Date',
    description: 'Two Cinema Seats, One Shareable Plate, Two Mocktails.',
    features: ['2 Cinema seats', 'Cheese Board', '2 Lavender Lemonades'],
    price: 'Rs 10,350',
    originalPrice: 'Rs 11,499',
    image: require('@/public/smart-bundles/card2.png'),
  },
  {
    id: 'birthday',
    title: 'Birthday Bundle',
    description: 'Pink Full Decor + Strawberry Bouquet + Cake On The Robot Trolley + Cinema Slot.',
    features: ['Pink Full decor (Rs 10,000)', 'Strawberry Bouquet'],
    price: 'Rs 10,350',
    originalPrice: 'Rs 11,499',
    image: require('@/public/smart-bundles/card3.png'),
  },
  {
    id: 'make-it-a-date',
    title: 'Make-It-A-Date',
    description: 'Red Decor — Classic + Hi-Tea For Two With The Robot Trolley.',
    features: ['Red Classic decor (Rs 5,000)', 'Hi-Tea for 2'],
    price: 'Rs 10,350',
    originalPrice: 'Rs 11,499',
    image: require('@/public/smart-bundles/card4.png'),
  },
];

export const BROWSE_CARDS = [
  { id: 'dining', title: 'Dining', subtitle: 'SALADS TO SEA FOOD', backgroundImage: require('@/public/home/dining.png') as ImageSourcePropType },
  { id: 'beverages', title: 'Beverages', subtitle: 'COFFEE · MOCKTAILS · TEA', backgroundImage: require('@/public/home/beverages.png') as ImageSourcePropType },
  { id: 'flowers', title: 'Flowers', subtitle: 'HAND-TIED BOUQUETS', backgroundImage: require('@/public/home/flowers.png') as ImageSourcePropType },
  { id: 'cinema', title: 'Cinema', subtitle: 'MOVIES · SCREENINGS', backgroundImage: require('@/public/home/cinema.png') as ImageSourcePropType },
  { id: 'decor', title: 'Decor', subtitle: 'TABLE · ROOM · BALLOON', backgroundImage: require('@/public/home/decor.png') as ImageSourcePropType },
  { id: 'hi-tea', title: 'Hi-Tea', subtitle: 'CAKES · PASTRIES · TEA', backgroundImage: require('@/public/home/hitea.png') as ImageSourcePropType },
];

export const CTA_SPIN = {
  image: require('@/public/home/spin.png') as ImageSourcePropType,
  tagline: "Can't decide?",
  title: 'Spin To Find Out',
  subtitle: "We'll pick something perfect.",
};

export const CTA_BOUQUET = {
  image: require('@/public/home/bouquet.png') as ImageSourcePropType,
  title: 'Build your own bouquet',
  subtitle: 'Pick the stems, the wrap, the ribbon — done in 90 seconds.',
};
