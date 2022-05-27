/** @type {import('next').NextConfig} */
// const securityHeaders = [];
const nextConfig = {
  reactStrictMode: true,
  /**security headers */
  // async headers() {
  //   return [
  //     {
  //       source: '/:path*',
  //       headers: securityHeaders,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
