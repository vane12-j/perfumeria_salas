import Link from "next/link";
import {
  ArrowRight,
  Heart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function NosotrosPage() {
  return (
    <main className="bg-[#faf8f4]">
      {/* Hero */}
      <section className="border-b border-[#e5dfd6] bg-[#f1ece4]">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-28 lg:px-8 lg:pb-28 lg:pt-36">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#a28b68]">
                Nuestra esencia
              </p>

              <h1 className="mt-5 font-serif text-5xl leading-[1.05] text-[#1c1814] sm:text-6xl lg:text-7xl">
                Más que una fragancia.
              </h1>
            </div>

            <p className="max-w-xl text-sm leading-7 text-[#766d64] sm:text-base lg:justify-self-end">
              En Perfumería Salas creemos que una fragancia puede convertirse
              en parte de nuestra identidad, acompañarnos en momentos
              especiales y crear recuerdos que permanecen.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a28b68]">
              Perfumería Salas
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#1c1814] sm:text-4xl">
              Una experiencia creada alrededor de cada esencia.
            </h2>
          </div>

          <div className="space-y-6 text-sm leading-7 text-[#766d64] sm:text-base">
            <p>
              Perfumería Salas nace con el propósito de acercar diferentes
              fragancias a personas que buscan encontrar un aroma con el que
              puedan identificarse.
            </p>

            <p>
              Nuestra selección reúne perfumes con distintas personalidades,
              estilos y familias olfativas, permitiendo descubrir alternativas
              para diferentes ocasiones y preferencias.
            </p>

            <p>
              Queremos que elegir una fragancia sea una experiencia sencilla,
              cercana y especial, desde el momento en que descubres un producto
              hasta que llega a tus manos.
            </p>
          </div>
        </div>
      </section>

      {/* Phrase */}
      <section className="border-y border-[#e5dfd6] bg-[#1c1814]">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:py-28">
          <Sparkles
            size={22}
            strokeWidth={1.3}
            className="mx-auto text-[#c9a96e]"
          />

          <p className="mt-7 font-serif text-3xl leading-relaxed text-white sm:text-4xl lg:text-5xl">
            “Cada aroma cuenta una historia.
            <br className="hidden sm:block" /> Encuentra la que quieres llevar
            contigo.”
          </p>

          <div className="mx-auto mt-8 h-px w-16 bg-[#c9a96e]" />

          <p className="mt-5 text-xs uppercase tracking-[0.25em] text-white/50">
            Perfumería Salas
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a28b68]">
            Lo que nos representa
          </p>

          <h2 className="mt-4 font-serif text-3xl text-[#1c1814] sm:text-4xl">
            Nuestra forma de hacer las cosas.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Value 1 */}
          <article className="border-t border-[#c9a96e] pt-7">
            <div className="flex h-11 w-11 items-center justify-center bg-[#f1ece4] text-[#a28b68]">
              <Sparkles size={19} strokeWidth={1.4} />
            </div>

            <h3 className="mt-6 font-serif text-2xl text-[#1c1814]">
              Selección
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#766d64]">
              Buscamos ofrecer una colección variada que permita descubrir
              fragancias para diferentes estilos, momentos y personalidades.
            </p>
          </article>

          {/* Value 2 */}
          <article className="border-t border-[#c9a96e] pt-7">
            <div className="flex h-11 w-11 items-center justify-center bg-[#f1ece4] text-[#a28b68]">
              <Heart size={19} strokeWidth={1.4} />
            </div>

            <h3 className="mt-6 font-serif text-2xl text-[#1c1814]">
              Cercanía
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#766d64]">
              Queremos brindar una experiencia cercana y acompañar a cada
              persona durante la búsqueda de su próxima fragancia.
            </p>
          </article>

          {/* Value 3 */}
          <article className="border-t border-[#c9a96e] pt-7">
            <div className="flex h-11 w-11 items-center justify-center bg-[#f1ece4] text-[#a28b68]">
              <ShieldCheck size={19} strokeWidth={1.4} />
            </div>

            <h3 className="mt-6 font-serif text-2xl text-[#1c1814]">
              Confianza
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#766d64]">
              Trabajamos para ofrecer información clara sobre nuestros
              productos y mantener una comunicación transparente durante cada
              pedido.
            </p>
          </article>
        </div>
      </section>

      {/* Experience */}
      <section className="border-y border-[#e5dfd6] bg-[#f1ece4]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a28b68]">
                Tu fragancia
              </p>

              <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-[#1c1814] sm:text-5xl">
                Una esencia para cada momento.
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-sm leading-7 text-[#766d64] sm:text-base">
                Desde aromas frescos y ligeros hasta fragancias intensas,
                dulces o sofisticadas, nuestra colección busca ofrecer
                alternativas para diferentes gustos y ocasiones.
              </p>

              <Link
                href="/catalogo"
                className="mt-7 inline-flex items-center gap-3 bg-[#1c1814] px-6 py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-white transition hover:bg-[#c9a96e] hover:text-[#1c1814]"
              >
                Descubrir colección
                <ArrowRight size={15} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center lg:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#a28b68]">
            Perfumería Salas
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#1c1814] sm:text-5xl">
            Encuentra una fragancia que hable por ti.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#766d64]">
            Explora nuestra colección o contáctanos si necesitas ayuda para
            encontrar una opción especial.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/catalogo"
              className="inline-flex items-center justify-center gap-3 bg-[#1c1814] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-white transition hover:bg-[#c9a96e] hover:text-[#1c1814]"
            >
              Ver catálogo
              <ArrowRight size={15} strokeWidth={1.5} />
            </Link>

            <Link
              href="/contacto"
              className="inline-flex items-center justify-center border border-[#ddd5ca] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-[#5a5248] transition hover:border-[#c9a96e]"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}