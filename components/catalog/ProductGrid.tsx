import type { Product } from "@/data/products";
import ProductCard from "./ProductCard";

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({
  products,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="col-span-full flex min-h-[300px] items-center justify-center border border-[#e5dfd6] bg-[#faf8f4]">
        <div className="text-center">
          <p className="font-serif text-2xl text-[#1c1814]">
            No encontramos perfumes
          </p>

          <p className="mt-2 text-sm text-[#766d64]">
            Intenta cambiar los filtros o realizar otra búsqueda.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}