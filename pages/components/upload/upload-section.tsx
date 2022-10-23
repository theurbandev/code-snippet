import styles from "../../../styles/upload.module.css";
import { useState } from "react";
import Example from "./upload-dropdown";
import BackgroundToggle from "./upload-background-toggle";

const UploadSection = (props: any) => {
  const [photoUploaded, grabUploadedPhoto] = useState("");

  const upload = (event: any) => {
    console.log("photo being uploaded...");
    const img = URL.createObjectURL(event.target.files[0]);
    grabUploadedPhoto(img);
  };

  return (
    <>
      <Example />
      <div
        className="grid content-center backgroundContainer"
        style={{
          height: "100%",
          backgroundImage: `${props.img}`,
        }}
      >
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
          <div className={styles.photoUploader}>
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
