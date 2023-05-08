/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["raw.githubusercontent.com"],
    minimumCacheTTL: 2 * 60 * 60,
  },
};

module.exports = nextConfig;
