"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@nayhoo/ui/dropdown-menu";
import { IconButton } from "@nayhoo/ui/icon-button";
import { useTheme } from "@nayhoo/ui/providers";
import { useEffect, useState } from "react";
import { formatTheme } from "../utils/format-theme";
import { getThemeIcon } from "../utils/get-theme-icon";

export const ThemeDropdown = () => {
  const { setTheme, themes, theme } = useTheme();

  const [t, setT] = useState<typeof theme | null>(null);

  useEffect(() => {
    setT(theme);
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <IconButton round size="2">
          {getThemeIcon(t)}
        </IconButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {themes.map((theme) => (
          <DropdownMenuItem key={theme} onClick={() => setTheme(theme)}>
            {formatTheme(theme)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
