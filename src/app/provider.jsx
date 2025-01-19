'use client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";
import { AuthProvider } from "@/hooks/use-auth";
import { ThemeProvider } from "next-themes";
import { ToastProvider } from "@/hooks/use-toast";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000 * 2,
        },
    },
});

export default function Providers({ children }) {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <NextUIProvider>
                    <ThemeProvider attribute="class" defaultTheme="light" >
                        <ToastProvider>
                            {children}
                        </ToastProvider>
                    </ThemeProvider>
                </NextUIProvider>
            </AuthProvider>
        </QueryClientProvider>
    );
}