let toggleData = require("./toggleData.json");

const Toggle = (props: any) => {
  const { toggleName } = props;

  return (
    <>
      {toggleData.toggleNames.map((data: string) => {
        return (
          <div id="toggleContainer">
            <h3 id="toggleName">{data}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Toggle;
