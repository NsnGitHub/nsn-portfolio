import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContextProvider";

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Theme context used outside of ThemeContextProvider.");
  }

  return context;
};
