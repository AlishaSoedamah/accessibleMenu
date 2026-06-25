import type { NextConfig } from "next";

const nextConfig: NextConfig =  {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/accessibleMenu',
  assetPrefix: '/accessibleMenu/',
};

export default nextConfig;
