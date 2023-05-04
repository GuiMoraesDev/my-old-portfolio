import { HeroImage } from "@/components/atoms/HeroImage";
import { lato } from "@/fonts/fonts";

export const HeroSection = () => {
  return (
    <div className="grid h-full items-end">
      <section className="flex flex-col items-center justify-center gap-8">
        <h1
          className="text-center text-xl text-brand-black-light dark:text-brand-white-dark"
          style={lato.style}
        >
          Hi, <br /> I am Guilherme Moraes
        </h1>

        <h2 className="px-2 text-center text-black dark:text-white">
          Passionate frontend developer with a experience for tackling complex
          challenges and delivering innovative solutions.
        </h2>
      </section>

      <section>
        <HeroImage />
      </section>
    </div>
  );
};
