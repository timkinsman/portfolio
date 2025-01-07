import { getTheme } from "@/actions/get-theme-action";
import "@/styles/globals.css";
import "@nayhoo/ui/dist/index.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { AppProvider } from "./provider";

const openSauceOne = localFont({
  src: [
    {
      path: "./fonts/OpenSauceOne/OpenSauceOne-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "./fonts/OpenSauceOne/OpenSauceOne-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/OpenSauceOne/OpenSauceOne-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-open-sauce-one",
});

export const metadata: Metadata = {
  title: "Tim Kinsman",
  description: "React front-end developer based in Adelaide.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = await getTheme();
  return (
    <html lang="en">
      <body className={`${openSauceOne.variable}`}>
        <AppProvider theme={theme}>{children}</AppProvider>
      </body>
    </html>
  );
}
