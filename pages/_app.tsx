import "nextra-theme-blog/style.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/main.css";
import TagManager from "react-gtm-module";
import { useEffect } from "react";
import { LocaleProvider } from '../lib/LocaleContext';
import Header from '../components/Header';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-MLHR6QS" });
  }, []);
  return (
    <LocaleProvider>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
    </LocaleProvider>
  );
}

export default App;
