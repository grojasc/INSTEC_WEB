/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'commons.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'brandfetch.com',
      },
      {
        protocol: 'https',
        hostname: 'www.md.cl',
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
      },
      {
        protocol: 'https',
        hostname: 'prosoltecejes.cl',
      },
      {
        protocol: 'https',
        hostname: 'www.sermin.cl',
      },
      {
        protocol: 'https',
        hostname: 'www.maiconmetal.cl',
      },
      {
        protocol: 'https',
        hostname: 'companieslogo.com',
      },
      {
        protocol: 'https',
        hostname: 'compromisominero.cl',
      },
      {
        protocol: 'https',
        hostname: 'www.cenizas.cl',
      },
      {
        protocol: 'https',
        hostname: 'www.ferroman.cl',
      },
      {
        protocol: 'https',
        hostname: 'www.agecomet.cl',
      },
      {
        protocol: 'https',
        hostname: 'www.bignottihnos.cl',
      },
      {
        protocol: 'https',
        hostname: 'www.bunsa.cl',
      },
    ],
  },
}

module.exports = nextConfig