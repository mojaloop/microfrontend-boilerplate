### Microfrontend Boilerplate

This is the boilerplate project to create microfrontends.

It is based on React / Redux and it is built in Typescript and developed with Webpack, Babel, Eslint, Prettier.

Includes React Router, Redux Saga, and the @Modusbox UI components.

It provides a basic module structure ready to be used, a webpack configuration that exports the microfrontend so that it can be lazy loaded.

#### Available scripts

 - `yarn prettier` to prettify the codebase
 - `yarn lint` to lint the codebase
 - `yarn build` to produce the bundle(s)
 - `yarn serve` to run the production build locally
 - `yarn test` to run the tests


#### Structure

The file structure is quite similar to a standard module based structure; the only difference with a regular app where all source is bundled, here we are exporting an _Injector_.

Folders are modules and inculde separate files around React views and Redux structure.


#### Webpack configuration


Enabling code splitting for the microfrontend is done using the Webpack _ModuleFederationPlugin_.

The confguration is similar to the following: 
```javascript
plugins: [
    new ModuleFederationPlugin({
      name: 'app',
      library: { type: 'var', name: 'app' },
      filename: 'app.js',
      exposes: {
        './App': './src/Injector',
      },
      shared: [
        'react',
        'react-dom',
        ...
      ],
      ...
````

