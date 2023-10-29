import { NextPage } from "next";
import { useState } from "react";
import ToolBar from "./components/toolbar/toolbar";
import CodeEditor from "./components/editor/editor";
import styles from "./components/toolbar/styles/toolbar.module.css";
import Footer from "./components/footer/footer";

const Home: NextPage = () => {
	let [selectedLanguage, setSelectedLanguage] = useState("Language");
	let [selectedTheme, setSelectedTheme] = useState("Theme");

	return (
		<>
			<div className={`${styles.container} flex flex-col`}>
				<h1 style={{ padding: "10px", fontSize: "1.4rem" }}>Code Snippit</h1>
				<div className="basis-2/12">
					<ToolBar
						language={selectedLanguage}
						theme={selectedTheme}
						updateLanguage={(lang: string) => setSelectedLanguage(lang)}
						updateTheme={(theme: string) => setSelectedTheme(theme)}
					/>
				</div>
				<div className={`basis-10/12 ${styles.uploadCanvas}`}>
					<CodeEditor language={selectedLanguage} theme={selectedTheme} />
				</div>
			</div>
			<div className={`${styles.footer}`}>
				<Footer />
			</div>
		</>
	);
};

export default Home;
