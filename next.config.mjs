/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  allowedDevOrigins: ['192.168.18.200', '172.24.224.1'],
}

export default nextConfig
