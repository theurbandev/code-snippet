import styles from "./styles/editor.module.css";
import textTransformer from "../helpers/textTransformer";
import { useEffect, useState } from "react";

const themesData = require("../../../shared/data/themes");

export const CodeEditor = () => {
	const [theme, setSelectedTheme] = useState("");
	const [editorText, setEditorText] = useState("");

	const initTextTransformation = () => {
		for (let i = 0; i < themesData.length; i++) {
			if (themesData[i].name == theme) {
				// start text transform process here?
				// textTransformer(themesData[i].highlights, editorText);
			}
		}
	};

	useEffect(() => {
		const currTheme = (document.getElementById("Themes") as HTMLInputElement).value;
		const currEditorText = (document.getElementById("editor") as HTMLDivElement).innerHTML;

		setEditorText(currEditorText);
		setSelectedTheme(currTheme);
		initTextTransformation();
	}, [initTextTransformation]);

	return (
		<>
			<div className={styles.codeContainer}>
				{editorTopBar()}
				<div
					id="editor"
					className={styles.codeEditor}
					contentEditable="true"
					style={{ fontSize: "15px" }}
				>
					{'console.log("Hello World")'}
				</div>
			</div>
		</>
	);
};

const getThemeData = (theme: string) => {
	for (let i = 0; i < themesData.length; i++) {
		if (themesData[i].name == theme) {
			console.log(themesData[i].highlights);
			// start text transform process here?
		}
	}
};

const editorTopBar = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="54"
			height="14"
			viewBox="0 0 54 14"
		>
			<g fill="none" fill-rule="evenodd" transform="translate(1 1)">
				<circle
					cx="6"
					cy="6"
					r="6"
					fill="#FF5F56"
					stroke="#E0443E"
					stroke-width=".5"
				></circle>
				<circle
					cx="26"
					cy="6"
					r="6"
					fill="#FFBD2E"
					stroke="#DEA123"
					stroke-width=".5"
				></circle>
				<circle
					cx="46"
					cy="6"
					r="6"
					fill="#27C93F"
					stroke="#1AAB29"
					stroke-width=".5"
				></circle>
			</g>
		</svg>
	);
};

export default CodeEditor;
