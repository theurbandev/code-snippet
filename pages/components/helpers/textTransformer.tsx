// this should be responsible for getting the text from editor.tsx and letting it know how to present the text based on the text classification.

interface themeDataObj {
	background: string;
	text: string;
	variable: string;
	variable2: string;
	attribute: string;
	definition: string;
	keyword: string;
	operator: string;
	property: string;
	number: string;
	string: string;
	comment: string;
	meta: string;
}

class transform {
	backgroundColor;

	constructor(themeData: themeDataObj, text: string) {
		this.backgroundColor = themeData.background;
	}

	highlightText() {}
}

const textTransformer = (themeData: themeDataObj, editorText: string) => {
	console.log(themeData);
	console.log(editorText);

	const output = new transform(themeData, editorText);
	console.log(output);
	return output;
};

export default textTransformer;
