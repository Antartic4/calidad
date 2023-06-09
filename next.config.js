/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'i.ibb.co',
      'images.unsplash.com',
      'motionblinds.com',
      'rickandmortyapi.com',
    ],
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
