import styles from "../../styles/upload.module.css";
import { useState } from "react";
import Example from "./upload-dropdown";

const UploadSection = () => {
  const [photoUploaded, grabUploadedPhoto] = useState();

  const upload = (event) => {
    console.log("Upload button clicked");

    const img = URL.createObjectURL(event.target.files[0]);

    grabUploadedPhoto(img);
  };
  return (
    <>
      <Example />
      <div className="grid content-center" style={{ height: "100%" }}>
        {photoUploaded ? (
          <></>
        ) : (
          <button onChange={upload}>
            <label className={styles.uploadLabel}>
              <h1 className="shadow-md rounded-lg bg-gray-900 hover:bg-cyan-700 p-5">
                Upload your ugly screenshot.
              </h1>
              <input
                className={styles.uploadDefaultInput}
                type="file"
                name="uglyImage"
                accept="image/*"
              />
            </label>
          </button>
        )}
        {photoUploaded ? (
          <div className={styles.photoUploadedContainer}>
            {<img src={photoUploaded} />}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default UploadSection;
