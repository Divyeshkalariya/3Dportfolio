import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel runs Next.js natively — no static export needed.
  // API routes like /api/contact work out of the box.
  transpilePackages: ["three"],
};

export default nextConfig;
