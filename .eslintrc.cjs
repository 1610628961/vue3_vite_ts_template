module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
		'vue/setup-compiler-macros': true,
	},
	extends: [
		'plugin:vue/vue3-recommended',
		'eslint:recommended',
		'@vue/eslint-config-typescript/recommended',
		'@vue/eslint-config-prettier',
	],
	rules: {
		'@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-empty-function': ['off', { allow: ['arrowFunctions'] }],
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'vue/require-default-prop': 'off',
		'vue/multi-word-component-names': 'off',
		'no-undef': 'off',	//不能有未定义的变量
	},
	overrides: [
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/explicit-function-return-type': 'off',
			},
		},
	],
}
