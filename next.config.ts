import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import type { NextConfig } from "next";

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  // https://vanilla-extract.style/documentation/integrations/next/
  transpilePackages: ["@nayhoo/ui"],
};

export default withVanillaExtract(nextConfig);
