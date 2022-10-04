import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Pretty Screenshot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Welcome to Pretty Screenshot</h1>
        <button>Get Started.</button>
      </main>
    </div>
  );
};

export default Home;
