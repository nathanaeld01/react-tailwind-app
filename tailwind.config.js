import plugin from "tailwindcss/plugin";

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	mode: "jit",
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				".ring-button": {
					boxShadow: "0 0 0 2px #242938",
				},
				".size-dv": {
					height: "100dvh",
					width: "100dvw",
				},
				".transition-button": {
					transition: "box-shadow .3s ease",
				},
			});
		}),
	],
	theme: {
		extend: {
			colors: {
				green: "#13CF14",
				"light-gray": "#c0c4c9",
				primary: "#242938",
				secondary: {
					blue: "#A0D0FF",
					green: "#89E789",
					orange: "#FFBF94",
					red: "#FD9EA6",
					yellow: "#FFE180",
				},
			},
			lineHeight: {
				8.5: "2.125rem",
			},
			spacing: {
				7.5: "1.875rem",
				8.5: "2.125rem",
				13: "3.25rem",
				15: "3.75rem",
				22: "5.5rem",
				25: "6.25rem",
				26: "6.5rem",
				33: "8.25rem",
				34: "8.5rem",
			},
			zIndex: {
				1: 1,
				2: 2,
				3: 3,
				4: 4,
				5: 5,
			},
		},
		fontFamily: {
			heebo: ["Heebo", "sans-serif"],
			khand: ["Khand", "sans-serif"],
		},
		screens: {
			"2xl": "1440px",
			lg: "992px",
			"max-2xl": { max: "1440px" },
			"max-lg": { max: "992px" },
			"max-md": { max: "768px" },
			"max-sm": { max: "576px" },
			"max-xl": { max: "1200px" },
			md: "768px",
			sm: "576px",
			xl: "1200px",
		},
	},
};
