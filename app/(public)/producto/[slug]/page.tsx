import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Check,
  ChevronRight,
  Minus,
  Plus,
  ShoppingBag,
  Truck,
} from "lucide-react";

import { products, formatPrice } from "@/data/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.id === slug);

  if (!product) {
    notFound();
  }

  const isAvailable = product.availability === "inmediata";
  const isOnOrder = product.availability === "pedido";
  const isSoldOut = product.availability === "agotado";

  const relatedProducts = products
    .filter(
      (item) =>
        item.id !== product.id &&
        (item.brand === product.brand || item.gender === product.gender),
    )
    .slice(0, 4);

  return (
    <main className="bg-[#faf8f4]">
      {/* Breadcrumb */}
      <div className="border-b border-[#e5dfd6] bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-6 py-4 text-xs text-[#8f867d] lg:px-8">
          <Link
            href="/"
            className="transition hover:text-[#a28b68]"
          >
            Inicio
          </Link>

          <ChevronRight size={13} />

          <Link
            href="/catalogo"
            className="transition hover:text-[#a28b68]"
          >
            Catálogo
          </Link>

          <ChevronRight size={13} />

          <span className="truncate text-[#1c1814]">
            {product.name}
          </span>
        </div>
      </div>

      {/* Product */}
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-14 lg:px-8 lg:pb-16 lg:pt-20">
        {/* Back */}
        <Link
          href="/catalogo"
          className="mb-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-[#766d64] transition hover:text-[#a28b68]"
        >
          <ArrowLeft size={15} strokeWidth={1.5} />
          Volver al catálogo
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div>
            <div className="relative overflow-hidden bg-[#f1ece4]">
              <div className="aspect-[4/5]">
                <img
                  src={product.image}
                  alt={`${product.brand} ${product.name}`}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Badges */}
              <div className="absolute left-5 top-5 flex flex-col gap-2">
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
            </div>

            {/* Image note */}
            <p className="mt-3 text-center text-[10px] uppercase tracking-[0.12em] text-[#a49b92]">
              Imagen del producto
            </p>
          </div>

          {/* Information */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#a28b68]">
              {product.brand}
            </p>

            <h1 className="mt-3 font-serif text-4xl leading-tight text-[#1c1814] sm:text-5xl">
              {product.name}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-[#766d64]">
              <span>{product.type}</span>

              <span className="h-1 w-1 rounded-full bg-[#c9a96e]" />

              <span>{product.gender}</span>

              <span className="h-1 w-1 rounded-full bg-[#c9a96e]" />

              <span>{product.size}</span>
            </div>

            {/* Price */}
            <div className="mt-7 flex items-center gap-3 border-y border-[#e5dfd6] py-6">
              <span className="text-2xl font-semibold text-[#1c1814]">
                {formatPrice(product.price)}
              </span>

              {product.oldPrice && (
                <span className="text-sm text-[#a49b92] line-through">
                  {formatPrice(product.oldPrice)}
                </span>
              )}

              {product.discount && (
                <span className="bg-[#f1ece4] px-2 py-1 text-xs font-medium text-[#a28b68]">
                  Ahorras {product.discount}%
                </span>
              )}
            </div>

            {/* Availability */}
            <div className="mt-6 flex items-start gap-3">
              <div
                className={`mt-1 h-2 w-2 rounded-full ${
                  isAvailable
                    ? "bg-green-600"
                    : isOnOrder
                      ? "bg-[#c9a96e]"
                      : "bg-red-500"
                }`}
              />

              <div>
                <p className="text-sm font-medium text-[#1c1814]">
                  {isAvailable
                    ? "Disponible para entrega"
                    : isOnOrder
                      ? "Disponible bajo pedido"
                      : "Producto agotado"}
                </p>

                <p className="mt-1 text-xs leading-5 text-[#766d64]">
                  {isAvailable
                    ? "Producto disponible para entrega inmediata."
                    : isOnOrder
                      ? "Este producto se solicita bajo pedido. Consulta disponibilidad."
                      : "Actualmente este producto no está disponible."}
                </p>
              </div>
            </div>

            {/* Quantity */}
            {!isSoldOut && (
              <div className="mt-8">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-[#5a5248]">
                  Cantidad
                </p>

                <div className="flex h-12 w-32 items-center border border-[#ddd5ca] bg-white">
                  <button
                    type="button"
                    aria-label="Disminuir cantidad"
                    className="flex h-full w-10 items-center justify-center text-[#766d64] transition hover:bg-[#f1ece4]"
                  >
                    <Minus size={15} strokeWidth={1.5} />
                  </button>

                  <span className="flex flex-1 items-center justify-center text-sm text-[#1c1814]">
                    1
                  </span>

                  <button
                    type="button"
                    aria-label="Aumentar cantidad"
                    className="flex h-full w-10 items-center justify-center text-[#766d64] transition hover:bg-[#f1ece4]"
                  >
                    <Plus size={15} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            )}

            {/* Add to cart */}
            <button
              type="button"
              disabled={isSoldOut}
              className="mt-5 flex h-14 w-full items-center justify-center gap-3 bg-[#1c1814] px-6 text-xs font-medium uppercase tracking-[0.15em] text-white transition hover:bg-[#c9a96e] hover:text-[#1c1814] disabled:cursor-not-allowed disabled:bg-[#d5d0ca] disabled:text-[#766d64]"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />

              {isSoldOut
                ? "Producto agotado"
                : "Agregar al carrito"}
            </button>

            {/* Delivery */}
            <div className="mt-6 grid gap-3 border-t border-[#e5dfd6] pt-6 sm:grid-cols-2">
              <div className="flex gap-3">
                <Truck
                  size={18}
                  strokeWidth={1.5}
                  className="mt-0.5 text-[#a28b68]"
                />

                <div>
                  <p className="text-xs font-medium text-[#1c1814]">
                    Entrega
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-[#766d64]">
                    Coordinamos la entrega de tu pedido.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check
                  size={18}
                  strokeWidth={1.5}
                  className="mt-0.5 text-[#a28b68]"
                />

                <div>
                  <p className="text-xs font-medium text-[#1c1814]">
                    Compra segura
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-[#766d64]">
                    Te acompañamos durante todo el proceso.
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-10 border-t border-[#e5dfd6] pt-8">
              <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-[#1c1814]">
                Descripción
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#766d64]">
                {product.description}
              </p>
            </div>

            {/* Notes */}
            {product.notes.length > 0 && (
              <div className="mt-8 border-t border-[#e5dfd6] pt-8">
                <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-[#1c1814]">
                  Notas olfativas
                </h2>

                <div className="mt-4 flex flex-wrap gap-2">
                  {product.notes.map((note) => (
                    <span
                      key={note}
                      className="border border-[#ddd5ca] bg-white px-3 py-2 text-xs text-[#766d64]"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-[#e5dfd6] bg-white">
          <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
            <div className="mb-8">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#a28b68]">
                También te puede interesar
              </p>

              <h2 className="mt-3 font-serif text-3xl text-[#1c1814]">
                Descubre otras fragancias
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/producto/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-[#f1ece4]">
                    <img
                      src={relatedProduct.image}
                      alt={`${relatedProduct.brand} ${relatedProduct.name}`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="pt-4">
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#a28b68]">
                      {relatedProduct.brand}
                    </p>

                    <h3 className="mt-1 font-serif text-lg text-[#1c1814] transition group-hover:text-[#a28b68]">
                      {relatedProduct.name}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-[#1c1814]">
                      {formatPrice(relatedProduct.price)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}