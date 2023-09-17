import styles from "./styles/editor.module.css";
import editorTopBar from "../editor-top-bar/editor-top-bar";
import textTransformer from "../../../shared/helpers/textTransformer.js";
import { useEffect, useState } from "react";

export const CodeEditor = () => {
	const [editorText] = useState("console.");
	// const [editorText] = useState("");

	useEffect(() => {
		// textTransformer();
	}, []);

	return (
		<>
			{/* TODO: make the whole editor section editable, such that the user can click
			anywhere in the editor and start typing */}
			<div className={styles.codeContainer}>
				{editorTopBar()}
				<div
					id="editor"
					className={styles.codeEditor}
					style={{ fontSize: "15px" }}
					onKeyUp={textTransformer}
				>
					{/* <div id='innerEditor' contentEditable='true'>
						{editorText}
					</div> */}
				</div>
			</div>
		</>
	);
};

export default CodeEditor;
