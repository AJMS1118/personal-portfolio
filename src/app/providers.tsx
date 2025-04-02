"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { ToastProvider } from "./context/ToastContext";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <ToastProvider> {children}</ToastProvider>
    </ThemeProvider>
  );
}
