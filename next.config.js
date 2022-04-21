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
        {
          source: "/tag/:name*",
          destination: "/section/[name].js",
        },
      ],
    };
  },
}

module.exports = nextConfig
