import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta property="fb:pages" content="1235566119887198" />
        {/* <link rel="alternate" type="application/rss+xml" href="/rss.xml" />
        <meta property="og:url" content={`https://epmnews.in/`} /> */}
      </Head>
      <Script
        id="Adsense-id"
        async
        strategy="afterInteractive"
        onError={(e) => {
          console.error("Script failed to load", e);
        }}
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4685513471611028"
        crossorigin="anonymous"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
