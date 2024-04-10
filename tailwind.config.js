import plugin from "tailwindcss/plugin";

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	mode: "jit",
	plugins: [
		require("@pyncz/tailwind-mask-image"),
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
				blue: "#0084FF",
				gray: "#1a1a1a",
				green: "#13CF14",
				"light-gray": {
					bg: "#F8F9FA",
					border: "#E5E8EB",
					icon: "#c0c4c9",
				},
				mint: "#00D2AB",
				orange: "#FF7E29",
				pink: "#FF5CA1",
				primary: "#242938",
				red: "#FA3C4D",
				secondary: {
					blue: "#A0D0FF",
					green: "#89E789",
					mint: "#7FE8D4",
					orange: "#FFBF94",
					pink: "#FFAED0",
					red: "#FD9EA6",
					violet: "#CCB9FF",
					yellow: "#FFE180",
				},
				tertiary: {
					green: "#BDF2BD",
					mint: "#BFF3E9",
					orange: "#FFDBC3",
					pink: "#FFD1E5",
					violet: "#D9CBFF",
					yellow: "#FFEEB8",
				},
				violet: "#7646FF",
				yellow: "#FFC300",
			},
			fontSize: {
				"3.5xl": "2rem",
				"4.5xl": "2.5rem",
				"5.25xl": "3.25rem",
				"7.5xl": "5rem",
			},
			lineHeight: {
				8.5: "2.125rem",
			},
			rotate: {
				135: "135deg",
			},
			scale: {
				120: "1.2",
			},
			spacing: {
				13: "3.25rem",
				15: "3.75rem",
				17: "4.25rem",
				22: "5.5rem",
				25: "6.25rem",
				26: "6.5rem",
				30: "7.5rem",
				33: "8.25rem",
				34: "8.5rem",
				35: "8.75rem",
				4.5: "1.125rem",
				42.5: "10.625rem",
				5.5: "1.375rem",
				7.5: "1.875rem",
				8.5: "2.125rem",
				9.5: "2.375rem",
			},
			zIndex: {
				1: 1,
				2: 2,
				3: 3,
				4: 4,
				5: 5,
				9: 9,
			},
		},
		fontFamily: {
			exo: ["Exo", "sans-serif"],
			heebo: ["Heebo", "sans-serif"],
		},
		screens: {
			"2xl": "1440px",
			lg: "992px",
			md: "768px",
			sm: "576px",
			xl: "1200px",
		},
	},
};
