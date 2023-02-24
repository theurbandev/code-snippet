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

const textTransformer = (themeData: themeDataObj, editorText: string) => {
	// const output = new transform(themeData, editorText);
	// return output;
};

export default textTransformer;
