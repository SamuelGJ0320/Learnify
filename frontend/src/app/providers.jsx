"use client"

import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { ThemeProvider } from "@/components/ThemeProvider"


export default function Providers({ children }) {

    const [queryClient] = useState(() => new QueryClient())



    return (
           <ThemeProvider
            attribute={"class"}
            defaultTheme={"system"}
            enableSystem
            disableTransitionOnChange
            >
          <QueryClientProvider client={queryClient}>
            
         
            {children}
        </QueryClientProvider>
            </ThemeProvider>
    )
    }
