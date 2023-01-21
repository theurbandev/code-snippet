import { Nav } from "./components/nav";
import Footer from "./components/footer";
import ToggleSection from "./components/upload/toggles-section";
import UploadSection from "./components/upload/upload-section";
import styles from "../styles/upload.module.css";

const Upload = () => {
  return (
    <>
      <Nav />
      <div className={`${styles.container} flex flex-row`}>
        <div className={`basis-4/5 bg-gray-800 ${styles.uploadCanvas}`}>
          <UploadSection />
        </div>
        <div className={`basis-2/5 ${styles.uploadToggleContainer}`}>
          <ToggleSection />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Upload;
