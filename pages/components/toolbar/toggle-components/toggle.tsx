let toggleData = require("./toggleData.json");
import styles from "./styles/toolbar.module.css";

const Toggle = () => {
	let entries: [string, string[]][] = Object.entries(
		toggleData.toggleOptions
	);
	return (
		<>
			{entries.map(([key, val]) => {
				return (
					<div id="toggleContainer">
						<h3 id="toggleName" key={key}>
							{key}
						</h3>
						<select>
							{val.map((element) => {
								return <option>{element}</option>;
							})}
						</select>
					</div>
				);
			})}
		</>
	);
};

export default Toggle;
