import Head from 'next/head';
import React from 'react';

import '../styles/globals.css';
import '../styles/Header/Header.css';
import '../styles/Footer/Footer.css';
import '../styles/404/404.css';
import '../styles/ShowCase/ShowCase.css';
import "../styles/Home.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC'
          crossorigin='anonymous'
        ></link>

        <script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM'
          crossorigin='anonymous'
        ></script>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
