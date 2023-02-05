import { Nav } from "./components/nav/nav";
import { NextPage } from "next";
import ToolBar from "./components/toolbar/toolbar";
import CodeEditor from "./components/editor/editor";
import styles from "./components/editor/styles/editor.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <div className={`${styles.container} flex flex-col`}>
        <div className={`basis-10/12 ${styles.uploadCanvas}`}>
          <CodeEditor />
        </div>
        <div className={`basis-2/12 ${styles.uploadToggleContainer}`}>
          <ToolBar />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
