import { Nav } from "./components/nav";
import Footer from "./components/footer";
import ToggleSection from "./components/upload/toggles-section";
import UploadSection from "./components/upload/upload-section";
import styles from "../styles/upload.module.css";

const Upload = () => {
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

export default Upload;
