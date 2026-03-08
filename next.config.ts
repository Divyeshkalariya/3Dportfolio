import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/3Dportfolio",
  assetPrefix: "/3Dportfolio",
  transpilePackages: ["three"],
  turbopack: {},
};

export default nextConfig;
