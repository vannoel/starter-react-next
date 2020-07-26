const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withSASS = require('@zeit/next-sass');

const nextConfig = {
  publicRuntimeConfig: {
    MODE: process.env.MODE,
    API_URL: process.env.API_URL,
    GQL_URL: process.env.GQL_URL,
    WS_URL: process.env.WS_URL,
  },
};

module.exports = withPlugins(
  [
    withCSS(
      withSASS({
        cssModules: false,
      })
    ),
  ],
  nextConfig
);
