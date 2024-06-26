/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["iranyekan"],
			},
		},
		fontSize: {
			sm: "0.8rem",
			base: "1rem",
			xl: "1.25rem",
			"2xl": "1.563rem",
			"3xl": "1.953rem",
			"4xl": "2.441rem",
			"5xl": "3.052rem",
			xs: "0.75rem",
			xxs: "0.7rem",
			xxxs: "0.6rem",
			md: "0.9rem",
		},
	},
	plugins: [
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/typography"),
		// ...
	],
};
