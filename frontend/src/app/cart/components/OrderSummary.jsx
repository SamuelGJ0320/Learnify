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
import { Input } from '@/components/ui/Input';
import { cn } from "@/utils/cn";
import { useState } from "react";

export default function OrderSummary() {
    const [orderSummary, setOrderSummary] = useState("card");
    return (
        <Card className="max-w-md mx-auto bg-black p-4 gap-y-10">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
            <div className="flex justify-between text-sm text-muted-foreground">
              <p>Subtotal (2 items)</p>
              <p className="text-muted-foreground ">$20.00</p>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <p className="font-semibold">TOTAL</p>
              <p className="text-muted-foreground ">$20.00</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-1">Card number</p>
            <Input type="text" placeholder="Card number" className="   " />
            <div className="flex justify-between my-4 gap-2">
              <button 
                className={cn("flex-1 py-3 border text-center flex flex-col items-center justify-center gap-1 rounded-lg", orderSummary === "card" ? "border-white" : "shadow-sm")}
                onClick={() => setOrderSummary("card")}
              >
                <img src="/credit-card.svg" alt="PayPal" className="w-6 h-6" />

                Card
              </button>
              <button 
                className={cn("flex-1 py-3 border text-center flex flex-col items-center justify-center gap-1 rounded-lg", orderSummary === "paypal" ? "border-white" : "shadow-sm")}
                onClick={() => setOrderSummary("paypal")}
              >
                <img src="/paypal.svg" alt="PayPal" className="w-6 h-6" />
                PayPal
              </button>
              <button 
                className={cn("flex-1 py-3 border text-center flex flex-col items-center justify-center gap-1 rounded-lg", orderSummary === "apple" ? "border-white" : "shadow-sm")}
                onClick={() => setOrderSummary("apple")}
              >
                <img src="/apple.svg" alt="PayPal" className="w-6 h-6" />
                Apple
              </button>
            </div>
            <div className="flex gap-2">
              <div className="flex-1">
                <p className="text-sm mb-1">Expires</p>
                <Input type="text" placeholder="Month" className="  w-full" />
              </div>
              <div className="flex-1">
                <p className="text-sm mb-1">Year</p>
                <Input type="text" placeholder="Year" className="  w-full" />
              </div>
              <div className="flex-1">
                <p className="text-sm mb-1">CVC</p>
                <Input type="text" placeholder="CVC" className="  w-full" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gray-700 hover:bg-gray-600">Continue</Button>
          </CardFooter>
        </Card>
      );
    }
    