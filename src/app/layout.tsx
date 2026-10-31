import { env } from "@/env.mjs";
import "@/styles/globals.css";
import "@nayhoo/ui/style.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { AppProvider } from "./provider";

export const metadata: Metadata = {
  title: {
    template: "%s | Tim Kinsman",
    default: "Tim Kinsman",
  },
  description: "React front-end developer based in Adelaide.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId={env.NEXT_PUBLIC_GTM_ID} />
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
      <GoogleAnalytics gaId={env.NEXT_PUBLIC_ANALYTICS_ID} />
    </html>
  );
}
