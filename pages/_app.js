import '../styles/globals.css'
import Head from 'next/head';
import Navbar from '../components/Navbar';

const MyApp =({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Tim Mukhamedov | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      
    </>
  );
}

export default MyApp
