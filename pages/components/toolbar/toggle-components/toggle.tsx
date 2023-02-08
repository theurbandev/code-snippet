let toggleData = require("./toggleData.json");
import styles from "./styles/toggle.module.css";

const Toggle = () => {
	let entries: [string, string[]][] = Object.entries(
		toggleData.toggleOptions
	);
	return (
		<div className={`flex space-x-6`}>
			{entries.map(([key, val]) => {
				return (
					<div
						id="toggleContainer"
						className={`flex flex-col space-x-6`}
						key={key}
					>
						<h3
							id="toggleName"
							className={`text-lg font-semibold text-left ml-6`}
							key={key}
						>
							{key}
						</h3>
						<div className={`flex`}>
							<div className={`${styles.sectionIcon}`}>ICON</div>
							<select className={`${styles.dropdownOption}`}>
								{val.map((element) => {
									return (
										<option key={element} selected>
											{element}
										</option>
									);
								})}
							</select>
						</div>
					</div>
				);
			})}
			<div>
				<h3
					id="toggleName"
					className={`text-lg font-semibold text-left`}
				>
					Numbered Lines
				</h3>
				<label className="relative inline-flex items-center cursor-pointer ml-10 mt-2">
					<input type="checkbox" value="" className="sr-only peer" />
					<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
					<span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
						Toggle me
					</span>
				</label>
			</div>
		</div>
	);
};

export default Toggle;
