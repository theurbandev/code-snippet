import styles from "./styles/editor.module.css";
import editorTopBar from "../editor-top-bar/editor-top-bar";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import { useState } from "react";

export const CodeEditor = () => {
	const [editorText] = useState("console.log('hello world');");

	const onChange = () => console.log("editor changed");

	return (
		<>
			<div className={styles.codeContainer}>
				<span className={styles.editorTopBar}>{editorTopBar()}</span>
				<div className={styles.editor}>
					<AceEditor
						mode="java"
						theme="github"
						value={editorText}
						wrapEnabled={true}
						showPrintMargin={false}
						highlightActiveLine={false}
						style={{ height: "100%", width: "100%" }}
						onChange={onChange}
					/>
				</div>
			</div>
		</>
	);
};

export default CodeEditor;
