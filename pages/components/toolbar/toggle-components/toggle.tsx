let toggleData = require("./toggleData.json");
import { stringify } from "querystring";
import styles from "./styles/toolbar.module.css";

const t = (key: string) => {
	// let entries = Object.entries(toggleData.toggleOptions);
	let entries: string = toggleData.toggleOptions;
	// let data = entries.map(([key, val]) => {
	// 	console.log(val);
	// 	return val;
	// });

	let data = entries;
	console.log(key[0]);
	// return data;
};

const Toggle = (props: any) => {
	const { toggleName } = props;
	let entries = Object.entries(toggleData.toggleOptions);
	return (
		<>
			{entries.map(([key, val]) => {
				return (
					<div id="toggleContainer">
						<h3 id="toggleName" key={key}>
							{key}
						</h3>
						<select>
							<option>{t(val)}</option>))
						</select>
					</div>
				);
			})}
		</>
	);
};

export default Toggle;
