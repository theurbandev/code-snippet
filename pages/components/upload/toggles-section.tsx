import BackgroundToggle from "./upload-background-toggle";

const ToggleSection = () => {
  return (
    <div>
      <section className="flex justify-center flex-wrap flex-row py-7">
        <h1 className="text-xl font-bold">Background</h1>
        <BackgroundToggle />
      </section>
    </div>
  );
};

export default ToggleSection;
