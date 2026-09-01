"use client";

import Link from "next/link";
import {
  Heart,
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Promociones", href: "/promociones" },
  { label: "Sets", href: "/sets" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#1c1814] px-4 py-2 text-center">
        <span className="text-[11px] tracking-[0.12em] text-[#c9a96e]">
          Envíos a toda Costa Rica · Perfumería 100% virtual
        </span>
      </div>

      {/* Main navbar */}
      <nav className="border-b border-black/5 bg-[#faf8f4]/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="font-serif text-lg font-bold tracking-tight text-[#1c1814] sm:text-xl"
          >
            PERFUMERÍA{" "}
            <span className="text-[#c9a96e]">SALAS</span>
          </Link>

          {/* Desktop navigation */}
          <div className="ml-12 hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[#5a5248] transition hover:text-[#c9a96e]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="ml-auto flex items-center gap-0.5">
            {/* Search */}
            <Link
              href="/catalogo"
              className="hidden rounded-full p-3 transition hover:bg-black/5 sm:block"
              aria-label="Buscar productos"
            >
              <Search size={18} strokeWidth={1.6} />
            </Link>

            {/* Favorites */}
            <button
              type="button"
              className="hidden rounded-full p-3 transition hover:bg-black/5 sm:block"
              aria-label="Favoritos"
            >
              <Heart size={18} strokeWidth={1.6} />
            </button>

            {/* Cart */}
            <Link
              href="/carrito"
              className="rounded-full p-3 transition hover:bg-black/5"
              aria-label="Carrito de compras"
            >
              <ShoppingBag size={18} strokeWidth={1.6} />
            </Link>

            {/* Profile */}
            <Link
              href="/mi-cuenta"
              className="hidden rounded-full p-3 transition hover:bg-black/5 sm:block"
              aria-label="Mi cuenta"
            >
              <User size={18} strokeWidth={1.6} />
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={toggleMenu}
              className="relative z-[60] rounded-full p-3 text-[#1c1814] transition hover:bg-black/5 md:hidden"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? (
                <X size={22} strokeWidth={1.6} />
              ) : (
                <Menu size={22} strokeWidth={1.6} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`overflow-hidden border-t border-black/5 bg-[#faf8f4] transition-all duration-300 md:hidden ${
            menuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 border-t-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-5 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="block border-b border-black/5 py-4 font-serif text-lg text-[#1c1814] transition hover:text-[#c9a96e]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}