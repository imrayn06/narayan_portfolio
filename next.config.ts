import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [450, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
      {
        protocol: "https",
        hostname: "hubspot-credentials-na1.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  allowedDevOrigins: ['192.168.31.136', '192.168.0.103'],
};

export default nextConfig;
