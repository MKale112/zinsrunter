/** @type {import('next').NextConfig} */

const buildDate = new Date().toLocaleString();

const nextConfig = {
  reactStrictMode: true,
  compress: false,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/formular',
        destination: '/formular/finanzierungszweck',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'time',
            value: buildDate,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
