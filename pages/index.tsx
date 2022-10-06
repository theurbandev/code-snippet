import type { NextPage } from "next";
import "../styles/Home.module.css";
import { Nav } from "./components/nav";

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <div className="grid content-center">
        <section className="startContainer">
          <h1>Welcome to Pretty Screenshot</h1>
          <button>Get Started.</button>
        </section>
      </div>
    </>
  );
};

export default Home;
