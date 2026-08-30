import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="relative overflow-hidden bg-[#1c1814]">
      <div className="mx-auto grid min-h-[520px] max-w-7xl lg:grid-cols-2">
        {/* Image */}
        <div
          className="min-h-[320px] bg-cover bg-center lg:min-h-[520px]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1200&auto=format&fit=crop')",
          }}
        />

        {/* Content */}
        <div className="flex items-center px-8 py-16 sm:px-12 lg:px-16">
          <div className="max-w-lg">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a96e]">
              Selección especial
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#faf8f4] sm:text-5xl">
              Tu fragancia favorita,
              <br />
              ahora con un detalle especial.
            </h2>

            <p className="mt-6 text-sm leading-7 text-[#b8afa6] sm:text-base">
              Descubre nuestras promociones y encuentra productos
              seleccionados con precios especiales por tiempo limitado.
            </p>

            <Link
              href="/promociones"
              className="mt-8 inline-flex bg-[#c9a96e] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#b99659]"
            >
              Ver promociones
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}