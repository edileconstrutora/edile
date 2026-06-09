import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 exige whitelist das qualidades usadas no <Image quality>.
    qualities: [75, 90],
  },
};

export default nextConfig;
