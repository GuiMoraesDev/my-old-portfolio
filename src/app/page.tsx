import { Header } from "@/components/molecules/Header";
import { HeroSection } from "@/components/organisms/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white p-3 dark:bg-brand-black-light">
      <Header />

      <HeroSection />
    </main>
  );
}
