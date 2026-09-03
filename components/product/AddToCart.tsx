"use client";

import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import type { Product } from "@/data/products";

type AddToCartProps = {
  product: Product;
};

export default function AddToCart({ product }: AddToCartProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const { addToCart } = useCart();

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);

    setAdded(true);

    window.setTimeout(() => {
      setAdded(false);
    }, 1800);
  };

  const isSoldOut = product.availability === "agotado";

  return (
    <div className="mt-8">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-[#766d64]">
        Cantidad
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex h-12 w-full items-center justify-between border border-[#ded6cc] bg-white sm:w-36">
          <button
            type="button"
            onClick={decreaseQuantity}
            disabled={quantity === 1 || isSoldOut}
            className="flex h-full w-12 items-center justify-center text-[#1c1814] transition hover:bg-[#f4efe7] disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Disminuir cantidad"
          >
            <Minus size={15} />
          </button>

          <span className="text-sm font-medium text-[#1c1814]">
            {quantity}
          </span>

          <button
            type="button"
            onClick={increaseQuantity}
            disabled={isSoldOut}
            className="flex h-full w-12 items-center justify-center text-[#1c1814] transition hover:bg-[#f4efe7] disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Aumentar cantidad"
          >
            <Plus size={15} />
          </button>
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          disabled={isSoldOut}
          className={`flex h-12 flex-1 items-center justify-center gap-2 px-6 text-xs font-medium uppercase tracking-[0.14em] transition ${
            added
              ? "bg-[#c9a96e] text-[#1c1814]"
              : "bg-[#1c1814] text-white hover:bg-[#c9a96e] hover:text-[#1c1814]"
          } disabled:cursor-not-allowed disabled:bg-[#d8d2ca] disabled:text-[#8c847b]`}
        >
          <ShoppingBag size={16} strokeWidth={1.5} />

          {isSoldOut
            ? "Producto agotado"
            : added
              ? "Agregado al carrito"
              : "Agregar al carrito"}
        </button>
      </div>

      {added && (
        <p className="mt-3 text-xs text-[#766d64]">
          {quantity === 1
            ? "1 producto agregado a tu carrito."
            : `${quantity} productos agregados a tu carrito.`}
        </p>
      )}
    </div>
  );
}