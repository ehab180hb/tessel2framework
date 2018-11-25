module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/src/environments/',
    '<rootDir>/src/@linked/',
    '<rootDir>/src/scripts/',
    '<rootDir>/docker-build/',
    '<rootDir>/dist/',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  moduleNameMapper: {
    // should match aliases from tsconfig.json
    // as explained here: https://alexjoverm.github.io/2017/10/07/Enhance-Jest-configuration-with-Module-Aliases/
    '@src/(.*)$': '<rootDir>/src/$1',
    '@linked/(.*)$': '<rootDir>/src/@linked/$1',
  },
  skipNodeResolution: true,
  globals: {
    'ts-jest': {
      // skipBabel: false, // when set to 'true' it breaks code coverage
    },
  },
  testEnvironment: 'node',
  unmockedModulePathPatterns: [],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/index.ts',
    '!src/@linked/**',
    '!@linked/**',
    '!src/test/**',
    '!src/typings/**',
    '!src/scripts/**',
    '!src/environments/**',
    '!public/**',
    '!**/*.module.ts',
    '!**/*.mock.ts',
    '!**/*.page.ts',
    '!**/*.component.ts',
  ],
  rootDir: process.cwd(),
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'jest tests',
        output: './report/jest-junit.xml',
        classNameTemplate: '{classname}-{title}',
        titleTemplate: '{classname}-{title}',
        ancestorSeparator: ' › ',
        usePathForSuiteName: 'true',
      },
    ],
  ],
}
