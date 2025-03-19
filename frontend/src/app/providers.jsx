"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { SessionProvider } from "next-auth/react";
import CartProvider from "@/providers/CartProvider";

export default function Providers({ children }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <ThemeProvider
      attribute={"class"}
      defaultTheme={"system"}
      enableSystem
      disableTransitionOnChange
    >
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          <CartProvider>{children}</CartProvider>
        </QueryClientProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
