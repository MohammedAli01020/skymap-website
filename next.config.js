/** @type {import('next').NextConfig} */

// next.config.js
const removeImports = require('next-remove-imports')({
    options: { }
})

const nextConfig =
    {
      reactStrictMode: true,

      experimental: { esmExternals: true, scrollRestoration: true },
      images: {
        domains: ['images.unsplash.com', 'main.d2hqtqv4zfjkly.amplifyapp.com'],
        imageSizes: [16, 32, 48, 64],
        deviceSizes: [96, 128, 256, 384, 512, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],

          remotePatterns: [
              {
                  protocol: "https",
                  hostname: "**"
              },
              {
                  protocol: "http",
                  hostname: "**"
              }
          ]
      },

        async headers() {
            return [
                {
                    source: '/:all*(svg|jpg|png)',
                    locale: false,
                    headers: [
                        {
                            key: 'Cache-Control',
                            value: 'public, max-age=31536000, immutable'
                        }
                    ]
                }
            ]
        }


      // async rewrites() {
      //   return [
      //     {
      //       source: '/api/:path*',
      //       destination: 'https://ec2-54-167-167-213.compute-1.amazonaws.com/:path*'
      //     }
      //   ]
      // }
    }



module.exports = removeImports(nextConfig)
