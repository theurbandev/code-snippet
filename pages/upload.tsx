import { Nav } from "./components/nav";
import styles from "../styles/upload.module.css";

const Upload = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-row">
        <div className="basis-3/4 uploadCanvas">01</div>
        <div className="basis-1/4">02</div>
      </div>
    </>
  );
};

export default Upload;
