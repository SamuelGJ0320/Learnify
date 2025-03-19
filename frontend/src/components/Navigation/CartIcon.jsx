"use client";
import React from "react";
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useCart } from "@/providers/CartProvider";
import { Button } from "@/components/ui/Button";

function CartIcon() {
  const { totalItems } = useCart();

  return (
    <Link href="/cart">
      <Button variant="ghost" className="relative p-2">
        <MdOutlineShoppingCart className="size-6" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {totalItems}
          </span>
        )}
      </Button>
    </Link>
  );
}

export default CartIcon;
