// this file should be responsible for getting the text from editor.tsx and letting it know how to present the text based on the text classification.

import themesData from "../../../shared/data/themes";

const mapper = (text) => {
	const textSeparatorRegex = /[.]/;
	const map = new Map();

	// console.log(text.split(textSeparatorRegex));
	// ke.split("");
	// console.log(ke);

	const newText = [];
	// console.log(text);
	// for (const word of text) {
	// 	map.set("thekey", word);
	// }
	// console.log(map.entries());
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
