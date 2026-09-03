"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Check,
  CreditCard,
  Banknote,
} from "lucide-react";
import { useRef, useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { formatPrice } from "@/data/products";

type PaymentMethod = "sinpe" | "efectivo";

export default function CheckoutPage() {
  const { items, totalItems, subtotal } = useCart();

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("sinpe");
    const [errors, setErrors] = useState<Record<string, string>>({});
const [submitted, setSubmitted] = useState(false);

const formRef = useRef<HTMLFormElement>(null);

const validateForm = () => {
  const form = formRef.current;

  if (!form) return false;

  const formData = new FormData(form);

  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const province = String(formData.get("province") ?? "").trim();
  const canton = String(formData.get("canton") ?? "").trim();
  const district = String(formData.get("district") ?? "").trim();
  const address = String(formData.get("address") ?? "").trim();

  const newErrors: Record<string, string> = {};

  if (!name) {
    newErrors.name = "Ingresa tu nombre completo.";
  }

  if (!phone) {
    newErrors.phone = "Ingresa tu número de teléfono.";
  } else if (!/^[0-9+\-\s()]{8,20}$/.test(phone)) {
    newErrors.phone = "Ingresa un número de teléfono válido.";
  }

  if (!email) {
    newErrors.email = "Ingresa tu correo electrónico.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    newErrors.email = "Ingresa un correo electrónico válido.";
  }

  if (!province) {
    newErrors.province = "Selecciona una provincia.";
  }

  if (!canton) {
    newErrors.canton = "Ingresa tu cantón.";
  }

  if (!district) {
    newErrors.district = "Ingresa tu distrito.";
  }

  if (!address) {
    newErrors.address = "Ingresa la dirección exacta.";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) {
    setSubmitted(false);

    const firstError = document.getElementById(
      Object.keys(newErrors)[0]
    );

    firstError?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    firstError?.focus();

    return false;
  }

  return true;
};

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-[#faf8f4] px-6 pb-20 pt-36 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f1ece4] text-[#a28b68]">
            <Check size={25} strokeWidth={1.4} />
          </div>

          <p className="mt-7 text-[11px] font-medium uppercase tracking-[0.3em] text-[#a28b68]">
            Perfumería Salas
          </p>

          <h1 className="mt-4 font-serif text-4xl text-[#1c1814] sm:text-5xl">
            Tu carrito está vacío
          </h1>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#766d64]">
            Necesitas agregar al menos un producto antes de continuar
            con tu compra.
          </p>

          <Link
            href="/catalogo"
            className="mt-8 inline-flex items-center justify-center bg-[#1c1814] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-white transition hover:bg-[#c9a96e] hover:text-[#1c1814]"
          >
            Explorar catálogo
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf8f4] px-6 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/carrito"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#766d64] transition hover:text-[#a28b68]"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          Volver al carrito
        </Link>

        <div className="mt-8 border-b border-[#ded6cc] pb-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#a28b68]">
            Finaliza tu compra
          </p>

          <h1 className="mt-3 font-serif text-4xl text-[#1c1814] sm:text-5xl">
            Checkout
          </h1>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_380px]">
          <form ref={formRef}>
            {/* Datos personales */}
            <div className="border-b border-[#ded6cc] pb-10">
              <div className="mb-7">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#a28b68]">
                  01
                </p>

                <h2 className="mt-2 font-serif text-2xl text-[#1c1814]">
                  Información de contacto
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#766d64]">
                  Utilizaremos estos datos para comunicarnos contigo
                  sobre tu pedido.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-medium text-[#5a5248]"
                  >
                    Nombre completo
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Tu nombre completo"
                    className="h-12 w-full border border-[#ddd5ca] bg-white px-4 text-sm text-[#1c1814] outline-none transition placeholder:text-[#a49b92] focus:border-[#c9a96e]"
                  />
                   {errors.name && (
                  <p className="mt-2 text-xs text-red-600">
                   {errors.name}
                  </p>
)}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-medium text-[#5a5248]"
                  >
                    Teléfono
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Ej. 8888-8888"
                    className="h-12 w-full border border-[#ddd5ca] bg-white px-4 text-sm text-[#1c1814] outline-none transition placeholder:text-[#a49b92] focus:border-[#c9a96e]"
                  />
                   {errors.phone && (
                  <p className="mt-2 text-xs text-red-600">
                   {errors.phone}
                  </p>
)}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-medium text-[#5a5248]"
                  >
                    Correo electrónico
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    className="h-12 w-full border border-[#ddd5ca] bg-white px-4 text-sm text-[#1c1814] outline-none transition placeholder:text-[#a49b92] focus:border-[#c9a96e]"
                  />
                   {errors.email && (
                  <p className="mt-2 text-xs text-red-600">
                   {errors.email}
                  </p>
)}
                </div>
              </div>
            </div>

            {/* Entrega */}
            <div className="border-b border-[#ded6cc] py-10">
              <div className="mb-7">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#a28b68]">
                  02
                </p>

                <h2 className="mt-2 font-serif text-2xl text-[#1c1814]">
                  Información de entrega
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#766d64]">
                  Indica dónde deseas recibir tu pedido.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <div>
                  <label
                    htmlFor="province"
                    className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-[#766d64]"
                >
                     Provincia *
                        </label>

                <select
                 id="province"
                  name="province"
                  defaultValue=""
                 className={`h-12 w-full border bg-white px-4 text-sm text-[#1c1814] outline-none transition ${
                       errors.province
                     ? "border-red-400 focus:border-red-500"
                     : "border-[#ded6cc] focus:border-[#c9a96e]"
                         }`}
                 >
                    
    <option value="" disabled>
      Selecciona una provincia
    </option>
    <option value="San José">San José</option>
    <option value="Alajuela">Alajuela</option>
    <option value="Cartago">Cartago</option>
    <option value="Heredia">Heredia</option>
    <option value="Guanacaste">Guanacaste</option>
    <option value="Puntarenas">Puntarenas</option>
    <option value="Limón">Limón</option>
  </select>

  {errors.province && (
    <p className="mt-1.5 text-xs text-red-500">
      {errors.province}
    </p>
  )}
            </div>

                <div>
                  <label
                    htmlFor="canton"
                    className="mb-2 block text-xs font-medium text-[#5a5248]"
                  >
                    Cantón
                  </label>

                  <input
                    id="canton"
                    name="canton"
                    type="text"
                    placeholder="Tu cantón"
                    className="h-12 w-full border border-[#ddd5ca] bg-white px-4 text-sm text-[#1c1814] outline-none transition placeholder:text-[#a49b92] focus:border-[#c9a96e]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="district"
                    className="mb-2 block text-xs font-medium text-[#5a5248]"
                  >
                    Distrito
                  </label>

                  <input
                    id="district"
                    name="district"
                    type="text"
                    placeholder="Tu distrito"
                    className="h-12 w-full border border-[#ddd5ca] bg-white px-4 text-sm text-[#1c1814] outline-none transition placeholder:text-[#a49b92] focus:border-[#c9a96e]"
                  />
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="address"
                    className="mb-2 block text-xs font-medium text-[#5a5248]"
                  >
                    Dirección exacta
                  </label>

                  <textarea
                    id="address"
                    name="address"
                    rows={3}
                    placeholder="Indica la dirección exacta donde deseas recibir tu pedido."
                    className="w-full resize-none border border-[#ddd5ca] bg-white px-4 py-3 text-sm leading-6 text-[#1c1814] outline-none transition placeholder:text-[#a49b92] focus:border-[#c9a96e]"
                  />
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="reference"
                    className="mb-2 block text-xs font-medium text-[#5a5248]"
                  >
                    Referencia adicional
                    <span className="ml-1 font-normal text-[#a49b92]">
                      (opcional)
                    </span>
                  </label>

                  <input
                    id="reference"
                    name="reference"
                    type="text"
                    placeholder="Ej. casa color blanco, frente al parque..."
                    className="h-12 w-full border border-[#ddd5ca] bg-white px-4 text-sm text-[#1c1814] outline-none transition placeholder:text-[#a49b92] focus:border-[#c9a96e]"
                  />
                </div>
              </div>
            </div>

            {/* Pago */}
            <div className="pt-10">
              <div className="mb-7">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#a28b68]">
                  03
                </p>

                <h2 className="mt-2 font-serif text-2xl text-[#1c1814]">
                  Método de pago
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#766d64]">
                  Selecciona cómo deseas realizar el pago de tu pedido.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* SINPE */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("sinpe")}
                  className={`text-left border p-5 transition ${
                    paymentMethod === "sinpe"
                      ? "border-[#c9a96e] bg-[#fbf8f2]"
                      : "border-[#ddd5ca] bg-white hover:border-[#c9a96e]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-10 w-10 items-center justify-center bg-[#f1ece4] text-[#a28b68]">
                      <CreditCard size={19} strokeWidth={1.4} />
                    </div>

                    {paymentMethod === "sinpe" && (
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#c9a96e] text-[#1c1814]">
                        <Check size={13} strokeWidth={2} />
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 font-serif text-xl text-[#1c1814]">
                    SINPE Móvil
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#766d64]">
                    Realiza el pago mediante SINPE Móvil. Los datos
                    para el pago se proporcionarán al confirmar el
                    pedido.
                  </p>
                </button>

                {/* Efectivo */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("efectivo")}
                  className={`text-left border p-5 transition ${
                    paymentMethod === "efectivo"
                      ? "border-[#c9a96e] bg-[#fbf8f2]"
                      : "border-[#ddd5ca] bg-white hover:border-[#c9a96e]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-10 w-10 items-center justify-center bg-[#f1ece4] text-[#a28b68]">
                      <Banknote size={19} strokeWidth={1.4} />
                    </div>

                    {paymentMethod === "efectivo" && (
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#c9a96e] text-[#1c1814]">
                        <Check size={13} strokeWidth={2} />
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 font-serif text-xl text-[#1c1814]">
                    Efectivo
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#766d64]">
                    Paga en efectivo según las condiciones de entrega
                    acordadas con Perfumería Salas.
                  </p>
                </button>
              </div>

              {/* Información del método seleccionado */}
              <div className="mt-5 border border-[#e5dfd6] bg-[#f8f5ef] p-5">
                {paymentMethod === "sinpe" ? (
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#a28b68]">
                      Pago por SINPE Móvil
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#766d64]">
                      Al confirmar tu pedido recibirás las
                      instrucciones necesarias para realizar el pago.
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#a28b68]">
                      Pago en efectivo
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#766d64]">
                      El pago se realizará en efectivo de acuerdo con
                      las condiciones de entrega previamente
                      coordinadas.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </form>

          {/* RESUMEN */}
          <aside className="h-fit border border-[#ded6cc] bg-white p-6 sm:p-8 lg:sticky lg:top-36">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#a28b68]">
              Resumen
            </p>

            <h2 className="mt-2 font-serif text-2xl text-[#1c1814]">
              Tu pedido
            </h2>

            <div className="mt-7 space-y-5">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4"
                >
                  <div className="relative h-20 w-16 shrink-0 overflow-hidden bg-[#f1ece4]">
                    <img
                      src={item.product.image}
                      alt={`${item.product.brand} ${item.product.name}`}
                      className="h-full w-full object-cover"
                    />

                    <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#1c1814] px-1 text-[9px] text-white">
                      {item.quantity}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#a28b68]">
                      {item.product.brand}
                    </p>

                    <p className="mt-1 font-serif text-base text-[#1c1814]">
                      {item.product.name}
                    </p>

                    <p className="mt-1 text-xs text-[#766d64]">
                      {formatPrice(
                        item.product.price * item.quantity
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 space-y-4 border-t border-[#ded6cc] pt-6 text-sm">
              <div className="flex justify-between gap-4 text-[#766d64]">
                <span>Productos</span>
                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between gap-4 text-[#766d64]">
                <span>Subtotal</span>
                <span className="text-[#1c1814]">
                  {formatPrice(subtotal)}
                </span>
              </div>

              <div className="flex justify-between gap-4 text-[#766d64]">
                <span>Envío</span>
                <span>Por confirmar</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4 border-t border-[#ded6cc] pt-6">
              <span className="font-serif text-xl text-[#1c1814]">
                Total
              </span>

              <span className="text-lg font-semibold text-[#1c1814]">
                {formatPrice(subtotal)}
              </span>
            </div>

            <button
              type="button"
              className="mt-7 flex h-13 w-full items-center justify-center bg-[#1c1814] px-6 text-xs font-medium uppercase tracking-[0.15em] text-white transition hover:bg-[#c9a96e] hover:text-[#1c1814]"
            >
              Confirmar pedido
            </button>

            <p className="mt-4 text-center text-[11px] leading-5 text-[#a49b92]">
              Al confirmar, revisaremos los datos de tu solicitud
              antes de procesar el pedido.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}