export type DietaryTag =
  | 'Bestseller'
  | 'Regenerative Organic'
  | 'Single-Origin'
  | 'Vegan'
  | 'Veg'
  | 'Gluten-Free'
  | 'Award-Winner'
  | 'Limited Batch';

export type MenuCategory =
  | 'All'
  | 'Specialty Brews'
  | 'Bites & Plates'
  | 'Retail & Gear'
  | 'Cold Brews & Refreshers'
  | 'Artisanal Bakes';

export interface MenuItem {
  id: string;
  name: string;
  category: Exclude<MenuCategory, 'All'>;
  price: number; // in ₹ INR
  description: string;
  origin?: string;
  tags: DietaryTag[];
  rating: number; // e.g. 4.9
  reviewCount: number;
  emoji: string;
  ingredients: string[];
  allergens: string[];
  calories: string;
  prepTime: string;
  tastingNotes?: string[];
  imagePlaceholderColor?: string;
  sku?: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  customization?: string;
}

export interface ReservationData {
  name: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference:
    | 'Modbar Sensory Counter'
    | 'Oak Timber Salon'
    | 'Bandra Verandah'
    | 'Roastery Cupping Table'
    | 'Any Available';
  specialRequests?: string;
}
