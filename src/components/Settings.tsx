import { RadixIconHeightAndWidth } from "../constants";
import { useThemeContext } from "../hooks/useTheme";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export default function Settings() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <ul>
      <li>
        {theme !== "light" ? (
          <SunIcon
            height={RadixIconHeightAndWidth}
            width={RadixIconHeightAndWidth}
            onClick={() => toggleTheme(theme)}
          />
        ) : (
          <MoonIcon
            height={RadixIconHeightAndWidth}
            width={RadixIconHeightAndWidth}
            onClick={() => toggleTheme(theme)}
          />
        )}
      </li>
    </ul>
  );
}
