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
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inria+Sans:wght@300&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Component {...pageProps} />
		</ThemeProvider>
	);
};