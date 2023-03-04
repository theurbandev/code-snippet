import styles from "./styles/editor.module.css";
import themesData from "../../../shared/data/themes";
import textTransformer from "../helpers/textTransformer.js";
import { useEffect, useState } from "react";
import editorTopBar from "../editor-top-bar/editor-top-bar";

export const CodeEditor = () => {
	const [editorText, setEditorText] = useState('console.log("Hello World")');

	useEffect(() => {
		textTransformer();
	});

	return (
		<>
			<div className={styles.codeContainer}>
				{editorTopBar()}
				<div
					id='editor'
					className={styles.codeEditor}
					style={{ fontSize: "15px" }}
					contentEditable='true'
					onKeyUp={textTransformer}
				>
					{editorText}
				</div>
			</div>
		</>
	);
};

export default CodeEditor;
