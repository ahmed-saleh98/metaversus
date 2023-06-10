import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Metaversus</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
    </Head>
    <Component {...pageProps} />
    <Analytics />
  </>
);

export default MyApp;
