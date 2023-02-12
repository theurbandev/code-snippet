const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		" ./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				amber: colors.amber,
			},
			fontFamily: {
				sans: ["font-mono"],
			},
		},
	},
	plugins: [],
});
