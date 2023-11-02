import { useState } from "react";
import styles from "./styles/editor.module.css";
import editorTopBar from "../editor-top-bar/editor-top-bar";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/ext-language_tools";
import "../../../shared/data/ace-modes";
import "../../../shared/data/ace-themes";

interface EditorProps {
	language: string;
	theme: string;
}

export const CodeEditor = (props: EditorProps) => {
	const { language = "Language", theme = "Theme" } = props;
	const [editorText, updateEditorText] = useState("console.log('hello world');");

	return (
		<>
			<div className={styles.codeContainer}>
				<span className={styles.editorTopBar}>{editorTopBar()}</span>
				<div className={styles.editor}>
					<AceEditor
						mode={language === "Language" ? "javascript" : language.toLowerCase()}
						theme={theme === "Theme" ? "github" : theme.toLowerCase()}
						value={editorText}
						wrapEnabled={true}
						showPrintMargin={false}
						highlightActiveLine={false}
						style={{ height: "100%", width: "100%" }}
						onChange={updateEditorText}
					/>
				</div>
			</div>
		</>
	);
};

export default CodeEditor;
