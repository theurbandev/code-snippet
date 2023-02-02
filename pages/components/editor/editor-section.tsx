import styles from "./styles/editor.module.css";
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
      <div className={styles.codeContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="14"
          viewBox="0 0 54 14"
        >
          <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
            <circle
              cx="6"
              cy="6"
              r="6"
              fill="#FF5F56"
              stroke="#E0443E"
              stroke-width=".5"
            ></circle>
            <circle
              cx="26"
              cy="6"
              r="6"
              fill="#FFBD2E"
              stroke="#DEA123"
              stroke-width=".5"
            ></circle>
            <circle
              cx="46"
              cy="6"
              r="6"
              fill="#27C93F"
              stroke="#1AAB29"
              stroke-width=".5"
            ></circle>
          </g>
        </svg>
        <div className={styles.codeEditor} contentEditable="true">
          {'console.log("Hello World")'}
        </div>
      </div>
    </>
  );
};

export default UploadSection;
