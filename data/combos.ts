export type Combo = {
  id: string;
  name: string;
  description: string;
  price: number;
  saving: number;
  image: string;
};

export const combos: Combo[] = [
  {
    id: "signature",
    name: "Signature",
    description: "Perfume + Body Lotion",
    price: 37500,
    saving: 7500,
    image:
      "https://images.unsplash.com/photo-1556229010-aa3f7ff66e2c?w=900&h=1100&fit=crop",
  },
  {
    id: "beauty-ritual",
    name: "Beauty Ritual",
    description: "Perfume + Body Mist + Crema",
    price: 42500,
    saving: 8500,
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=900&h=1100&fit=crop",
  },
  {
    id: "hair-care",
    name: "Hair Care",
    description: "Shampoo + Tratamiento + Serum",
    price: 29900,
    saving: 5000,
    image:
      "https://images.unsplash.com/photo-1527799820374-dcf8f2d8e2a9?w=900&h=1100&fit=crop",
  },
];