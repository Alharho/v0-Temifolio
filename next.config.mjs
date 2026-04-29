/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mir-s3-cdn-cf.behance.net',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
