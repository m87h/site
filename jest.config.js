module.exports = {
	transform: {
		'^.+\\.jsx?$': '<rootDir>/test/unit/preprocess.js',
	},
	moduleNameMapper: {
		'.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
		'.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/unit/__mocks__/fileMock.js',
	},
	testPathIgnorePatterns: [
		'<rootDir>/node_modules/',
		'<rootDir>/.cache/',
	],
	transformIgnorePatterns: [
		'<rootDir>/node_modules/(?!(gatsby)/)',
	],
	globals: {
		__PATH_PREFIX__: '',
	},
	setupFiles: [
		'<rootDir>/test/unit/loadershim.js',
	],
	setupFilesAfterEnv: [
		'<rootDir>/test/unit/setup.js',
	],
	roots: [
		'<rootDir>/src/',
		'<rootDir>/test/unit/',
	],
	coverageDirectory: '<rootDir>/coverage/',
	collectCoverage: true,
};
