"use client";

import { LightbulbFilament } from "@phosphor-icons/react";
import { motion } from "framer-motion";

import { useTheme } from "@/context/theme";

export const ThemeButton = () => {
  const { handleToggleTheme } = useTheme();

  return (
    <button
      onClick={handleToggleTheme}
      className={`relative flex h-10 w-10 items-center justify-center rounded-full bg-brand-white-dark text-black shadow-md transition-all dark:bg-brand-black-lighter`}
    >
      <LightbulbFilament size={26} className="z-10" />

      <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-2/3 rounded-full bg-brand-yellow blur-sm transition-all dark:bg-brand-white-darker" />

      <span className="absolute left-1/2 top-1/2 aspect-square h-[550vw] w-[550vw] -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-brand-black-light blur-sm transition-all duration-300 ease-linear dark:scale-100 dark:animate-vanish-delay" />
    </button>
  );
};
