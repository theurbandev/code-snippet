import styles from "../../../styles/upload.module.css";
import { useState } from "react";
import UploadDropdown from "./upload-dropdown";

const UploadSection = (props: any) => {
  const [photoUploaded, UpdateUploadedState] = useState(Boolean);
  const [currentPhoto, UpdateUploadedPhoto] = useState("");

  const upload = (event: any) => {
    console.log("photo being uploaded...");
    const img = URL.createObjectURL(event.target.files[0]);
    UpdateUploadedState(true);
    UpdateUploadedPhoto(img);
  };

  const clearUploadedPhoto = () => {
    console.log("removing uploaded photo..");
    UpdateUploadedPhoto("");
    UpdateUploadedState(false);
  };

  return (
    <>
      <UploadDropdown />
      <div></div>
      <div
        className="grid content-center backgroundContainer"
        style={{
          height: "100%",
          backgroundImage: `${props.img}`,
        }}
      >
        {photoUploaded ? (
          <div className={styles.photoUploader}>
            {<img src={currentPhoto} />}
          </div>
        ) : (
          <button onChange={upload}>
            <label className={styles.uploadLabel}>
              <h1 className="transition duration-0 hover:duration-150 mt-5 px-7 py-3 shadow-md font-mono uppercase rounded-lg bg-gray-800">
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
      </div>
    </>
  );
};

export default UploadSection;
