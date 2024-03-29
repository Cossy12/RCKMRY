/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  eslint: { 
    ignoreDuringBuilds: true, 
  }, 
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
