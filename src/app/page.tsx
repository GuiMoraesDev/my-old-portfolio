"use client";

import { Header } from "@/components/molecules/Header";
import { AboutSection } from "@/components/organisms/AboutSection";
import { HeroSection } from "@/components/organisms/HeroSection";
import { ThemeProvider } from "@/context/theme";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="flex min-h-screen flex-col items-center bg-white dark:bg-brand-black-light">
        <Header />

        <HeroSection />

        <AboutSection />
      </main>
    </ThemeProvider>
  );
}
