"use client";

import { Flex } from "@nayhoo/ui/flex";
import { IconButton } from "@nayhoo/ui/icon-button";
import { useTheme } from "@nayhoo/ui/providers";
import { theme as token } from "@nayhoo/ui/theme";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

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
      {/* light theme button */}
      <IconButton
        onClick={() => setTheme("light")}
        round
        size="2"
        style={{
          background:
            t === "light" ? token.semanticColors.transparentActive : "",
        }}
      >
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </IconButton>

      {/* system theme button */}
      <IconButton
        onClick={() => setTheme("system")}
        round
        size="2"
        style={{
          background:
            t === "system" ? token.semanticColors.transparentActive : "",
        }}
      >
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M17 24h-10v-1c1.533-.366 2.386-1.572 2.497-3h5.006c.111 1.427.964 2.634 2.497 3v1zm6-5c.265 0 .52-.105.707-.293.188-.187.293-.442.293-.707v-17c0-.265-.105-.52-.293-.707-.187-.188-.442-.293-.707-.293h-22c-.265 0-.52.105-.707.293-.188.187-.293.442-.293.707v17c0 .265.105.52.293.707.187.188.442.293.707.293h22zm-11-3.419c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm10-13.581h-20v12h20v-12z" />
        </svg>
      </IconButton>

      {/* dark theme button */}
      <IconButton
        onClick={() => setTheme("dark")}
        round
        size="2"
        style={{
          background:
            t === "dark" ? token.semanticColors.transparentActive : "",
        }}
      >
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
      </IconButton>
    </Flex>
  );
};
