const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withCSS, withFonts, withImages]);

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'scontent.fnbe1-2.fna.fbcdn.net',
      'lh3.googleusercontent.com',
    ],
  },
};
