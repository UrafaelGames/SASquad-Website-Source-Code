import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['sasquad-team.com', 'img.icons8.com'],
  },
  webpack(config, { isServer }) {
    return config;
  },
  output: 'export', 
};

export default nextConfig;
