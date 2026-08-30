import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-[#faf8f4] px-6 py-28 text-center">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a96e]">
          Perfumería Salas
        </p>

        <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1c1814] sm:text-5xl md:text-6xl">
          Encuentra una esencia
          <br />
          que sea solo tuya.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#766d64] sm:text-base">
          Explora nuestra selección de perfumes, belleza y cuidado
          personal y descubre algo que vaya contigo.
        </p>

        <Link
          href="/catalogo"
          className="mt-8 inline-flex bg-[#1c1814] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#342d27]"
        >
          Explorar catálogo
        </Link>
      </div>
    </section>
  );
}