"use client";

import Link from "next/link";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/components/cart/CartProvider";
import { formatPrice } from "@/data/products";

export default function CartPage() {
  const {
    items,
    totalItems,
    subtotal,
    updateQuantity,
    removeFromCart,
  } = useCart();

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-[#faf8f4] px-6 pb-20 pt-36 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f1ece4] text-[#a28b68]">
            <ShoppingBag size={25} strokeWidth={1.4} />
          </div>

          <p className="mt-7 text-[11px] font-medium uppercase tracking-[0.3em] text-[#a28b68]">
            Perfumería Salas
          </p>

          <h1 className="mt-4 font-serif text-4xl text-[#1c1814] sm:text-5xl">
            Tu carrito está vacío
          </h1>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#766d64]">
            Descubre nuestras fragancias y encuentra ese aroma que se
            sienta verdaderamente tuyo.
          </p>

          <Link
            href="/catalogo"
            className="mt-8 inline-flex items-center justify-center bg-[#1c1814] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-white transition hover:bg-[#c9a96e] hover:text-[#1c1814]"
          >
            Explorar catálogo
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf8f4] px-6 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#766d64] transition hover:text-[#a28b68]"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          Seguir comprando
        </Link>

        <div className="mt-8 border-b border-[#ded6cc] pb-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#a28b68]">
            Tu selección
          </p>

          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <h1 className="font-serif text-4xl text-[#1c1814] sm:text-5xl">
              Tu carrito
            </h1>

            <p className="text-sm text-[#766d64]">
              {totalItems}{" "}
              {totalItems === 1 ? "producto" : "productos"}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_360px]">
          <div className="space-y-0">
            {items.map((item) => (
              <article
                key={item.product.id}
                className="flex gap-4 border-b border-[#ded6cc] py-6 first:pt-0 sm:gap-6"
              >
                <Link
                  href={`/producto/${item.product.id}`}
                  className="relative h-32 w-24 shrink-0 overflow-hidden bg-[#f1ece4] sm:h-40 sm:w-32"
                >
                  <img
                    src={item.product.image}
                    alt={`${item.product.brand} ${item.product.name}`}
                    className="h-full w-full object-cover"
                  />
                </Link>

                <div className="flex min-w-0 flex-1 flex-col justify-between">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#a28b68]">
                      {item.product.brand}
                    </p>

                    <Link href={`/producto/${item.product.id}`}>
                      <h2 className="mt-1 font-serif text-xl text-[#1c1814] transition hover:text-[#a28b68]">
                        {item.product.name}
                      </h2>
                    </Link>

                    <p className="mt-1 text-xs text-[#766d64]">
                      {item.product.type} · {item.product.size}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex h-10 items-center border border-[#ddd5ca] bg-white">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.quantity - 1
                          )
                        }
                        className="flex h-full w-10 items-center justify-center text-[#766d64] transition hover:bg-[#f1ece4]"
                        aria-label={`Disminuir cantidad de ${item.product.name}`}
                      >
                        <Minus size={14} strokeWidth={1.5} />
                      </button>

                      <span className="flex w-9 justify-center text-sm text-[#1c1814]">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.quantity + 1
                          )
                        }
                        className="flex h-full w-10 items-center justify-center text-[#766d64] transition hover:bg-[#f1ece4]"
                        aria-label={`Aumentar cantidad de ${item.product.name}`}
                      >
                        <Plus size={14} strokeWidth={1.5} />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.product.id)}
                      className="inline-flex items-center gap-2 text-xs text-[#766d64] transition hover:text-red-600"
                    >
                      <Trash2 size={14} strokeWidth={1.5} />
                      Eliminar
                    </button>
                  </div>
                </div>

                <div className="hidden shrink-0 text-right sm:block">
                  <p className="text-sm font-semibold text-[#1c1814]">
                    {formatPrice(
                      item.product.price * item.quantity
                    )}
                  </p>

                  {item.quantity > 1 && (
                    <p className="mt-1 text-[11px] text-[#a49b92]">
                      {formatPrice(item.product.price)} c/u
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>

          <aside className="h-fit border border-[#ded6cc] bg-white p-6 sm:p-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#a28b68]">
              Resumen
            </p>

            <h2 className="mt-2 font-serif text-2xl text-[#1c1814]">
              Tu pedido
            </h2>

            <div className="mt-7 space-y-4 border-b border-[#ded6cc] pb-6 text-sm">
              <div className="flex justify-between gap-4 text-[#766d64]">
                <span>Productos</span>
                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between gap-4 text-[#766d64]">
                <span>Subtotal</span>
                <span className="text-[#1c1814]">
                  {formatPrice(subtotal)}
                </span>
              </div>

              <div className="flex justify-between gap-4 text-[#766d64]">
                <span>Envío</span>
                <span>Por confirmar</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <span className="font-serif text-xl text-[#1c1814]">
                Total
              </span>

              <span className="text-lg font-semibold text-[#1c1814]">
                {formatPrice(subtotal)}
              </span>
            </div>

            <Link
              href="/checkout"
              className="mt-7 flex h-13 items-center justify-center bg-[#1c1814] px-6 text-xs font-medium uppercase tracking-[0.15em] text-white transition hover:bg-[#c9a96e] hover:text-[#1c1814]"
            >
              Continuar compra
            </Link>

            <p className="mt-4 text-center text-[11px] leading-5 text-[#a49b92]">
              Los costos y condiciones de entrega se confirmarán
              durante el proceso de compra.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}