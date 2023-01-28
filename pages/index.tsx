import type { NextPage } from "next";
import { Nav } from "./components/nav";
import Footer from "./components/footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <div className={`${styles.homeContainer} grid content-center`}>
        <section>
          <p
            className="font-mono mt-3 text-3xl tracking-tight"
            style={{
              color: "#ACB2B2",
            }}
          >
            Make your screenshots less ugly.
          </p>
          <Link href="/upload">
            <button className="transition duration-0 hover:duration-150 mt-5 px-7 py-3 shadow-md font-mono uppercase rounded-lg bg-gray-800">
              Get Started
            </button>
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
