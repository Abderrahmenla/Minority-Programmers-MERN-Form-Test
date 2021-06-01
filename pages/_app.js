import { Provider } from 'next-auth/client';
import Header from '../components/header';
import Footer from '../components/footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Head from 'next/head';
import '../public/static/signup.css';
import '../public/static/signin.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

library.add(fab);

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Head>
        <title>Minority programmers</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <main
        style={{
          background: 'rgb(255,199,0)',
          background:
            'linear-gradient(257deg, rgba(255,199,0,1) 35%, rgba(255,0,184,1) 100%)',
        }}
      >
        <Component {...pageProps} />
      </main>

      <Footer />
    </Provider>
  );
}

export default MyApp;
