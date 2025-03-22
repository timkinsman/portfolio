"use client";

import { queryClient } from "@/lib/react-query";
import { ThemeProvider } from "@nayhoo/ui/providers";
import * as React from "react";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV !== "test" && <ReactQueryDevtools />}

        {children}
      </QueryClientProvider>
    </ThemeProvider>
  );
};
