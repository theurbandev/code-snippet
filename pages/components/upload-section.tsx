import styles from "../../styles/upload.module.css";
import Example from "./upload-dropdown";

const UploadSection = () => {
  const upload = () => {
    // store image in local storage
    console.log("Upload Clicked");
  };

  return (
    <>
      <Example />
      <div className="grid content-center" style={{ height: "100%" }}>
        <button onClick={upload}>
          <label className={styles.uploadLabel}>
            <h1 className="shadow-md rounded-lg bg-gray-900 hover:bg-cyan-700 p-5">
              Upload ugly screenshot
            </h1>
            <input
              className={styles.uploadDefaultInput}
              type="file"
              name="uglyImage"
              accept="image/*"
            />
          </label>
        </button>
      </div>
    </>
  );
};

export default UploadSection;
