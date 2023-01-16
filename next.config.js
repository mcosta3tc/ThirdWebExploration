/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('node:path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'gateway.ipfscdn.io'],
  },
}

module.exports = nextConfig
