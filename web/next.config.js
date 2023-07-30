/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/return',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
