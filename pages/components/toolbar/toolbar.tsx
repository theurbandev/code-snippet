let toggleData = require("./toolbarData.json");
import styles from "./styles/toolbar.module.css";

const Toolbar = () => {
	let entries: [string, string[]][] = Object.entries(
		toggleData.toggleOptions
	);
	return (
		<section className="flex justify-center flex-wrap flex-row py-14 px-8">
			<div className={`flex space-x-10`}>
				{entries.map(([key, val]) => {
					return (
						<div
							id="toggleContainer"
							className={`flex flex-col space-x-10`}
							key={key}
						>
							<h3
								id="toggleName"
								className={`text-3xl font-semibold text-left ml-10 ${styles.numLinesToggle}`}
								key={key}
							>
								{key}
							</h3>
							<div className={`flex`}>
								<div className={`${styles.sectionIcon}`}></div>
								<select
									className={`${styles.dropdownOption} transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-y-6 hover:translate-x-25 hover:scale-110 hover:bg-amber-400 hover:cursor-pointer hover:shadow-lg duration-300`}
								>
									{val.map((element) => {
										return (
											<option
												className={`${styles.dropdownSelect}`}
												key={element}
												selected
											>
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
						className={`text-3xl font-semibold text-left ${styles.numLinesToggle}`}
					>
						Numbered Lines
					</h3>
					<label className="relative inline-flex items-center cursor-pointer ml-5 mt-4">
						<input
							type="checkbox"
							value=""
							className="sr-only peer"
						/>
						<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
					</label>
				</div>
			</div>
		</section>
	);
};

export default Toolbar;
