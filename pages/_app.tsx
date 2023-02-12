import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-tailwind/react";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider>
			<Head>
				<title>Code Snippet</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</ThemeProvider>
	);
};