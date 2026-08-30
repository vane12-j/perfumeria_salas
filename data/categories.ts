export type Category = {
  id: string;
  name: string;
  subtitle: string;
  slug: string;
  image: string;
};

export const categories: Category[] = [
  {
    id: "mujer",
    name: "Perfumes de Mujer",
    subtitle: "Esencias que inspiran",
    slug: "mujer",
    image:
      "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=800&h=900&fit=crop",
  },
  {
    id: "hombre",
    name: "Perfumes de Hombre",
    subtitle: "Carácter y presencia",
    slug: "hombre",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&h=900&fit=crop",
  },
  {
    id: "unisex",
    name: "Perfumes Unisex",
    subtitle: "Una esencia para compartir",
    slug: "unisex",
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&h=900&fit=crop",
  },
  {
    id: "sets",
    name: "Sets & Estuches",
    subtitle: "El regalo perfecto",
    slug: "sets",
    image:
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?w=800&h=900&fit=crop",
  },
];