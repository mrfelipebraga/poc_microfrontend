/** @type {import('next').NextConfig} */

const NextFederationPlugin = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {

    config.plugins.push(
      new NextFederationPlugin({
        name: 'app2',
        remotes: {},
        filename: 'static/chunks/remote-app2.js',
        exposes: {
          './Home': './src/pages/index'
        },
        shared: {},
      })
    );

    return config;
  }
}

module.exports = nextConfig
