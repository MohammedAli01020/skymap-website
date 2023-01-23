/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 's3.ap-south-1.amazonaws.com']
  },

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://ec2-54-167-167-213.compute-1.amazonaws.com/:path*'
      }
    ]
  }
}

module.exports = nextConfig
