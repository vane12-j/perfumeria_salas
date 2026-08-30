import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#c9a96e]">
            Selección Salas
          </p>

          <h2 className="mt-3 font-serif text-4xl text-[#1c1814]">
            Favoritos de la temporada
          </h2>
        </div>

        <a
          href="/catalogo"
          className="hidden border-b border-[#c9a96e] pb-1 text-sm text-[#5a5248] sm:block"
        >
          Ver todo
        </a>
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}