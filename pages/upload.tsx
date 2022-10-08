import { Nav } from "./components/nav";
import styles from "../styles/upload.module.css";

const Upload = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-row">
        <div className="basis-3/4 uploadCanvas">Upload Canvas</div>
        <div className="basis-1/4 uploadToggleContainer"></div>
      </div>
    </>
  );
};

export default Upload;
