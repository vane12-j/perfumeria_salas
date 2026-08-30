"use client";

import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, User } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#1c1814] px-4 py-2 text-center">
        <span className="text-[11px] tracking-[0.12em] text-[#c9a96e]">
          Envíos a toda Costa Rica · Contacto: +506 8888-0000
        </span>
      </div>

      {/* Main navbar */}
      <nav className="border-b border-black/5 bg-[#faf8f4]/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl font-bold tracking-tight text-[#1c1814]"
          >
            PERFUMERÍA{" "}
            <span className="text-[#c9a96e]">SALAS</span>
          </Link>

          {/* Desktop navigation */}
          <div className="ml-12 hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm text-[#1c1814] transition hover:text-[#c9a96e]"
            >
              Inicio
            </Link>

            <Link
              href="/catalogo"
              className="text-sm text-[#5a5248] transition hover:text-[#1c1814]"
            >
              Catálogo
            </Link>

            <Link
              href="/catalogo?categoria=perfumes"
              className="text-sm text-[#5a5248] transition hover:text-[#1c1814]"
            >
              Perfumes
            </Link>

            <Link
              href="/catalogo?categoria=cabello"
              className="text-sm text-[#5a5248] transition hover:text-[#1c1814]"
            >
              Cabello
            </Link>

            <Link
              href="/catalogo?categoria=skincare"
              className="text-sm text-[#5a5248] transition hover:text-[#1c1814]"
            >
              Skincare
            </Link>

            <Link
              href="/promociones"
              className="text-sm text-[#5a5248] transition hover:text-[#1c1814]"
            >
              Promociones
            </Link>
          </div>

          {/* Actions */}
          <div className="ml-auto flex items-center gap-1">
            <button
              className="hidden rounded-full p-3 transition hover:bg-black/5 sm:block"
              aria-label="Buscar"
            >
              <Search size={18} strokeWidth={1.6} />
            </button>

            <button
              className="rounded-full p-3 transition hover:bg-black/5"
              aria-label="Favoritos"
            >
              <Heart size={18} strokeWidth={1.6} />
            </button>

            <button
              className="rounded-full p-3 transition hover:bg-black/5"
              aria-label="Solicitudes"
            >
              <ShoppingBag size={18} strokeWidth={1.6} />
            </button>

            <button
              className="hidden rounded-full p-3 transition hover:bg-black/5 sm:block"
              aria-label="Perfil"
            >
              <User size={18} strokeWidth={1.6} />
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-full p-3 transition hover:bg-black/5 md:hidden"
              aria-label="Abrir menú"
            >
              <Menu size={20} strokeWidth={1.6} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t border-black/5 px-6 pb-6 pt-3 md:hidden">
            {["Inicio", "Catálogo", "Perfumes", "Cabello", "Skincare", "Promociones"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="block border-b border-black/5 py-4 font-serif text-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              )
            )}
          </div>
        )}
      </nav>
    </header>
  );
}