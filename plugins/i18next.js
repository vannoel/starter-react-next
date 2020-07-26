/**
 * Using commonJs, because the configuraton will be used by frontend & backend.
 */
const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['zhTW'],
  localeSubpaths: {
    zhTW: 'zh-tw',
  },
});
