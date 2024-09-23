"use client";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head'
import { WishlistProvider } from '../../services/whishlistcontext';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <WishlistProvider>
      <Head>
        <title>Meta-shopping</title>
      </Head>
      <Component {...pageProps} />
      </WishlistProvider>
    </>
  )
}
