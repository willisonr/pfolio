/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/pfolio',
  assetPrefix: '/pfolio',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
