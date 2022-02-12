module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/category/:path*',
        destination: '/section/:path*',
      },
    ]
  },
}
