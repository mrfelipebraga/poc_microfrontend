/** @type {import('next').NextConfig} */

const NextFederationPlugin = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {

    config.plugins.push(
      new NextFederationPlugin({
        name: 'app1',
        remotes: {
          app2: 'app2@http://localhost:3001/_next/static/chunks/remote-app2.js'
        },
        filename: 'static/chunks/remote-app1.js',
        exposes: {},
        shared: {},
      })
    );

    return config;
  }
}

module.exports = nextConfig
