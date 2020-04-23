module.exports = {
	parser: 'babel-eslint',
	extends: ['prettier'],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': ['error', { singleQuote: true, useTabs: true, printWidth: 150 }],
		'comma-dangle': ['error', 'never']
	}
};
