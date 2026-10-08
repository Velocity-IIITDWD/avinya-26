import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  transpilePackages: ["@workspace/ui"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
}

export default nextConfig
