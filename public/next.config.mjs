/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'practicegateway.com',
        pathname: '/wp-content/**'
      }
    ]
  }
};

export default nextConfig;
