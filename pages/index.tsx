import type { NextPage } from "next";
import { Nav } from "./components/nav";
import Upload from "./upload";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <div className="grid content-center">
        <section className={`${styles.homeContainer}`}>
          {/* <h1 className="font-mono text-6xl tracking-normal uppercase">
            Pretty Screenshot
          </h1> */}
          <p className="font-mono mt-3 text-2xl tracking-tight">
            Make your screenshots less ugly.
          </p>
          <a href="/upload">
            <button className="transition duration-0 hover:duration-150 mt-5 px-7 py-3 shadow-md font-mono uppercase rounded-lg bg-gray-800">
              Get Started
            </button>
          </a>
        </section>
      </div>
    </>
  );
};

export default Home;
