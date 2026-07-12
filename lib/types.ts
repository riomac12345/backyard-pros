export type Product = {
  id: string;
  category: string;
  name: string;
  price: number;
  original_price: number | null;
  description: string | null;
  in_stock: boolean;
  images: string[];
  attributes: Record<string, string>;
  sort_order: number;
  created_at: string;
  updated_at: string;
};

export type AboutContent = {
  id: number;
  intro_text: string;
  story_text: string;
  photo_url: string | null;
  updated_at: string;
};
