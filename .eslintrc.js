module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"react-app",
		"react-app/jest",
		"plugin:perfectionist/recommended-alphabetical",
		"plugin:prettier/recommended",
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "perfectionist", "prettier"],
	root: true,
	rules: {
		"prettier/prettier": ["warn"],
	},
};
