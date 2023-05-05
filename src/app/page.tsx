"use client";

import { Header } from "@/components/molecules/Header";
import { AboutSection } from "@/components/organisms/AboutSection";
import { HeroSection } from "@/components/organisms/HeroSection";
import {
  Section as ProjectsSection,
  Loading as ProjectsLoading,
} from "@/components/organisms/ProjectsSection";
import { ThemeProvider } from "@/context/theme";
import { Suspense } from "react";

export default async function Home() {
  return (
    <ThemeProvider>
      <main className="flex min-h-screen flex-col items-center bg-white dark:bg-brand-black-light">
        <Header />

        <HeroSection />

        <AboutSection />

        <Suspense fallback={<ProjectsLoading />}>
          {/* @ts-expect-error Async Server Component */}
          <ProjectsSection />
        </Suspense>
      </main>
    </ThemeProvider>
  );
}
