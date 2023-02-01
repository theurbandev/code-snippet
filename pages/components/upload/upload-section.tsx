import styles from "../../../styles/upload.module.css";
import UploadDropdown from "./upload-components/upload-dropdown";
import { useEffect, useState } from "react";

const UploadSection = (props: any) => {
  const [photoUploaded, UpdateUploadedState] = useState(false);
  const [currentPhoto, UpdateUploadedPhoto] = useState("");
  const [backgroundPhoto, BackgroundPhotoSet] = useState("");

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

  useEffect(() => {
    const sessionItems = new Map();
    const backgroundImg = sessionStorage.getItem("background-image");
    sessionItems.set("backgroundImage", `../${backgroundImg}.jpg`);

    BackgroundPhotoSet(sessionItems.get("backgroundImage"));
  });

  return (
    <>
      <div
        className="grid content-center backgroundContainer"
        style={{
          height: "100%",
          backgroundImage: `${props.img}`,
        }}
      >
        {photoUploaded ? (
          <div className={styles.photoUploader}>
            {<img src={backgroundPhoto} className={styles.centerImg} />}
            {<img src={currentPhoto} className={styles.centerImg} />}
          </div>
        ) : (
          <button onChange={upload}>
            <label className={styles.uploadLabel}>
              <h1 className="transition duration-0 hover:duration-150 mt-5 px-7 py-3 shadow-md uppercase rounded-lg bg-gray-800">
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
