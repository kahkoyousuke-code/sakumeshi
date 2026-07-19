import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Force the old *.vercel.app host to 301 to the primary custom domain
        // so Google consolidates all ranking signals onto sakumeshi.app.
        source: "/:path*",
        has: [{ type: "host", value: "sakumeshi.vercel.app" }],
        destination: "https://sakumeshi.app/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
