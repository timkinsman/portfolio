import { UseThemeProps } from "@nayhoo/ui/providers/theme-provider";

export const formatTheme = (theme: UseThemeProps["themes"][number]) => {
  switch (theme) {
    case "light":
      return "Light";
    case "dark":
      return "Dark";
    case "system":
      return "System";
  }
};
