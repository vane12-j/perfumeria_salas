import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

export default function ContactoPage() {
  return (
    <main className="bg-[#faf8f4]">
      {/* Hero */}
      <section className="border-b border-[#e5dfd6] bg-[#f1ece4]">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-28 lg:px-8 lg:pb-28 lg:pt-36">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#a28b68]">
              Estamos para ayudarte
            </p>

            <h1 className="mt-5 font-serif text-5xl leading-[1.05] text-[#1c1814] sm:text-6xl lg:text-7xl">
              Hablemos.
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#766d64] sm:text-base">
              ¿Tienes alguna pregunta sobre una fragancia, disponibilidad o
              algún pedido? Escríbenos y con gusto te ayudaremos.
            </p>
          </div>
        </div>
      </section>

      {/* Contact information + form */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* Information */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a28b68]">
              Información
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#1c1814] sm:text-4xl">
              Estamos cerca para ayudarte a encontrar tu fragancia.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#766d64]">
              Puedes comunicarte con nosotros para consultar sobre productos,
              disponibilidad, pedidos o cualquier otra información de
              Perfumería Salas.
            </p>

            <div className="mt-10 space-y-7">
              {/* WhatsApp */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#f1ece4] text-[#a28b68]">
                  <MessageCircle size={19} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#5a5248]">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm text-[#766d64]">
                    Escríbenos para consultas rápidas.
                  </p>

                  <span className="mt-2 inline-block text-xs text-[#a49b92]">
                    Número por configurar
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#f1ece4] text-[#a28b68]">
                  <Phone size={18} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#5a5248]">
                    Teléfono
                  </p>

                  <p className="mt-1 text-sm text-[#766d64]">
                    Atención y consultas.
                  </p>

                  <span className="mt-2 inline-block text-xs text-[#a49b92]">
                    Número por configurar
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#f1ece4] text-[#a28b68]">
                  <Mail size={18} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#5a5248]">
                    Correo electrónico
                  </p>

                  <p className="mt-1 text-sm text-[#766d64]">
                    Escríbenos cuando quieras.
                  </p>

                  <span className="mt-2 inline-block text-xs text-[#a49b92]">
                    Correo por configurar
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#f1ece4] text-[#a28b68]">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#5a5248]">
                    Ubicación
                  </p>

                  <p className="mt-1 text-sm text-[#766d64]">
                    Información de ubicación.
                  </p>

                  <span className="mt-2 inline-block text-xs text-[#a49b92]">
                    Dirección por configurar
                  </span>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-10 border-t border-[#e5dfd6] pt-8">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#f1ece4] text-[#a28b68]">
                  <Clock3 size={18} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#5a5248]">
                    Horario de atención
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#766d64]">
                    Horario por confirmar con el propietario de la tienda.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="border border-[#e5dfd6] bg-white p-6 sm:p-8 lg:p-10">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a28b68]">
                Escríbenos
              </p>

              <h2 className="mt-3 font-serif text-3xl text-[#1c1814]">
                Envíanos un mensaje
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#766d64]">
                Completa el formulario y nos pondremos en contacto contigo.
              </p>
            </div>

            <form className="mt-8 space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-[#5a5248]"
                >
                  Nombre
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  className="h-12 w-full border border-[#ddd5ca] bg-[#faf8f4] px-4 text-sm text-[#1c1814] outline-none transition placeholder:text-[#a49b92] focus:border-[#c9a96e]"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-[#5a5248]"
                >
                  Correo electrónico
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="h-12 w-full border border-[#ddd5ca] bg-[#faf8f4] px-4 text-sm text-[#1c1814] outline-none transition placeholder:text-[#a49b92] focus:border-[#c9a96e]"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-[#5a5248]"
                >
                  Motivo de consulta
                </label>

                <select
                  id="subject"
                  name="subject"
                  defaultValue=""
                  className="h-12 w-full border border-[#ddd5ca] bg-[#faf8f4] px-4 text-sm text-[#5a5248] outline-none transition focus:border-[#c9a96e]"
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  <option value="producto">Consulta sobre un producto</option>
                  <option value="disponibilidad">
                    Consulta de disponibilidad
                  </option>
                  <option value="pedido">Consulta sobre un pedido</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-[#5a5248]"
                >
                  Mensaje
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  className="w-full resize-none border border-[#ddd5ca] bg-[#faf8f4] px-4 py-3 text-sm text-[#1c1814] outline-none transition placeholder:text-[#a49b92] focus:border-[#c9a96e]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex h-13 w-full items-center justify-center gap-3 bg-[#1c1814] px-6 text-xs font-medium uppercase tracking-[0.15em] text-white transition hover:bg-[#c9a96e] hover:text-[#1c1814]"
              >
                Enviar mensaje
                <ArrowRight size={15} strokeWidth={1.5} />
              </button>

              <p className="text-center text-[11px] leading-5 text-[#a49b92]">
                Este formulario estará conectado al sistema de contacto en una
                próxima etapa.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="border-y border-[#e5dfd6] bg-[#1c1814]">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center lg:py-20">
          <MessageCircle
            size={24}
            strokeWidth={1.3}
            className="mx-auto text-[#c9a96e]"
          />

          <p className="mt-6 text-xs font-medium uppercase tracking-[0.25em] text-[#c9a96e]">
            Atención personalizada
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
            ¿Prefieres hablar directamente?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60">
            Cuando tengamos configurado el número oficial, podrás comunicarte
            directamente con Perfumería Salas por WhatsApp.
          </p>

          <button
            type="button"
            disabled
            className="mt-8 inline-flex cursor-not-allowed items-center gap-3 border border-white/20 px-7 py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-white/40"
          >
            WhatsApp próximamente
          </button>
        </div>
      </section>

      {/* Catalog CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center lg:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#a28b68]">
            Perfumería Salas
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#1c1814] sm:text-5xl">
            Mientras tanto, descubre nuestra colección.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#766d64]">
            Explora nuestras fragancias y encuentra la esencia que mejor se
            adapte a ti.
          </p>

          <Link
            href="/catalogo"
            className="mt-8 inline-flex items-center gap-3 bg-[#1c1814] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-white transition hover:bg-[#c9a96e] hover:text-[#1c1814]"
          >
            Ver catálogo
            <ArrowRight size={15} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </main>
  );
}