import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: "organicnutrition.com.bd",

        },
        {
            protocol: 'https',
            hostname: "img.freepik.com",

        },
        {
            protocol: 'https',
            hostname: "www.xuqelafije.org.uk",

        },
      ]
    }
};

export default nextConfig;
