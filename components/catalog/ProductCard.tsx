import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const isAvailable = product.availability === "inmediata";
  const isOnOrder = product.availability === "pedido";
  const isSoldOut = product.availability === "agotado";

  return (
    <article className="group">
      {/* Product image */}
      <div className="relative overflow-hidden bg-[#f1ece4]">
        <Link
          href={`/producto/${product.id}`}
          className="relative block aspect-[4/5]"
        >
          <img
            src={product.image}
            alt={`${product.brand} ${product.name}`}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </Link>

        {/* Badges */}
        <div className="absolute left-4 top-4 flex flex-col gap-2">
          {product.badge && (
            <span className="w-fit bg-[#1c1814] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-white">
              {product.badge}
            </span>
          )}

          {product.discount && (
            <span className="w-fit bg-[#c9a96e] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#1c1814]">
              -{product.discount}%
            </span>
          )}
        </div>

        {/* Favorite */}
        <button
          type="button"
          aria-label={`Agregar ${product.name} a favoritos`}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#5a5248] shadow-sm transition hover:bg-[#1c1814] hover:text-white"
        >
          <Heart size={16} strokeWidth={1.5} />
        </button>

        {/* Quick action */}
        <div className="absolute inset-x-4 bottom-4 translate-y-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Link
            href={`/producto/${product.id}`}
            className="flex items-center justify-center gap-2 bg-white/95 px-4 py-3 text-xs font-medium uppercase tracking-[0.12em] text-[#1c1814] backdrop-blur-sm transition hover:bg-[#1c1814] hover:text-white"
          >
            <ShoppingBag size={15} strokeWidth={1.5} />
            Ver producto
          </Link>
        </div>
      </div>

      {/* Product information */}
      <div className="pt-5">
        <Link href={`/producto/${product.id}`}>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#a28b68]">
            {product.brand}
          </p>

          <h3 className="mt-1 font-serif text-xl text-[#1c1814] transition group-hover:text-[#a28b68]">
            {product.name}
          </h3>
        </Link>

        {/* Type and size */}
        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-[#766d64]">
          <span>{product.type}</span>

          <span className="h-1 w-1 rounded-full bg-[#c9a96e]" />

          <span>{product.size}</span>
        </div>

        {/* Notes */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.notes.slice(0, 3).map((note) => (
            <span
              key={note}
              className="border border-[#e5dfd6] px-2 py-1 text-[10px] text-[#766d64]"
            >
              {note}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-sm font-semibold text-[#1c1814]">
            {formatPrice(product.price)}
          </span>

          {product.oldPrice && (
            <span className="text-xs text-[#a49b92] line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>

        {/* Availability */}
        <div className="mt-3 flex items-center gap-2">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              isAvailable
                ? "bg-green-600"
                : isOnOrder
                  ? "bg-[#c9a96e]"
                  : "bg-red-500"
            }`}
          />

          <span className="text-[11px] text-[#766d64]">
            {isAvailable
              ? "Entrega inmediata"
              : isOnOrder
                ? "Disponible bajo pedido"
                : isSoldOut
                  ? "Agotado"
                  : "Consultar disponibilidad"}
          </span>
        </div>
      </div>
    </article>
  );
}