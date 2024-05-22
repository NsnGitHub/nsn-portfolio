import React, { createContext, useState } from "react";
import { TTheme } from "../types/TTheme";

type TThemeContext = {
  theme: TTheme;
  setTheme: React.Dispatch<React.SetStateAction<TTheme>>;
};

export const ThemeContext = createContext<TThemeContext | null>(null);

export default function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<TTheme>("dark");

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
