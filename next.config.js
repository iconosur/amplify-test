/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/category/:name*",
          destination: "/section",
        },
      ],
    };
  },
}

module.exports = nextConfig
