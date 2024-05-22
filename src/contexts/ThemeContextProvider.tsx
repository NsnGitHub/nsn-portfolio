import React, { createContext, useState } from "react";
import { TTheme } from "../types/TTheme";

type TThemeContext = {
  theme: TTheme;
  toggleTheme: (currentTheme: TTheme) => void;
};

export const ThemeContext = createContext<TThemeContext | null>(null);

export default function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<TTheme>("light");

  const toggleTheme = (currentTheme: TTheme) => {
    if (currentTheme === "light") {
      setTheme("dark");
      return;
    }

    setTheme("light");
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
