import type { AppProps } from "next/app";
import Layout from "../components/layout";
import "./globals.css";
import Head from "next/head";
import { podcastDescription } from "@/static";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Yhteensopimattomat</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta property="og:title" content="Yhteensopimattomat" />
        <meta
          property="og:description"
          content={podcastDescription.join(" ")}
        />
        <meta property="og:image" content="/yhteensopimattomat-logo.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
