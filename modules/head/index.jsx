import React from 'react';
import NextHead from 'next/head';

const Head = (props) => {
  const { children } = props || {};
  return (
    <NextHead>
      <title>SSR starter with Nextjs</title>
      <link rel="icon" href="/favicon.ico" />
      {children}
    </NextHead>
  );
};

export default Head;
