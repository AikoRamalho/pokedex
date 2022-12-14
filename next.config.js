/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'raw.githubusercontent.com',
      'e1.pngegg.com',
      'cdn.traction.one',
      'cdn.neemo.com.br'
    ],
  },
}

module.exports = nextConfig
