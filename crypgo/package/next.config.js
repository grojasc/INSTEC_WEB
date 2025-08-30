/** @type {import('next').NextConfig} */
const nextConfig = {
  // Para Netlify deployment
  trailingSlash: true,
  output: 'export',
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during builds
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during builds
  },
  images: {
    unoptimized: true, // Necesario para static export
  },
}

module.exports = nextConfig