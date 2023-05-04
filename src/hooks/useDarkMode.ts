"use client";

import { useState } from "react";

const rootElement = document.querySelector("html#root");

type UseDarkModeReturn = [boolean, () => void];

export const useDarkMode = (): UseDarkModeReturn => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => !!rootElement?.classList.contains("dark")
  );

  const handleToggleDarkMode = () => {
    rootElement?.classList.toggle("dark");

    setIsDarkMode((state) => !state);
  };

  return [isDarkMode, handleToggleDarkMode];
};
