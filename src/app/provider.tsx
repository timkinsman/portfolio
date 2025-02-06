"use client";

import { queryClient } from "@/lib/react-query";
import { ThemeProvider } from "@nayhoo/ui/providers";
import * as React from "react";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

type AppProviderProps = {
  children: React.ReactNode;
  theme?: "light" | "dark";
};

export const AppProvider = ({ children, theme }: AppProviderProps) => {
  return (
    <ThemeProvider themeMode={theme}>
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV !== "test" && <ReactQueryDevtools />}

        {children}
      </QueryClientProvider>
    </ThemeProvider>
  );
};
