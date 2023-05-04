"use client";

import { useEffect, useState } from "react";

type UseDarkModeReturn = [boolean, () => void];

export const useDarkMode = (): UseDarkModeReturn => {
  const [rootElement, setRootElement] = useState<Element | null>(null);

  useEffect(() => {
    setRootElement(document?.querySelector("html#root"));
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(
    () => !!rootElement?.classList.contains("dark")
  );

  const handleToggleDarkMode = () => {
    if (rootElement) {
      rootElement?.classList.toggle("dark");

      setIsDarkMode((state) => !state);
    }
  };

  return [isDarkMode, handleToggleDarkMode];
};
