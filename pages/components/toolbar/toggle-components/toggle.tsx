let toggleData = require("./toggleData.json");
import styles from "./styles/toolbar.module.css";

const Toggle = (props: any) => {
  const { toggleName } = props;

  return (
    <>
      {toggleData.toggleNames.map((toggleNames: string) => {
        return (
          <div id="toggleContainer">
            <h3 id="toggleName" key={toggleNames}>
              {toggleNames}
            </h3>
            <>
              <div className={`${styles.dropdown}`}>
                <input type="checkbox" id="dropdown" />

                <label
                  className={`${styles.dropdown__face}`}
                  htmlFor="dropdown"
                >
                  <div className={`${styles.t2}`}>{toggleNames}</div>
                  <div className={`${styles.dropdown__arrow}`}></div>
                </label>

                <ul className={`${styles.dropdown__items}`}>
                  {toggleData.toggleOptions.themes.map((toggleThemes: any) => {
                    <li className={`${styles.t2}`}>{toggleThemes}</li>;
                  })}
                </ul>
              </div>

              <svg className={`${styles.svg}`}>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    type="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                    result="goo"
                  />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </svg>
            </>
          </div>
        );
      })}
    </>
  );
};

export default Toggle;
