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

	// parse parameter value(editorText) and map to highlightMap
	const parsedText = editorText.split(" ");
	console.log(parsedText);
	parsedText.forEach((word) => {
		highlightMap.forEach((value, key) => {
			if (value.includes(word)) {
				console.log(`${key} :`, word);
			}
		});
	});
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
