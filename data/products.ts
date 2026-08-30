export type Availability = "inmediata" | "pedido" | "agotado";

export type Product = {
  id: string;
  brand: string;
  name: string;
  type: string;
  gender: "Mujer" | "Hombre" | "Unisex";
  size: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  availability: Availability;
  badge?: "Oferta" | "Nuevo";
  image: string;
  notes: string[];
  description: string;
};

export const products: Product[] = [
  {
    id: "bleu-de-chanel",
    brand: "Chanel",
    name: "Bleu de Chanel",
    type: "Eau de Parfum",
    gender: "Unisex",
    size: "100 ml",
    price: 38500,
    availability: "inmediata",
    image:
      "https://images.unsplash.com/photo-1761329842950-f3551938e4da?w=800&h=1000&fit=crop",
    notes: ["Bergamota", "Cedro", "Almizcle"],
    description:
      "Una fragancia maderosa aromática, sofisticada y moderna.",
  },
  {
    id: "la-vie-est-belle",
    brand: "Lancôme",
    name: "La Vie Est Belle",
    type: "Eau de Parfum",
    gender: "Mujer",
    size: "75 ml",
    price: 36000,
    oldPrice: 42000,
    discount: 14,
    availability: "inmediata",
    badge: "Oferta",
    image:
      "https://images.unsplash.com/photo-1590156220728-bea5ba090f82?w=800&h=1000&fit=crop",
    notes: ["Iris", "Pralinée", "Vainilla"],
    description:
      "Una fragancia floral gourmand de larga duración.",
  },
  {
    id: "sauvage",
    brand: "Dior",
    name: "Sauvage",
    type: "Eau de Toilette",
    gender: "Hombre",
    size: "100 ml",
    price: 36500,
    availability: "inmediata",
    image:
      "https://images.unsplash.com/photo-1680503504148-25f2d178ff05?w=800&h=1000&fit=crop",
    notes: ["Bergamota", "Pimienta", "Vetiver"],
    description:
      "Un aroma fresco, potente y amaderado inspirado en la naturaleza.",
  },
  {
    id: "black-opium",
    brand: "Yves Saint Laurent",
    name: "Black Opium",
    type: "Eau de Parfum",
    gender: "Mujer",
    size: "90 ml",
    price: 40500,
    availability: "inmediata",
    badge: "Nuevo",
    image:
      "https://images.unsplash.com/photo-1739190940453-20900e9d18fb?w=800&h=1000&fit=crop",
    notes: ["Café negro", "Vainilla", "Jazmín"],
    description:
      "Una fragancia atrevida, oscura y sensual.",
  },
];

export const formatPrice = (price: number) =>
  `₡${price.toLocaleString("es-CR")}`;