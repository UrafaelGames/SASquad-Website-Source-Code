import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, 
  swcMinify: true,       
  images: {
    domains: ['sasquad-team.com', 'img.icons8.com'], 
  },
  output: 'export', 
  webpack(config, { isServer }) {
    // Custom webpack configuration 
    return config;
  },
};

export default nextConfig;
