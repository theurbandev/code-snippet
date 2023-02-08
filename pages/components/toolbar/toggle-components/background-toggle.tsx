import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import Toggle from "./toggle";

class toggle {
  constructor() {}
}

const backgroundsList = [
  {
    name: "Background1",
    image: "gradient1",
  },
  {
    name: "Background2",
    image: "gradient2",
  },
  {
    name: "Background3",
    image: "gradient3",
  },
];

export default function UploadBackgroundToggle() {
  const [selected, setSelected] = useState(backgroundsList[0]);

  useEffect(() => {
    window.sessionStorage.setItem("background-image", selected.image);
  });

  return <Toggle />;

  // return (
  //   <>
  //     <h1 className="text-xl  uppercase">Background</h1>
  //     <div className="px-4 py-4">
  //       <div className="max-w-lg">
  //         <RadioGroup value={selected} onChange={setSelected}>
  //           <div className="flex justify-center gap-3">
  //             {backgroundsList.map((background) => (
  //               <RadioGroup.Option
  //                 key={background.name}
  //                 value={background}
  //                 className={({ active }) =>
  //                   `${
  //                     active
  //                       ? "ring-2 ring-white ring-opacity-60 ring-offset-2 w-full"
  //                       : "w-full"
  //                   }`
  //                 }
  //               >
  //                 <img
  //                   src={"../" + background.image + ".jpg"}
  //                   alt="background-image"
  //                 />
  //               </RadioGroup.Option>
  //             ))}
  //           </div>
  //         </RadioGroup>
  //       </div>
  //     </div>
  //     <div className="slidecontainer">
  //       <input
  //         type="range"
  //         min="1"
  //         max="100"
  //         className="slider"
  //         id="backgroundSlider"
  //       />
  //       <label
  //         htmlFor="backgroundSlider"
  //         style={{ verticalAlign: "text-bottom", marginLeft: "20px" }}
  //       >
  //         Background Size
  //       </label>
  //     </div>
  //   </>
  // );
}
