import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Example from "./components/nav";

const Home: NextPage = () => {
  return (
    <>
      <Example />
      <div className={styles.homeContainer}>
        <div className="grid grid-cols-2 gap-4 place-content-center h-48 ...">
          <h1>Welcome to Pretty Screenshot</h1>
          <button>Get Started.</button>
        </div>

        {/* <div className="flex h-screen">
        <div className="m-auto">
          <h3>title</h3>
          <button>button</button>
        </div>
      </div> */}
      </div>
    </>
  );
};

export default Home;
