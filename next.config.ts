import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // "export" is only for GitHub Pages (static build).
  // In dev mode it causes infinite browser reloading, so we skip it.
  ...(isProd && { output: "export" }),
  basePath: isProd ? "/3Dportfolio" : "",
  assetPrefix: isProd ? "/3Dportfolio" : "",
  transpilePackages: ["three"],
  turbopack: {},
};

export default nextConfig;
