/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Remove complex webpack configurations that cause Plesk issues
  webpack: (config, { isServer }) => {
    // Only essential configurations
    config.externals = [
      ...(config.externals || []),
      "bufferutil",
      "utf-8-validate",
    ];

    return config;
  },
  // Disable experimental features that may cause compatibility issues
  experimental: {},
  // Standard output for traditional hosting
  output: "standalone",
  // Disable source maps in production to reduce memory usage
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
