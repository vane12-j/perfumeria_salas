import Link from "next/link";
import { Globe, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1c1814] text-[#faf8f4]">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-serif text-2xl font-bold tracking-tight"
            >
              PERFUMERÍA{" "}
              <span className="text-[#c9a96e]">SALAS</span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-[#b8afa6]">
              Perfumes, belleza y cuidado personal seleccionados
              para acompañarte en cada momento.
            </p>

            {/* Social media */}
            <div className="mt-6 flex gap-3">
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-full border border-white/10 p-2.5 transition hover:border-[#c9a96e] hover:text-[#c9a96e]"
              >
                <span className="text-sm font-medium">IG</span>
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-full border border-white/10 p-2.5 transition hover:border-[#c9a96e] hover:text-[#c9a96e]"
              >
                <span className="text-sm font-medium">FB</span>
              </a>

              {/* WhatsApp */}
              <a
                href="#"
                aria-label="WhatsApp"
                className="rounded-full border border-white/10 p-2.5 transition hover:border-[#c9a96e] hover:text-[#c9a96e]"
              >
                <MessageCircle size={17} strokeWidth={1.5} />
              </a>

              {/* Website */}
              <a
                href="#"
                aria-label="Sitio web"
                className="rounded-full border border-white/10 p-2.5 transition hover:border-[#c9a96e] hover:text-[#c9a96e]"
              >
                <Globe size={17} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-[#c9a96e]">
              Explorar
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-[#b8afa6]">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-white"
                >
                  Inicio
                </Link>
              </li>

              <li>
                <Link
                  href="/catalogo"
                  className="transition hover:text-white"
                >
                  Catálogo
                </Link>
              </li>

              <li>
                <Link
                  href="/promociones"
                  className="transition hover:text-white"
                >
                  Promociones
                </Link>
              </li>

              <li>
                <Link
                  href="/combos"
                  className="transition hover:text-white"
                >
                  Combos
                </Link>
              </li>
            </ul>
          </div>

          {/* Categorías */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-[#c9a96e]">
              Categorías
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-[#b8afa6]">
              <li>
                <Link
                  href="/catalogo?categoria=perfumes"
                  className="transition hover:text-white"
                >
                  Perfumes
                </Link>
              </li>

              <li>
                <Link
                  href="/catalogo?categoria=cabello"
                  className="transition hover:text-white"
                >
                  Cuidado del cabello
                </Link>
              </li>

              <li>
                <Link
                  href="/catalogo?categoria=skincare"
                  className="transition hover:text-white"
                >
                  Skincare
                </Link>
              </li>

              <li>
                <Link
                  href="/catalogo?categoria=body-care"
                  className="transition hover:text-white"
                >
                  Body Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-[#c9a96e]">
              Contacto
            </h3>

            <div className="mt-5 space-y-4 text-sm text-[#b8afa6]">
              <p>
                Estamos aquí para ayudarte a encontrar tu
                próxima fragancia.
              </p>

              <div>
                <p className="text-[#faf8f4]">WhatsApp</p>
                <p className="mt-1">+506 8888-0000</p>
              </div>

              <div>
                <p className="text-[#faf8f4]">Correo</p>
                <p className="mt-1">
                  hola@perfumeriasalas.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-[#8f867d] sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} Perfumería Salas. Todos
            los derechos reservados.
          </p>

          <div className="flex gap-5">
            <Link
              href="#"
              className="transition hover:text-[#c9a96e]"
            >
              Privacidad
            </Link>

            <Link
              href="#"
              className="transition hover:text-[#c9a96e]"
            >
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}