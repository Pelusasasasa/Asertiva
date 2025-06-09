import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  output: "export",
  images: {
    unoptimized: true,
  },
  // basePath: '/Asertiva',
  trailingSlash: true,

  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;
