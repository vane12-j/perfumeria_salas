"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowUpDown,
  ChevronDown,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

import { products } from "@/data/products";
import ProductGrid from "@/components/catalog/ProductGrid";

const genders = ["Mujer", "Hombre", "Unisex"] as const;

const availabilityOptions = [
  { value: "inmediata", label: "Entrega inmediata" },
  { value: "pedido", label: "Bajo pedido" },
  { value: "agotado", label: "Agotado" },
] as const;

const concentrationOptions = [
  "Eau de Parfum",
  "Eau de Toilette",
  "Parfum",
] as const;

type SortOption =
  | "relevance"
  | "price-asc"
  | "price-desc"
  | "name-asc"
  | "name-desc";

export default function CatalogoPage() {
  const [search, setSearch] = useState("");
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>(
    [],
  );
  const [selectedConcentrations, setSelectedConcentrations] = useState<
    string[]
  >([]);
  const [sort, setSort] = useState<SortOption>("relevance");

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const toggleValue = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    setter((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value],
    );
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedGenders([]);
    setSelectedAvailability([]);
    setSelectedConcentrations([]);
    setSort("relevance");
  };

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    const result = products.filter((product) => {
      // Search
      const matchesSearch =
        normalizedSearch === "" ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.brand.toLowerCase().includes(normalizedSearch) ||
        product.type.toLowerCase().includes(normalizedSearch);

      // Gender
      const matchesGender =
        selectedGenders.length === 0 ||
        selectedGenders.includes(product.gender);

      // Availability
      const matchesAvailability =
        selectedAvailability.length === 0 ||
        selectedAvailability.includes(product.availability);

      // Concentration
      const matchesConcentration =
        selectedConcentrations.length === 0 ||
        selectedConcentrations.includes(product.type);

      return (
        matchesSearch &&
        matchesGender &&
        matchesAvailability &&
        matchesConcentration
      );
    });

    // Sorting
    return [...result].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;

        case "price-desc":
          return b.price - a.price;

        case "name-asc":
          return a.name.localeCompare(b.name, "es");

        case "name-desc":
          return b.name.localeCompare(a.name, "es");

        default:
          return 0;
      }
    });
  }, [
    search,
    selectedGenders,
    selectedAvailability,
    selectedConcentrations,
    sort,
  ]);

  const activeFiltersCount =
    selectedGenders.length +
    selectedAvailability.length +
    selectedConcentrations.length;

  const sortLabel = {
    relevance: "Relevancia",
    "price-asc": "Precio: menor a mayor",
    "price-desc": "Precio: mayor a menor",
    "name-asc": "Nombre: A-Z",
    "name-desc": "Nombre: Z-A",
  }[sort];

  return (
    <main className="bg-[#faf8f4]">
      {/* Header */}
      <section className="border-b border-[#e5dfd6] bg-[#f1ece4]">
        <div className="mx-auto max-w-7xl px-6 pb-14 pt-16 lg:px-8 lg:pb-20 lg:pt-24">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#a28b68]">
              Perfumería Salas
            </p>

            <h1 className="mt-4 font-serif text-5xl leading-[1.05] text-[#1c1814] sm:text-6xl">
              Nuestra colección
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#766d64] sm:text-base">
              Descubre perfumes cuidadosamente seleccionados para encontrar una
              fragancia que represente tu esencia.
            </p>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search
              size={18}
              strokeWidth={1.5}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8f867d]"
            />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar perfumes o marcas..."
              className="h-12 w-full border border-[#ddd5ca] bg-white pl-12 pr-12 text-sm text-[#1c1814] outline-none transition placeholder:text-[#a49b92] focus:border-[#c9a96e]"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Limpiar búsqueda"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8f867d] transition hover:text-[#1c1814]"
              >
                <X size={17} strokeWidth={1.5} />
              </button>
            )}
          </div>
        </div>

        {/* Toolbar */}
        <div className="mb-8 flex flex-col gap-4 border-y border-[#e5dfd6] py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#766d64]">
            <span className="font-medium text-[#1c1814]">
              {filteredProducts.length}
            </span>{" "}
            {filteredProducts.length === 1
              ? "perfume disponible"
              : "perfumes disponibles"}
          </p>

          <div className="flex gap-2">
            {/* Mobile filters */}
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="relative flex flex-1 items-center justify-center gap-2 border border-[#ddd5ca] bg-white px-4 py-2.5 text-xs font-medium uppercase tracking-[0.1em] text-[#5a5248] transition hover:border-[#c9a96e] sm:flex-none lg:hidden"
            >
              <SlidersHorizontal size={15} strokeWidth={1.5} />
              Filtrar

              {activeFiltersCount > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#1c1814] px-1 text-[10px] text-white">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Sort */}
            <div className="relative flex-1 sm:flex-none">
              <button
                type="button"
                onClick={() => setSortOpen((current) => !current)}
                className="flex w-full items-center justify-center gap-2 border border-[#ddd5ca] bg-white px-4 py-2.5 text-xs font-medium uppercase tracking-[0.1em] text-[#5a5248] transition hover:border-[#c9a96e]"
              >
                <ArrowUpDown size={15} strokeWidth={1.5} />
                Ordenar
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    sortOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {sortOpen && (
                <div className="absolute right-0 z-30 mt-2 w-64 border border-[#e5dfd6] bg-white p-2 shadow-lg">
                  {[
                    ["relevance", "Relevancia"],
                    ["price-asc", "Precio: menor a mayor"],
                    ["price-desc", "Precio: mayor a menor"],
                    ["name-asc", "Nombre: A-Z"],
                    ["name-desc", "Nombre: Z-A"],
                  ].map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => {
                        setSort(value as SortOption);
                        setSortOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-3 py-2.5 text-left text-xs transition ${
                        sort === value
                          ? "bg-[#f1ece4] text-[#1c1814]"
                          : "text-[#766d64] hover:bg-[#faf8f4]"
                      }`}
                    >
                      {label}

                      {sort === value && (
                        <span className="text-[#a28b68]">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Active filters */}
        {(activeFiltersCount > 0 || search) && (
          <div className="mb-8 flex flex-wrap items-center gap-2">
            {search && (
              <span className="inline-flex items-center gap-2 border border-[#ddd5ca] bg-white px-3 py-2 text-xs text-[#5a5248]">
                Búsqueda: "{search}"
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="text-[#a28b68] hover:text-[#1c1814]"
                  aria-label="Eliminar búsqueda"
                >
                  <X size={13} />
                </button>
              </span>
            )}

            {selectedGenders.map((gender) => (
              <span
                key={gender}
                className="inline-flex items-center gap-2 border border-[#ddd5ca] bg-white px-3 py-2 text-xs text-[#5a5248]"
              >
                {gender}
                <button
                  type="button"
                  onClick={() =>
                    toggleValue(gender, setSelectedGenders)
                  }
                  className="text-[#a28b68] hover:text-[#1c1814]"
                  aria-label={`Eliminar filtro ${gender}`}
                >
                  <X size={13} />
                </button>
              </span>
            ))}

            {selectedAvailability.map((availability) => {
              const label =
                availabilityOptions.find(
                  (item) => item.value === availability,
                )?.label ?? availability;

              return (
                <span
                  key={availability}
                  className="inline-flex items-center gap-2 border border-[#ddd5ca] bg-white px-3 py-2 text-xs text-[#5a5248]"
                >
                  {label}
                  <button
                    type="button"
                    onClick={() =>
                      toggleValue(availability, setSelectedAvailability)
                    }
                    className="text-[#a28b68] hover:text-[#1c1814]"
                    aria-label={`Eliminar filtro ${label}`}
                  >
                    <X size={13} />
                  </button>
                </span>
              );
            })}

            {selectedConcentrations.map((concentration) => (
              <span
                key={concentration}
                className="inline-flex items-center gap-2 border border-[#ddd5ca] bg-white px-3 py-2 text-xs text-[#5a5248]"
              >
                {concentration}
                <button
                  type="button"
                  onClick={() =>
                    toggleValue(concentration, setSelectedConcentrations)
                  }
                  className="text-[#a28b68] hover:text-[#1c1814]"
                  aria-label={`Eliminar filtro ${concentration}`}
                >
                  <X size={13} />
                </button>
              </span>
            ))}

            <button
              type="button"
              onClick={clearFilters}
              className="px-2 py-2 text-xs font-medium text-[#a28b68] hover:text-[#1c1814]"
            >
              Limpiar todo
            </button>
          </div>
        )}

        {/* Desktop filters + products */}
        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          {/* Desktop filters */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="flex items-center justify-between">
                <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-[#1c1814]">
                  Filtrar
                </h2>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-xs text-[#a28b68] hover:text-[#1c1814]"
                >
                  Limpiar
                </button>
              </div>

              <div className="mt-7 space-y-8">
                {/* Gender */}
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-[#5a5248]">
                    Género
                  </h3>

                  <div className="mt-4 space-y-3">
                    {genders.map((gender) => (
                      <label
                        key={gender}
                        className="flex cursor-pointer items-center gap-3 text-sm text-[#766d64]"
                      >
                        <input
                          type="checkbox"
                          checked={selectedGenders.includes(gender)}
                          onChange={() =>
                            toggleValue(gender, setSelectedGenders)
                          }
                          className="h-4 w-4 accent-[#1c1814]"
                        />
                        {gender}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="border-t border-[#e5dfd6] pt-7">
                  <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-[#5a5248]">
                    Disponibilidad
                  </h3>

                  <div className="mt-4 space-y-3">
                    {availabilityOptions.map((option) => (
                      <label
                        key={option.value}
                        className="flex cursor-pointer items-center gap-3 text-sm text-[#766d64]"
                      >
                        <input
                          type="checkbox"
                          checked={selectedAvailability.includes(
                            option.value,
                          )}
                          onChange={() =>
                            toggleValue(
                              option.value,
                              setSelectedAvailability,
                            )
                          }
                          className="h-4 w-4 accent-[#1c1814]"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Concentration */}
                <div className="border-t border-[#e5dfd6] pt-7">
                  <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-[#5a5248]">
                    Concentración
                  </h3>

                  <div className="mt-4 space-y-3">
                    {concentrationOptions.map((type) => (
                      <label
                        key={type}
                        className="flex cursor-pointer items-center gap-3 text-sm text-[#766d64]"
                      >
                        <input
                          type="checkbox"
                          checked={selectedConcentrations.includes(type)}
                          onChange={() =>
                            toggleValue(
                              type,
                              setSelectedConcentrations,
                            )
                          }
                          className="h-4 w-4 accent-[#1c1814]"
                        />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Products */}
          <div>
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[#e5dfd6] bg-[#1c1814]">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#c9a96e]">
            ¿Buscas algo especial?
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl text-white sm:text-4xl">
            Déjate llevar por una nueva fragancia.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/60">
            Explora nuestra selección y encuentra el perfume que mejor se
            adapta a tu estilo.
          </p>

          <Link
            href="/contacto"
            className="mt-7 inline-flex border border-[#c9a96e] px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-[#c9a96e] transition hover:bg-[#c9a96e] hover:text-[#1c1814]"
          >
            Contáctanos
          </Link>
        </div>
      </section>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <button
            type="button"
            aria-label="Cerrar filtros"
            onClick={() => setMobileFiltersOpen(false)}
            className="absolute inset-0 bg-black/40"
          />

          {/* Drawer */}
          <aside className="absolute right-0 top-0 flex h-full w-[88%] max-w-md flex-col bg-[#faf8f4] shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#e5dfd6] px-6 py-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#a28b68]">
                  Perfumería Salas
                </p>

                <h2 className="mt-1 font-serif text-2xl text-[#1c1814]">
                  Filtrar
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="flex h-9 w-9 items-center justify-center border border-[#ddd5ca] bg-white text-[#5a5248]"
                aria-label="Cerrar filtros"
              >
                <X size={17} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-7">
              <div className="space-y-8">
                {/* Gender */}
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-[#5a5248]">
                    Género
                  </h3>

                  <div className="mt-4 space-y-4">
                    {genders.map((gender) => (
                      <label
                        key={gender}
                        className="flex cursor-pointer items-center gap-3 text-sm text-[#766d64]"
                      >
                        <input
                          type="checkbox"
                          checked={selectedGenders.includes(gender)}
                          onChange={() =>
                            toggleValue(gender, setSelectedGenders)
                          }
                          className="h-4 w-4 accent-[#1c1814]"
                        />
                        {gender}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="border-t border-[#e5dfd6] pt-7">
                  <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-[#5a5248]">
                    Disponibilidad
                  </h3>

                  <div className="mt-4 space-y-4">
                    {availabilityOptions.map((option) => (
                      <label
                        key={option.value}
                        className="flex cursor-pointer items-center gap-3 text-sm text-[#766d64]"
                      >
                        <input
                          type="checkbox"
                          checked={selectedAvailability.includes(
                            option.value,
                          )}
                          onChange={() =>
                            toggleValue(
                              option.value,
                              setSelectedAvailability,
                            )
                          }
                          className="h-4 w-4 accent-[#1c1814]"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Concentration */}
                <div className="border-t border-[#e5dfd6] pt-7">
                  <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-[#5a5248]">
                    Concentración
                  </h3>

                  <div className="mt-4 space-y-4">
                    {concentrationOptions.map((type) => (
                      <label
                        key={type}
                        className="flex cursor-pointer items-center gap-3 text-sm text-[#766d64]"
                      >
                        <input
                          type="checkbox"
                          checked={selectedConcentrations.includes(type)}
                          onChange={() =>
                            toggleValue(
                              type,
                              setSelectedConcentrations,
                            )
                          }
                          className="h-4 w-4 accent-[#1c1814]"
                        />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Drawer actions */}
            <div className="border-t border-[#e5dfd6] bg-white p-5">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={clearFilters}
                  className="flex-1 border border-[#ddd5ca] px-4 py-3 text-xs font-medium uppercase tracking-[0.12em] text-[#5a5248] transition hover:border-[#c9a96e]"
                >
                  Limpiar
                </button>

                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="flex-1 bg-[#1c1814] px-4 py-3 text-xs font-medium uppercase tracking-[0.12em] text-white transition hover:bg-[#c9a96e] hover:text-[#1c1814]"
                >
                  Ver {filteredProducts.length}{" "}
                  {filteredProducts.length === 1 ? "producto" : "productos"}
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}