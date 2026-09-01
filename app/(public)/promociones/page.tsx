import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";

import { formatPrice, products } from "@/data/products";
import ProductCard from "@/components/catalog/ProductCard";

export default function PromocionesPage() {
  const promotionalProducts = products.filter(
    (product) => product.discount && product.discount > 0,
  );

  return (
    <main className="bg-[#faf8f4]">
      {/* Hero */}
      <section className="border-b border-[#e5dfd6] bg-[#1c1814]">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-28 lg:px-8 lg:pb-28 lg:pt-36">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#c9a96e]">
              Perfumería Salas
            </p>

            <h1 className="mt-5 font-serif text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Promociones
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
              Descubre nuestras fragancias con precios especiales y encuentra
              una nueva esencia para hacerla parte de tu colección.
            </p>

            <Link
              href="/catalogo"
              className="mt-8 inline-flex items-center gap-3 border border-[#c9a96e] px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-[#c9a96e] transition hover:bg-[#c9a96e] hover:text-[#1c1814]"
            >
              Ver catálogo
              <ArrowRight size={15} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-4 border-b border-[#e5dfd6] pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center bg-[#f1ece4] text-[#a28b68]">
                <Tag size={17} strokeWidth={1.5} />
              </span>

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a28b68]">
                Ofertas especiales
              </p>
            </div>

            <h2 className="mt-4 font-serif text-3xl text-[#1c1814] sm:text-4xl">
              Fragancias en promoción
            </h2>
          </div>

          <p className="text-sm text-[#766d64]">
            {promotionalProducts.length}{" "}
            {promotionalProducts.length === 1
              ? "producto en oferta"
              : "productos en oferta"}
          </p>
        </div>

        {promotionalProducts.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
            {promotionalProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="mt-10 border border-[#e5dfd6] bg-white px-6 py-20 text-center">
            <p className="font-serif text-2xl text-[#1c1814]">
              Próximamente tendremos nuevas promociones
            </p>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#766d64]">
              Estamos preparando nuevas ofertas para que encuentres tu
              fragancia favorita al mejor precio.
            </p>

            <Link
              href="/catalogo"
              className="mt-7 inline-flex items-center gap-2 bg-[#1c1814] px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-white transition hover:bg-[#c9a96e] hover:text-[#1c1814]"
            >
              Explorar catálogo
              <ArrowRight size={15} strokeWidth={1.5} />
            </Link>
          </div>
        )}
      </section>

      {/* Promotion benefits */}
      <section className="border-y border-[#e5dfd6] bg-[#f1ece4]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#a28b68]">
                01
              </p>

              <h3 className="mt-3 font-serif text-2xl text-[#1c1814]">
                Precios especiales
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#766d64]">
                Aprovecha nuestras promociones en fragancias seleccionadas.
              </p>
            </div>

            <div className="border-t border-[#ddd5ca] pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#a28b68]">
                02
              </p>

              <h3 className="mt-3 font-serif text-2xl text-[#1c1814]">
                Fragancias seleccionadas
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#766d64]">
                Seleccionamos productos especiales para nuestras ofertas.
              </p>
            </div>

            <div className="border-t border-[#ddd5ca] pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#a28b68]">
                03
              </p>

              <h3 className="mt-3 font-serif text-2xl text-[#1c1814]">
                Nuevas oportunidades
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#766d64]">
                Las promociones cambiarán conforme incorporemos nuevas
                fragancias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center lg:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#a28b68]">
            Tu próxima fragancia
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#1c1814] sm:text-5xl">
            Hay una esencia esperando por ti.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#766d64]">
            Explora nuestra colección completa y descubre perfumes que se
            adapten a tu personalidad y estilo.
          </p>

          <Link
            href="/catalogo"
            className="mt-8 inline-flex items-center gap-3 bg-[#1c1814] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-white transition hover:bg-[#c9a96e] hover:text-[#1c1814]"
          >
            Explorar perfumes
            <ArrowRight size={15} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </main>
  );
}