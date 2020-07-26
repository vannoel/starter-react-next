import React from 'react';
import App from 'next/app';
import '../plugins/fontawesome';
import { appWithTranslation } from '../plugins/i18next';

import '../assets/styles/index.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default appWithTranslation(MyApp);
