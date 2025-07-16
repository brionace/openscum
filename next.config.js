/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  typescript: {
    // Dangerously allow production builds to successfully complete even if there are type errors
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: [
      "@radix-ui/react-dialog",
      "@radix-ui/react-popover",
      "@radix-ui/react-select",
      "lucide-react",
    ],
  },
  webpack: (config, { isServer }) => {
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
    config.externals = [
      ...(config.externals || []),
      "bufferutil",
      "utf-8-validate",
    ];

    // Optimize bundle splitting
    if (!isServer) {
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
            maxSize: 244 * 1024, // 244KB chunks
          },
        },
      };
    }

    return config;
  },
};

module.exports = nextConfig;
