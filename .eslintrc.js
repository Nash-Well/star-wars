module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		node: true,
	},
	plugins: ['@typescript-eslint', 'react', 'react-native'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-native/all',
	],
	settings: {
		react: {
			version: 'detect',
		},
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'@typescript-eslint/no-var-requires': 0,
		'no-useless-catch': 'off',
		'no-undef': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'react-native/no-unused-styles': 'off',
		'react-native/no-color-literals': 'off',
		'react-native/sort-styles': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		'react-native/no-raw-text': 'off',
		'react-native/no-inline-styles': 'off',
		'@typescript-eslint/no-explicit-any': 1,
		'react/no-unstable-nested-components': 0,
		'react-hooks/rules-of-hooks': 0,
	},
}
