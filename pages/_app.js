import { Provider } from 'next-auth/client';
import Header from '../components/header';
import Footer from '../components/footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Container } from 'react-bootstrap';
import Head from 'next/head';
import './bootstrap.min.css';
library.add(fab);

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main
        style={{
          background: 'rgb(255,199,0)',
          background:
            'linear-gradient(339deg, rgba(255,199,0,1) 35%, rgba(255,0,184,1) 100%)',
        }}
      >
        <Component {...pageProps} />
      </main>

      <Footer />
    </Provider>
  );
}

export default MyApp;
