/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["nologin.tnut.vn", "10.10.51.16"] // Add the domains you want to allow here
  }
};

module.exports = nextConfig;
