// this file should be responsible for getting the text from editor.tsx and letting it know how to present the text based on the text classification.

import themesData from "../../../shared/data/themes";

const mapper = (text) => {
	// responsible for categorizing the type of keywords in typed in editor
	const highlightMap = new Map();
	const highlightTypes = [
		{ variable: ["const", "let"] },
		{ variable2: ["var"] },
		{ attribute: [] },
		{ definition: [] },
		{ keyword: ["console", "log"] },
		{ operator: ["+", "-", "/", "*"] },
		{ property: [] },
		{ number: ["number", "int", "float"] },
		{ string: ["string"] },
		{ comment: ["//"] },
		{ meta: ["."] },
	];

	highlightTypes.forEach((type) => {
		for (const [key, value] of Object.entries(type)) {
			highlightMap.set(key, value);
		}
	});
	console.log(highlightMap);

	// parse input text and start mapping words to "types"
};

const textTransformer = () => {
	let themeHighlightData;
	const currTheme = document.getElementById("Themes").value;
	const currEditorText = document.getElementById("editor").innerHTML;

	for (let i = 0; i < themesData.length; i++) {
		if (themesData[i].name == currTheme) {
			themeHighlightData = themesData[i].highlights;
		}
	}

	mapper(currEditorText);
	console.log(currEditorText, themeHighlightData);
};

export default textTransformer;
