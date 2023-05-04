"use client";

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type ThemeProps = {
  theme: "light" | "dark";
  handleToggleTheme: () => void;
};

const ThemeContext = createContext({} as ThemeProps);

export function ThemeProvider({ children }: PropsWithChildren) {
  const [rootElement, setRootElement] = useState<Element | null>(null);

  useEffect(() => {
    const rootEle = document.querySelector("html#root");

    setRootElement(rootEle);
  }, []);

  const [theme, setTheme] = useState<ThemeProps["theme"]>("light");

  const handleToggleTheme = () => {
    if (rootElement) {
      rootElement?.classList.toggle("dark");

      setTheme((state) => {
        return state === "light" ? "dark" : "light";
      });
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context.theme) {
    throw new Error("DEV Alert: useTheme must be used whithin a ThemeProvider");
  }
  
  return context;
}
