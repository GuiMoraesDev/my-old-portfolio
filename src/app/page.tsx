"use client";

import { Suspense } from "react";

import { Header } from "@/components/molecules/Header";
import { Section as AboutSection } from "@/components/organisms/AboutSection";
import { Section as HeroSection } from "@/components/organisms/HeroSection";
import {
  Section as ProjectsSection,
  Loading as ProjectsLoading,
} from "@/components/organisms/ProjectsSection";
import { ThemeProvider } from "@/context/theme";

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
