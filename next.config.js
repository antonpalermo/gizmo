/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com", "avatars.githubusercontent.com"]
  },
  redirects: async () => [
    { source: "/", destination: "/dashboard", permanent: false }
  ]
};

module.exports = nextConfig;
