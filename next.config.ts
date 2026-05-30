import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "fiverr-res.cloudinary.com", pathname: "/**" },
      { protocol: "https", hostname: "play-lh.googleusercontent.com", pathname: "/**" },
      { protocol: "https", hostname: "www.restaurantnews.com", pathname: "/**" },
      { protocol: "https", hostname: "threebestrated.de", pathname: "/**" },
      { protocol: "https", hostname: "learn.microsoft.com", pathname: "/**" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
