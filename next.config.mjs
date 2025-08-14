/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable Turbopack for faster development builds (now stable)
  turbopack: {
    resolveExtensions: [
      '.mdx',
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
      '.mjs',
      '.json',
    ],
  },
  // Enable static file serving optimization
  trailingSlash: false,
  // Ensure proper handling of static assets
  assetPrefix: '',
};

export default nextConfig;
