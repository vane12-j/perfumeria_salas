import Link from "next/link";

const combos = [
  {
    name: "Signature",
    description: "Perfume + Body Lotion",
    price: "₡37.500",
    saving: "Ahorrás ₡7.500",
    image:
      "https://images.unsplash.com/photo-1556229010-aa3f7ff66e2c?w=900&h=1100&fit=crop",
  },
  {
    name: "Beauty Ritual",
    description: "Perfume + Body Mist + Crema",
    price: "₡42.500",
    saving: "Ahorrás ₡8.500",
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=900&h=1100&fit=crop",
  },
  {
    name: "Hair Care",
    description: "Shampoo + Tratamiento + Serum",
    price: "₡29.900",
    saving: "Ahorrás ₡5.000",
    image:
      "https://images.unsplash.com/photo-1527799820374-dcf8f2d8e2a9?w=900&h=1100&fit=crop",
  },
];

export default function Combos() {
  return (
    <section className="bg-[#f1ece4] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#c9a96e]">
              Especiales para ti
            </p>

            <h2 className="mt-3 font-serif text-4xl text-[#1c1814]">
              Combos que enamoran
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#766d64]">
              Combina tus favoritos y disfruta de precios especiales.
            </p>
          </div>

          <Link
            href="/combos"
            className="w-fit border-b border-[#c9a96e] pb-1 text-sm text-[#5a5248]"
          >
            Ver todos los combos
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {combos.map((combo) => (
            <article
              key={combo.name}
              className="group overflow-hidden bg-[#faf8f4]"
            >
              <div className="relative aspect-[4/4.5] overflow-hidden">
                <img
                  src={combo.image}
                  alt={combo.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 bg-[#1c1814] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white">
                  Combo
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-2xl text-[#1c1814]">
                  {combo.name}
                </h3>

                <p className="mt-2 text-sm text-[#766d64]">
                  {combo.description}
                </p>

                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <p className="font-semibold text-[#1c1814]">
                      {combo.price}
                    </p>

                    <p className="mt-1 text-xs text-[#c9a96e]">
                      {combo.saving}
                    </p>
                  </div>

                  <Link
                    href="/combos"
                    className="text-xs font-medium uppercase tracking-[0.12em] text-[#5a5248] transition hover:text-[#c9a96e]"
                  >
                    Descubrir →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}