import styles from "./styles/editor.module.css";
import editorTopBar from "../editor-top-bar/editor-top-bar";
import AceEditor from "react-ace";
import { useEffect, useState } from "react";

export const CodeEditor = () => {
	const [editorText] = useState("console.log('hello world'");
	// const [editorText] = useState("");

	useEffect(() => {}, []);

	return (
		<>
			<div className={styles.codeContainer}>
				<span className={styles.editorTopBar}>{editorTopBar()}</span>
				<div className={styles.editor}>
					<AceEditor
						setOptions={{
							wrap: true,
							showLineNumbers: true,
							fixedWidthGutter: true,
							showPrintMargin: false,
							highlightGutterLine: false,
							displayIndentGuides: false,
						}}
						style={{ height: "100%", width: "100%" }}
					/>
				</div>
			</div>
		</>
	);
};

export default CodeEditor;
