"use client";

import { Flex } from "@nayhoo/ui/flex";
import { IconButton } from "@nayhoo/ui/icon-button";
import { useTheme } from "@nayhoo/ui/providers";
import { theme as token } from "@nayhoo/ui/theme";
import { useEffect, useState } from "react";
import { getThemeIcon } from "../utils/get-theme-icon";

export const ThemeToggle = () => {
  const { theme, setTheme, themes } = useTheme();

  const [t, setT] = useState<typeof theme | null>(null);

  useEffect(() => {
    setT(theme);
  }, [theme]);

  return (
    <Flex
      gap="1"
      style={{
        borderRadius: token.radii.full,
        outline: `1px solid ${token.semanticColors.line}`,
      }}
    >
      {themes.map((theme) => (
        <IconButton
          key={theme}
          onClick={() => setTheme(theme)}
          round
          size="2"
          style={{
            background:
              t === theme ? token.semanticColors.transparentActive : "",
          }}
        >
          {getThemeIcon(theme)}
        </IconButton>
      ))}
    </Flex>
  );
};
