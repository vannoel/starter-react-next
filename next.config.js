const withPlugins = require("next-compose-plugins");
const sassPlugin = require('@zeit/next-sass');

module.exports = withPlugins([
    sassPlugin({
        cssModules: false,
    })
],{
    // distDir: 'dist'
});
