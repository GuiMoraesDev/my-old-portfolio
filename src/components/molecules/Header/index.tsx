"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import { MoonStars, SunDim } from "@phosphor-icons/react";

export const Header = () => {
  const [isDarkMode, handleToggleDarkMode] = useDarkMode();

  return (
    <header className="mb-11 flex w-full items-center justify-end">
      <button onClick={handleToggleDarkMode}>
        {isDarkMode ? (
          <MoonStars size={36} className="text-brand-white-dark" />
        ) : (
          <SunDim size={36} className="text-brand-black-light" />
        )}
      </button>
    </header>
  );
};
