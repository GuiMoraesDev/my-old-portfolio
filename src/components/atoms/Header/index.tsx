"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import { MoonStars, SunDim } from "@phosphor-icons/react";
import { useMemo } from "react";

export const Header = () => {
  const [isDarkMode, handleToggleDarkMode] = useDarkMode();

  return (
    <header className="w-full flex items-center justify-end p-2">
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
