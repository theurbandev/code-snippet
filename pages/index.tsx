import type { NextPage } from "next";
import { Nav } from "./components/nav";
import Footer from "./components/footer";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <div className={`${styles.homeContainer} grid content-center`}>
        <section>
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
      <Footer />
    </>
  );
};

export default Home;
