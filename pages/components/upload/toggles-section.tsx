import BackgroundToggle from "./upload-background-toggle";

const ToggleSection = () => {
  return (
    <div>
      <section className="flex justify-center flex-wrap flex-row py-7">
        <h1 className="text-xl  uppercase">Background</h1>
        <BackgroundToggle />

        <div className="slidecontainer">
          <input
            type="range"
            min="1"
            max="100"
            value="100"
            className="slider"
            id="myRange"
          />
        </div>
      </section>
    </div>
  );
};

export default ToggleSection;
