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
