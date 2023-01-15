/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/formular',
        destination: '/formular/financeOffer',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
