"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { cn } from "@/utils/cn";
import { useState } from "react";

export default function OrderSummary({ totalPrice = 0, itemCount = 0 }) {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <Card className="bg-black p-6 gap-y-10">
      <CardHeader className="px-0">
        <CardTitle className={"text-4xl"}>Order Summary</CardTitle>
        <div className="flex justify-between text-sm text-muted-foreground">
          <p>
            Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})
          </p>
          <p className="text-muted-foreground ">${totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-sm mt-2">
          <p className="font-semibold">TOTAL</p>
          <p className="text-muted-foreground ">${totalPrice.toFixed(2)}</p>
        </div>
      </CardHeader>
      <CardContent className="px-0">
        <p className="text-sm mb-1">Card number</p>
        <Input type="text" placeholder="Card number" className="mb-4" />
        <div className="flex justify-between my-4 gap-2">
          <button
            className={cn(
              "flex-1 py-3 border text-center flex flex-col items-center justify-center gap-1 rounded-lg",
              paymentMethod === "card" ? "border-white" : "shadow-sm"
            )}
            onClick={() => setPaymentMethod("card")}
          >
            <img src="/credit-card.svg" alt="Credit Card" className="w-6 h-6" />
            Card
          </button>
          <button
            className={cn(
              "flex-1 py-3 border text-center flex flex-col items-center justify-center gap-1 rounded-lg",
              paymentMethod === "paypal" ? "border-white" : "shadow-sm"
            )}
            onClick={() => setPaymentMethod("paypal")}
          >
            <img src="/paypal.svg" alt="PayPal" className="w-6 h-6" />
            PayPal
          </button>
          <button
            className={cn(
              "flex-1 py-3 border text-center flex flex-col items-center justify-center gap-1 rounded-lg",
              paymentMethod === "apple" ? "border-white" : "shadow-sm"
            )}
            onClick={() => setPaymentMethod("apple")}
          >
            <img src="/apple.svg" alt="Apple Pay" className="w-6 h-6" />
            Apple
          </button>
        </div>
        {paymentMethod === "card" && (
          <div className="flex gap-2">
            <div className="flex-1">
              <p className="text-sm mb-1">Expires</p>
              <Input type="text" placeholder="Month" className="w-full" />
            </div>
            <div className="flex-1">
              <p className="text-sm mb-1">Year</p>
              <Input type="text" placeholder="Year" className="w-full" />
            </div>
            <div className="flex-1">
              <p className="text-sm mb-1">CVC</p>
              <Input type="text" placeholder="CVC" className="w-full" />
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="px-0">
        <Button
          className="w-full bg-gray-700 hover:bg-gray-600"
          onClick={() =>
            alert("Checkout functionality will be implemented soon!")
          }
        >
          Checkout Now
        </Button>
      </CardFooter>
    </Card>
  );
}
