/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.discordapp.net'],
  },
  // env: { 
  //   OPENAI_API_KEY: process.env.OPENAI_API_KEY, 
  // },
}

module.exports = nextConfig
