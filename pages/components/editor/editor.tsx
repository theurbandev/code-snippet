import styles from "./styles/editor.module.css";
import editorTopBar from "../editor-top-bar/editor-top-bar";
import textTransformer from "../../../shared/helpers/textTransformer.js";
import { useEffect, useState } from "react";

export const CodeEditor = () => {
	const [editorText, setEditorText] = useState('console.log("Hello World")');

	useEffect(() => {
		textTransformer();
	}, []);

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
