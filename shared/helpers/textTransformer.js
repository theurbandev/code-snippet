import { stringify } from "querystring";
import themesData from "../data/themes";

const mapper = (editorText) => {
	// map highlight types to highlightMap
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

	// parse editorText and map to highlightMap
	const parsedText = editorText.split(" ");
	console.log(parsedText);
	parsedText.forEach((word) => {
		// if word equals a character, console.log the word
		if (word.includes(highlightMap.get("meta"))) {
			console.log("character :", word);
		}
		highlightMap.forEach((value, key) => {
			if (value.includes(word)) {
				console.log(`${key} :`, word);
				const node = createDomNode(word, "variable");
				const editorWordSwap = document
					.getElementById("editor")
					.innerHTML.replace(word, node);

				document.getElementById("editor").innerHTML = editorWordSwap;
			}
		});
	});
};

const createDomNode = (word, className) => {
	const node = `<span class="${className}">${word}</span>`;
	return node;
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
};

export default textTransformer;
