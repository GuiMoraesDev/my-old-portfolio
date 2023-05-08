/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["raw.githubusercontent.com"],
    minimumCacheTTL: 24 * 60 * 60,
  },
};

module.exports = nextConfig;
