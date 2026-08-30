import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#f1ede7]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        {product.badge && (
          <span className="absolute left-4 top-4 bg-[#c9a96e] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
            {product.badge}
          </span>
        )}

        <button
          aria-label={`Agregar ${product.name} a favoritos`}
          className="absolute right-4 top-4 rounded-full bg-white/90 p-2.5 opacity-0 shadow-sm transition group-hover:opacity-100"
        >
          <Heart size={16} strokeWidth={1.6} />
        </button>
      </div>

      <div className="pt-4">
        <p className="text-[11px] uppercase tracking-[0.12em] text-[#9a8f84]">
          {product.brand}
        </p>

        <Link href={`/productos/${product.id}`}>
          <h3 className="mt-1 font-serif text-lg text-[#1c1814] transition hover:text-[#c9a96e]">
            {product.name}
          </h3>
        </Link>

        <p className="mt-1 text-xs text-[#8a8178]">
          {product.type} · {product.size}
        </p>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-sm font-semibold text-[#1c1814]">
            {formatPrice(product.price)}
          </span>

          {product.oldPrice && (
            <span className="text-xs text-[#a49b92] line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>

        <div className="mt-2 flex items-center gap-2 text-[11px]">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              product.availability === "inmediata"
                ? "bg-[#2eb05a]"
                : product.availability === "pedido"
                  ? "bg-[#e08030]"
                  : "bg-[#bbb]"
            }`}
          />

          <span className="text-[#766d64]">
            {product.availability === "inmediata"
              ? "Entrega inmediata"
              : product.availability === "pedido"
                ? "Bajo pedido"
                : "Agotado"}
          </span>
        </div>
      </div>
    </article>
  );
}