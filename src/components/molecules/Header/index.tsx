"use client";

import { useTheme } from "@/context/theme";
import { MoonStars, SunDim } from "@phosphor-icons/react";

export const Header = () => {
  const { theme, handleToggleTheme } = useTheme();

  return (
    <header className="mb-12 flex w-full items-center justify-end p-3">
      <button onClick={handleToggleTheme}>
        {theme === "light" ? (
          <SunDim size={36} className="text-brand-black-light" />
        ) : (
          <MoonStars size={36} className="text-brand-white-dark" />
        )}
      </button>
    </header>
  );
};
