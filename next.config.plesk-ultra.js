/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: false, // Disable SWC minification to save memory
  images: { unoptimized: true },
  experimental: {
    // Disable optimizations that use memory
    esmExternals: false,
  },
  webpack: (config, { isServer, dev }) => {
    // Memory optimization for production builds
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        minimize: false, // Disable minification to save memory
        splitChunks: false, // Disable code splitting to save memory
      };
    }

    // Handle Node.js modules for browser
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

    // Ignore optional dependencies that cause warnings
    config.externals = [...(config.externals || []), 'bufferutil', 'utf-8-validate'];

    return config;
  },
};

module.exports = nextConfig;
