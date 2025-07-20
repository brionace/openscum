/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable all non-essential features for Plesk
  reactStrictMode: false, // Can cause memory issues
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Minimal webpack configuration
  webpack: (config, { isServer, dev }) => {
    // Reduce memory usage during build
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        minimize: false, // Disable minification to save memory
        splitChunks: {
          chunks: "all",
          cacheGroups: {
            default: false,
            vendors: false,
            // Create one vendor chunk only
            vendor: {
              name: "vendor",
              chunks: "all",
              test: /node_modules/,
              priority: 20,
            },
          },
        },
      };

      // Disable source maps completely
      config.devtool = false;
    }

    // Externalize problematic dependencies
    config.externals = [
      ...(config.externals || []),
      "bufferutil",
      "utf-8-validate",
      "fsevents", // macOS specific
    ];

    // Reduce memory usage
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: false,
      stream: false,
      url: false,
      zlib: false,
      http: false,
      https: false,
      assert: false,
      os: false,
      path: false,
    };

    return config;
  },

  // Disable experimental features
  experimental: {},

  // Standard output for hosting
  output: "standalone",

  // Disable all source maps
  productionBrowserSourceMaps: false,

  // Optimize for smaller builds
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Reduce build parallelism to save memory
  ...(process.env.NODE_ENV === "production" && {
    onDemandEntries: {
      maxInactiveAge: 25 * 1000,
      pagesBufferLength: 2,
    },
  }),
};

module.exports = nextConfig;
