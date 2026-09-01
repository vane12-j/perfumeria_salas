import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";

import { combos } from "@/data/combos";
import { formatPrice } from "@/data/products";

export default function SetsPage() {
  return (
    <main className="bg-[#faf8f4]">
      {/* Hero */}
      <section className="border-b border-[#e5dfd6] bg-[#f1ece4]">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-28 lg:px-8 lg:pb-28 lg:pt-36">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#a28b68]">
              Perfumería Salas
            </p>

            <h1 className="mt-5 font-serif text-5xl leading-[1.05] text-[#1c1814] sm:text-6xl lg:text-7xl">
              Sets & Combos
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#766d64] sm:text-base">
              Descubre combinaciones especiales pensadas para complementar tu
              fragancia y crear una experiencia más completa.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-end">
          <div>
            <div className="flex h-10 w-10 items-center justify-center bg-[#f1ece4] text-[#a28b68]">
              <Sparkles size={18} strokeWidth={1.5} />
            </div>

            <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-[#a28b68]">
              Selecciones especiales
            </p>

            <h2 className="mt-3 font-serif text-3xl leading-tight text-[#1c1814] sm:text-4xl">
              Una fragancia, una experiencia.
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-[#766d64] lg:justify-self-end">
            Nuestros sets reúnen productos seleccionados para acompañar tus
            momentos favoritos. Encuentra una combinación especial y disfruta
            de un precio preferencial.
          </p>
        </div>
      </section>

      {/* Combos */}
      <section className="border-y border-[#e5dfd6] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a28b68]">
                Nuestra selección
              </p>

              <h2 className="mt-3 font-serif text-3xl text-[#1c1814] sm:text-4xl">
                Encuentra tu set ideal
              </h2>
            </div>

            <span className="hidden text-sm text-[#766d64] sm:block">
              {combos.length}{" "}
              {combos.length === 1 ? "set disponible" : "sets disponibles"}
            </span>
          </div>

          {combos.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {combos.map((combo) => {
                const originalPrice = combo.price + combo.saving;

                return (
                  <article
                    key={combo.id}
                    className="group border border-[#e5dfd6] bg-[#faf8f4] transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#f1ece4]">
                      <img
                        src={combo.image}
                        alt={combo.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                      {/* Saving badge */}
                      <div className="absolute left-4 top-4 bg-[#c9a96e] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#1c1814]">
                        Ahorra {formatPrice(combo.saving)}
                      </div>
                    </div>

                    {/* Information */}
                    <div className="p-6">
                      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#a28b68]">
                        Set especial
                      </p>

                      <h3 className="mt-2 font-serif text-2xl text-[#1c1814]">
                        {combo.name}
                      </h3>

                      <p className="mt-2 text-sm text-[#766d64]">
                        {combo.description}
                      </p>

                      {/* Included */}
                      <div className="mt-5 border-t border-[#e5dfd6] pt-5">
                        <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#5a5248]">
                          Incluye
                        </p>

                        <div className="mt-3 flex items-center gap-2">
                          <Check
                            size={14}
                            strokeWidth={1.5}
                            className="text-[#a28b68]"
                          />

                          <span className="text-xs text-[#766d64]">
                            {combo.description}
                          </span>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="mt-6 flex items-end justify-between gap-4">
                        <div>
                          <p className="text-[11px] text-[#a49b92] line-through">
                            {formatPrice(originalPrice)}
                          </p>

                          <p className="mt-1 text-lg font-semibold text-[#1c1814]">
                            {formatPrice(combo.price)}
                          </p>
                        </div>

                        <Link
                          href="/contacto"
                          className="inline-flex items-center gap-2 border border-[#1c1814] px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[#1c1814] transition hover:bg-[#1c1814] hover:text-white"
                        >
                          Consultar
                          <ArrowRight size={13} strokeWidth={1.5} />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="border border-[#e5dfd6] px-6 py-20 text-center">
              <p className="font-serif text-2xl text-[#1c1814]">
                Próximamente tendremos nuevos sets
              </p>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#766d64]">
                Estamos preparando nuevas combinaciones para ti.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#f1ece4]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#a28b68]">
                01
              </p>

              <h3 className="mt-3 font-serif text-2xl text-[#1c1814]">
                Combinaciones especiales
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#766d64]">
                Productos seleccionados para complementar tu rutina.
              </p>
            </div>

            <div className="border-t border-[#ddd5ca] pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#a28b68]">
                02
              </p>

              <h3 className="mt-3 font-serif text-2xl text-[#1c1814]">
                Precio preferencial
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#766d64]">
                Lleva una selección completa y disfruta del ahorro del set.
              </p>
            </div>

            <div className="border-t border-[#ddd5ca] pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#a28b68]">
                03
              </p>

              <h3 className="mt-3 font-serif text-2xl text-[#1c1814]">
                Ideales para regalar
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#766d64]">
                Una alternativa especial para sorprender a alguien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#e5dfd6] bg-[#1c1814]">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center lg:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#c9a96e]">
            ¿Buscas una fragancia?
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
            También puedes explorar nuestra colección.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60">
            Descubre perfumes seleccionados y encuentra la esencia que mejor
            representa tu estilo.
          </p>

          <Link
            href="/catalogo"
            className="mt-8 inline-flex items-center gap-3 border border-[#c9a96e] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-[#c9a96e] transition hover:bg-[#c9a96e] hover:text-[#1c1814]"
          >
            Ver perfumes
            <ArrowRight size={15} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </main>
  );
}