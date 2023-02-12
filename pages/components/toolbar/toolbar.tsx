let toggleData = require("./toolbarData.json");
import styles from "./styles/toolbar.module.css";
import { Button, Switch } from "@material-tailwind/react";

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
									className={`${styles.dropdownOption} border-solid border-2 border-black transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-y-6 hover:translate-x-25 hover:scale-110 hover:bg-amber-400 hover:cursor-pointer hover:shadow-lg duration-300`}
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
					<label className="relative inline-flex items-center cursor-pointer ml-5">
						<input
							type="checkbox"
							value="Yes"
							className="sr-only peer"
						/>
						<div
							className="w-20 h-11
						border-solid border-2 border-black peer-checked:after:translate-x-full peer-checked:after:border-black after:absolute after:top-[2px] after:left-[2px] after:bg-black after:h-10 after:w-10 after:transition-all"
						></div>
					</label>
				</div>
			</div>
		</section>
	);
};

export default Toolbar;
