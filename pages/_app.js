import Head from "next/head";
import "../styles/tailwind.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Digikid</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
