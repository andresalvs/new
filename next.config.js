/* eslint-env node */

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Safely find the `oneOf` rule
    const oneOfRule = config.module.rules.find((rule) => rule.oneOf);
    if (!oneOfRule) return config;

    // Remove the custom image handling rule (use Next.js built-in image optimization)
    // If you really need this rule, uncomment the section below
    /*
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]',
      },
    });
    */

    // Safely update TypeScript rules to include all files
    const tsRules = oneOfRule.oneOf.filter((rule) => rule.test && rule.test.toString().includes('tsx|ts'));
    tsRules.forEach((rule) => {
      if (rule.include) {
        delete rule.include;
      }
    });

    return config;
  },
  compress: true,
  generateEtags: true,
  pageExtensions: ['tsx', 'mdx', 'ts'],
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
    // Enable device sizes for image optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: ['images.unsplash.com', 'source.unsplash.com'],
  },
};

module.exports = nextConfig;
