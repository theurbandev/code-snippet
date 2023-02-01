import { Nav } from "./components/nav/nav";
import { NextPage } from "next";
import ToggleSection from "./components/toggles/toggles-section";
import UploadSection from "./components/editor/editor-section";
import styles from "../styles/editor.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <div className={`${styles.container} flex flex-col`}>
        <div className={`basis-10/12 ${styles.uploadCanvas}`}>
          <UploadSection />
        </div>
        <div className={`basis-2/12 ${styles.uploadToggleContainer}`}>
          <ToggleSection />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
