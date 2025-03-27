import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb"
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "2h9s9b6niazchvvt.public.blob.vercel-storage.com",
      }
    ]
  }
};

export default nextConfig;
