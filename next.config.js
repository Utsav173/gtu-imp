/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    webpack: (config, { isServer }) => {
        if (isServer) {
          config.module.rules.push({
            test: /\.node$/,
            loader: 'file-loader',
          });
        }
        return config;
      },
}

module.exports = nextConfig
