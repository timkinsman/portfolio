import {
  darkTheme as defaultDarkTheme,
  lightTheme as defaultLightTheme,
  theme,
} from "@nayhoo/ui";
import { createContext } from "react";

export const ThemeContext = createContext<string>("");

type ThemeProviderProps = {
  children: React.ReactNode;
  mode?: "light" | "dark";
  lightTheme?: string;
  darkTheme?: string;
};

export const ThemeProvider = ({
  children,
  mode = "light",
  lightTheme = defaultLightTheme,
  darkTheme = defaultDarkTheme,
}: ThemeProviderProps) => {
  const isDarkMode = mode === "dark";

  return (
    <ThemeContext value={mode}>
      <div
        className={isDarkMode ? darkTheme : lightTheme}
        style={{
          backgroundColor: theme.semanticColors.background,
          color: theme.semanticColors.backgroundTextContrast,
        }}
      >
        {children}
      </div>
    </ThemeContext>
  );
};
