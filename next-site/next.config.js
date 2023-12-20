/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.notion.so"],
  }, // The "images.domains" configuration is deprecated. Please use "images.remotePatterns" configuration instead.
  // images: {
  //   remotePatterns: ["www.notion.so"],
  // },
};

module.exports = nextConfig;
