import type { NextConfig } from "next";

const nextConfig: NextConfig =  {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/your-repo-name',
  assetPrefix: '/your-repo-name/',
};

module.exports = nextConfig;

export default nextConfig;
