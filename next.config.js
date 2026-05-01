require('tsx/cjs');
const { APP_BASE_PATH } = require('./src/config/app.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS ? APP_BASE_PATH : '',
  trailingSlash: true,
};

module.exports = nextConfig;
