import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f4efe7] pt-28 lg:pt-32">
      <div className="mx-auto grid min-h-[calc(100vh-112px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
        {/* Text content */}
        <div className="max-w-xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#a28b68]">
            Perfumería Salas
          </p>

          <h1 className="mt-5 font-serif text-5xl leading-[1.05] text-[#1c1814] sm:text-6xl lg:text-7xl">
            Todo para tu
            <span className="block italic text-[#a28b68]">
              ritual de belleza
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-[#766d64]">
            Descubre una selección especial de perfumes y fragancias para
            encontrar ese aroma que se sienta verdaderamente tuyo.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/catalogo"
              className="inline-flex items-center justify-center bg-[#1c1814] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-white transition hover:bg-[#c9a96e] hover:text-[#1c1814]"
            >
              Explorar catálogo
            </Link>

            <Link
              href="/promociones"
              className="inline-flex items-center justify-center border border-[#d8cfc3] bg-white/60 px-7 py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-[#1c1814] transition hover:border-[#c9a96e] hover:bg-white"
            >
              Ver promociones
            </Link>
          </div>

          {/* Small benefits */}
          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-[#ded6cc] pt-6 sm:grid-cols-3">
            <div>
              <p className="font-serif text-lg text-[#1c1814]">Selección</p>
              <p className="mt-1 text-xs leading-5 text-[#766d64]">
                Fragancias cuidadosamente elegidas
              </p>
            </div>

            <div>
              <p className="font-serif text-lg text-[#1c1814]">Virtual</p>
              <p className="mt-1 text-xs leading-5 text-[#766d64]">
                Compra fácil desde donde estés
              </p>
            </div>

            <div className="hidden sm:block">
              <p className="font-serif text-lg text-[#1c1814]">Costa Rica</p>
              <p className="mt-1 text-xs leading-5 text-[#766d64]">
                Envíos a todo el país
              </p>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#e9e0d4]">
            <img
              src="/images/products/janeiro.png"
              alt="Perfume destacado de Perfumería Salas"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div className="bg-white/90 px-4 py-3 backdrop-blur-sm">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#a28b68]">
                  Destacado
                </p>
                <p className="mt-1 font-serif text-lg text-[#1c1814]">
                  Sol de Janeiro
                </p>
              </div>
            </div>
          </div>

          {/* Decorative element */}
          <div className="absolute -bottom-5 -left-5 -z-0 h-24 w-24 border border-[#c9a96e]/40" />
        </div>
      </div>
    </section>
  );
}