import styles from "./styles/toolbar.module.css";
import themeData from "../../../shared/data/themes.js";

const Toolbar = () => {
	let themes = [];
	for (let i = 0; i < themeData.length; i++) {
		themes.push(themeData[i].id);
	}

	return (
		<section
			className='flex justify-center flex-wrap flex-row py-14 px-8'
			style={{ justifyContent: "left" }}
		>
			<div className={`flex space-x-10`}>
				<div id='toggleContainer' className={`flex flex-col space-x-10`}>
					<h3
						id='toggleName'
						className={`text-4xl font-semibold text-left mb-3 ${styles.numLinesToggle}`}
					>
						Themes
					</h3>
					<div className={`flex`} style={{ marginLeft: "4px" }}>
						<div className={`${styles.sectionIcon}`}></div>
						<select
							className={`${styles.dropdownOption} border-solid border-2 border-black transition ease-in-out delay-150 hover:translate-x-5 hover:scale-80 hover:bg-gray-500 hover:cursor-pointer hover:shadow-lg duration-300 hover:color-white`}
						>
							{themes.map((val, i) => {
								return (
									<option
										className={`${styles.dropdownSelect}`}
										id='Themes'
										key={i}
									>
										{val}
									</option>
								);
							})}
						</select>
					</div>
				</div>
				{/* <div>
					<h3 id='toggleName' className={`text-4xl font-semibold text-left mb-3 ${styles.numLinesToggle}`}>
						Numbered Lines
					</h3>
					<label className='relative inline-flex items-center cursor-pointer ml-5'>
						<input type='checkbox' value='Yes' className='sr-only peer' />
						<div
							className='w-20 h-11
						border-solid border-2 border-black peer-checked:after:translate-x-full peer-checked:after:border-black after:absolute after:top-[2px] after:left-[2px] after:bg-black after:h-10 after:w-10 after:transition-all'
						></div>
					</label>
				</div> */}
				{/* "Font Size": [15],
		"Background": ["dim1", "whiteyellow", "gradient2", "none"],
		"Language": ["JavaScript", "Go", "PHP"] */}
			</div>
		</section>
	);
};

export default Toolbar;
