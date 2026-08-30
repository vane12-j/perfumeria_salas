import Link from "next/link";

const categories = [
  {
    name: "Perfumes",
    subtitle: "Encuentra tu firma",
    image:
      "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=800&h=900&fit=crop",
  },
  {
    name: "Cabello",
    subtitle: "Cuidado y belleza",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=900&fit=crop",
  },
  {
    name: "Skincare",
    subtitle: "Cuida tu piel",
    image:
      "https://images.unsplash.com/photo-1556229010-aa3f7ff66e2c?w=800&h=900&fit=crop",
  },
  {
    name: "Body Care",
    subtitle: "Mímate todos los días",
    image:
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&h=900&fit=crop",
  },
];

export default function Categories() {
  return (
    <section className="bg-[#f1ece4] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#c9a96e]">
            Descubre
          </p>

          <h2 className="mt-3 font-serif text-4xl text-[#1c1814]">
            Todo para tu ritual de belleza
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href="/catalogo"
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xs uppercase tracking-[0.15em] text-white/70">
                  {category.subtitle}
                </p>

                <h3 className="mt-1 font-serif text-2xl">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}