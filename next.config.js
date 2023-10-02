/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'upload.wikimedia.org',
      },
      {
        hostname: 'uhdtv.io',
      },
      {
        hostname: 'mango.blender.org',
      },
      {
        hostname: 'download.blender.org'
      }
    ]
  }
}

module.exports = nextConfig
