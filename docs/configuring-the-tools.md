## Configuring the tools

frontend-boilerplate uses a number of tools internally:

- [Babel](#babel)
- [Prettier](#prettier)
- [ESLint](#eslint)
- [StyleLint](#stylelint)
- [LintStaged](#lintstaged)
- [Jest](#jest)
- [Typescript](#typescript)

### Babel

Babel is used to transpile the code to older ES versions and allow it to run in older browsers.

Configuration file is `.babelrc`

### Prettier

Prettier is used to apply opinionated code formatting.

Configuration files are `.prettierrc`, `.prettierignore`

### ESLint

ESLint is used to lint the source code and check coding rules are being followed.

Configuration file is `.eslintrc.json`

### StyleLint

StyleLint is used to lint the style files.

Configuration file is `.stylelintrc.json`

### LintStaged

Lintstaged is used to configure the linting (ESLint and StyleLint) process.

Configuration file is `lint-staged.config.js`

### Husky

Husky is used to perform tasks on git hooks.

Configuration file is `.husky/`

### Jest

Jest is used to run your tests.

Configuration files are `src/setupTests.ts` and `src/test-utils.tsx`

### Typescript

Typescript is used to provide robust typing to the codebase.

Configuration file is `tsconfig.json`
