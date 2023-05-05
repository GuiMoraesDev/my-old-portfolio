import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

import { HeroImage } from "@/components/atoms/HeroImage";

export const Section = () => {
  return (
    <div className="flex h-full flex-col items-center justify-end overflow-hidden">
      <div className="flex h-full flex-col items-center justify-end gap-8">
        <section className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-center font-lato text-xl text-brand-black-light dark:text-brand-white-dark">
            Hi, <br /> I am Guilherme Moraes
          </h1>

          <h2 className="px-2 text-center font-medium text-black dark:text-white">
            Passionate frontend developer with a experience for tackling complex
            challenges and delivering innovative solutions.
          </h2>
        </section>

        <section className="mx-auto">
          <HeroImage />
        </section>
      </div>

      <section className="flex w-full flex-col items-center justify-center gap-5 border-t border-brand-pink p-20 dark:border-none">
        <p className="text-xl font-medium text-black dark:text-white">
          Get in touch
        </p>

        <nav className="flex gap-14">
          <a
            href="https://github.com/GuiMoraesDev"
            className="flex flex-col items-center justify-center text-brand-black-light dark:text-brand-white-dark"
            target="_blank"
          >
            <GithubLogo size={44} />
            <p>Github</p>
          </a>

          <a
            href="https://www.linkedin.com/in/guimoraesdev/"
            className="flex flex-col items-center justify-center text-brand-black-light dark:text-brand-white-dark"
            target="_blank"
          >
            <LinkedinLogo size={44} />
            <p>LinkedIn</p>
          </a>
        </nav>
      </section>
    </div>
  );
};
