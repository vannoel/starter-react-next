import React from 'react';
import { compose } from 'recompose';

import Head from '../modules/head';

import { withTranslation } from '../plugins/i18next';

const namespaces = ['home'];

const enhance = compose(withTranslation(namespaces));

const Home = enhance((props) => {
  const { t } = props;
  return (
    <>
      <Head />

      <div id="page-home">{t('home:hello')}</div>
    </>
  );
});

Home.getInitialProps = async () => {
  return {
    namespacesRequired: namespaces,
  };
};

export default Home;
