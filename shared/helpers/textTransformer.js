import themesData from "../data/themes";

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

const createDomNode = (className, parsedText) => {
	const node = `<span class="${className}">${parsedText}</span>`;
	return node;
};

const mapper = (parsedText) => {
	parsedText.forEach((parsedText) => {
		highlightMap.forEach((values, key) => {
			if (values.includes(parsedText)) {
				// Get all the text nodes in the editor element
				let element = document.getElementById("innerEditor");
				const newNode = element.outerHTML.replace(
					parsedText,
					createDomNode(key, parsedText)
				);
				element.outerHTML = newNode;
			}
		});
	});
};

const parser = (editorText) => {
	let txtArr = new Array();
	editorText.split("");
	if (~editorText.indexOf(".")) {
		//everything in the editor before the dot.
		const slicedText = editorText.slice(0, editorText.indexOf("."));
		//add the sliced text to the array along with the dot.
		txtArr.push(slicedText);
		txtArr.push(".");
	}
	mapper(txtArr);
};

const textTransformer = () => {
	let themeHighlightData;
	const currTheme = document.getElementById("Themes").value;
	const currEditorText = document.getElementById("innerEditor").innerText;

	for (let i = 0; i < themesData.length; i++) {
		if (themesData[i].name == currTheme) {
			themeHighlightData = themesData[i].highlights;
		}
	}

	// no need to run parser if there is no text in the editor
	if (currEditorText !== "") {
		parser(currEditorText);
	} else {
		console.log("No text in editor");
	}
};

export default textTransformer;
