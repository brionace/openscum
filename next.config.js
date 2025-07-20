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
  // Simplified webpack config for better Plesk compatibility
  webpack: (config, { isServer }) => {
    // Only essential configurations
    config.externals = [
      ...(config.externals || []),
      "bufferutil",
      "utf-8-validate",
    ];

    return config;
  },
  // Standard output for traditional hosting
  output: "standalone",
  // Disable source maps in production to reduce memory usage
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
