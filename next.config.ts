import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/liat-leshem-site",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
