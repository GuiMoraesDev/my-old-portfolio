import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

import { HeroImage } from "@/components/atoms/HeroImage";

export const Section = () => {
  return (
    <div className="grid h-full w-full grid-cols-1 grid-rows-[200px_minmax(270px,_1fr)_270px] items-center justify-end overflow-hidden lg:grid-cols-2 lg:grid-rows-[minmax(500px,_1fr)_270px]">
      <section className="flex flex-col items-center justify-center gap-8 px-20 text-center lg:ml-auto lg:items-end lg:px-0 lg:text-start">
        <h1 className="flex w-full flex-col gap-3 font-lato text-xl text-brand-black-light dark:text-brand-white-dark lg:flex-row lg:text-3xl">
          <span>Hi,</span> I am Guilherme Moraes.
        </h1>

        <h2 className="font-medium text-black dark:text-white lg:max-w-xl lg:text-4xl">
          Passionate frontend developer with a experience for tackling complex
          challenges and delivering innovative solutions.
        </h2>
      </section>

      <section className="flex h-full flex-col items-center justify-end px-20 lg:items-start lg:px-0">
        <HeroImage />
      </section>

      <section className="flex h-full w-full flex-col items-center justify-center gap-5 border-t border-brand-pink p-20 dark:border-none lg:col-span-2 lg:grid-cols-2 lg:flex-row lg:gap-14 lg:p-0">
        <p className="text-xl font-medium text-black dark:text-white">
          Get in touch
        </p>

        <nav className="flex gap-14 lg:gap-10">
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
