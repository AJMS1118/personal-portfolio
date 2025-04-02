"use client";
import { ThemeProvider, ToastProvider } from "./context";
import { NavBar, HeroSection, About, Services, Work } from "./components";
export default function Home() {
  return (
    <>
      <ThemeProvider>
        <ToastProvider>
          <NavBar />
          <HeroSection />
          <About />
          <Services />
          <Work />
        </ToastProvider>
      </ThemeProvider>
    </>
  );
}
