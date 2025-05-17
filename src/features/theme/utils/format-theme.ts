import { UseThemeProps } from "@nayhoo/ui/providers";

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
