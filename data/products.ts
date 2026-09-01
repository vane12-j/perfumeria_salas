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
    id: "sol-de-janeiro",
    brand: "Sol de Janeiro",
    name: "Sol de Janeiro",
    type: "Fragancia",
    gender: "Mujer",
    size: "Por confirmar",
    price: 0,
    availability: "pedido",
    image: "/images/products/janeiro.png",
    notes: [],
    description:
      "Fragancia de Sol de Janeiro. Próximamente agregaremos todos sus detalles.",
  },

  {
    id: "lattafa-yara",
    brand: "Lattafa",
    name: "Yara",
    type: "Eau de Parfum",
    gender: "Mujer",
    size: "Por confirmar",
    price: 0,
    availability: "pedido",
    image: "/images/products/lattafa-yara.png",
    notes: [],
    description:
      "Fragancia Yara de Lattafa. Próximamente agregaremos todos sus detalles.",
  },

  {
    id: "afnan",
    brand: "Afnan",
    name: "Afnan",
    type: "Fragancia",
    gender: "Unisex",
    size: "Por confirmar",
    price: 0,
    availability: "pedido",
    image: "/images/products/afnan.png",
    notes: [],
    description:
      "Fragancia de Afnan. Próximamente agregaremos todos sus detalles.",
  },

  {
    id: "marshmallow-blush",
    brand: "Marshmallow Blush",
    name: "Marshmallow Blush",
    type: "Fragancia",
    gender: "Mujer",
    size: "Por confirmar",
    price: 0,
    availability: "pedido",
    image: "/images/products/marshmallow-blush.png",
    notes: [],
    description:
      "Fragancia Marshmallow Blush. Próximamente agregaremos todos sus detalles.",
  },

  {
    id: "lattafa-hayaati",
    brand: "Lattafa",
    name: "Hayaati",
    type: "Eau de Parfum",
    gender: "Unisex",
    size: "Por confirmar",
    price: 0,
    availability: "pedido",
    image: "/images/products/lattafa-hayaati.png",
    notes: [],
    description:
      "Fragancia Hayaati de Lattafa. Próximamente agregaremos todos sus detalles.",
  },

  {
    id: "armaf",
    brand: "ARMAF",
    name: "ARMAF",
    type: "Fragancia",
    gender: "Unisex",
    size: "Por confirmar",
    price: 0,
    availability: "pedido",
    image: "/images/products/armaf.png",
    notes: [],
    description:
      "Fragancia de ARMAF. Próximamente agregaremos todos sus detalles.",
  },
];

export const formatPrice = (price: number) =>
  `₡${price.toLocaleString("es-CR")}`;