/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.gifs-paradise.com"],
  },
};

module.exports = nextConfig;
