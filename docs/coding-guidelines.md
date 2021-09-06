## Coding guidelines

The project uses Babel, Prettier and ESLint.

Configuration settings are described in [configuring the tools](./configuring-the-tools.md).

- [Styling](#styling)
- [Typescript](#typescript)

### Styling

The project uses the BEM naming convention. More about [BEM](http://getbem.com/). 
Style modules can be either plain CSS or SCSS.

### Typescript

The project uses TypeScript. Strict rules have been setup in order to ensure proper type safety and reduce maintenance work in the future.

A good rule of thumb is to follow the [do's and dont's](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html) of the Typescript handbook.

Usage of `any` is discouraged; a `// TODO` comment needs to be added in order to track the issue for a later fix.

**Note**: the command `yarn lint` can help identify wrong and missing types.