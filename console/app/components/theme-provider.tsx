import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState>({
  theme: "system",
  setTheme: () => {},
});

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);

  // load saved theme
  useEffect(() => {
    const storedTheme = localStorage.getItem(storageKey) as Theme | null;
    if (storedTheme) setThemeState(storedTheme);
  }, [storageKey]);

  // apply theme
  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (theme: Theme) => {
      root.classList.remove("light", "dark");

      const activeTheme =
        theme === "system"
          ? mediaQuery.matches
            ? "dark"
            : "light"
          : theme;

      root.classList.add(activeTheme);
    };

    applyTheme(theme);

    const handleChange = () => {
      if (theme === "system") applyTheme("system");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const setTheme = (theme: Theme) => {
    localStorage.setItem(storageKey, theme);
    setThemeState(theme);
  };

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeProviderContext);