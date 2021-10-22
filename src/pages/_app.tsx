import React from 'react';
import '~/src/styles/global/global.scss';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import Head from 'next/head';
import Layout from '~/src/layouts';
import 'tailwindcss/tailwind.css';

// Create a client
const queryClient = new QueryClient();

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no"
        />
        <link rel="icon" type="image/x-icon" href="/static/images/logo.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <title>Open Bytes</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
};

export default App;
