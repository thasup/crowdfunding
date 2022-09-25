import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/app.css";
// import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <title>CreativeFund | funding platform for creative projects</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  </>)
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp