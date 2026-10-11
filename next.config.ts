import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site lives under /en and /th; the bare root just picks the default.
  async redirects() {
    return [{ source: "/", destination: "/en", permanent: false }];
  },
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
