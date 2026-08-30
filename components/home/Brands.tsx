import { brands } from "@/data/brands";

export default function Brands() {
  return (
    <section className="border-y border-[#e5dfd6] bg-[#faf8f4] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#c9a96e]">
            Nuestras marcas
          </p>

          <h2 className="mt-3 font-serif text-3xl text-[#1c1814] sm:text-4xl">
            Marcas que inspiran
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 border-l border-t border-[#e5dfd6] sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex h-28 items-center justify-center border-b border-r border-[#e5dfd6] px-4 text-center"
            >
              <span className="font-serif text-sm tracking-[0.12em] text-[#5a5248] transition hover:text-[#c9a96e]">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}