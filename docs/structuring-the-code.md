## Structuring the code

- [Features](#features)
- [Utilities](#utilities)

### Features

Features should be organized in modules.

A module is a folder containing multiple files. Each file has a clear responsibility which should not mixed with others, meaning a clear separation of concerns needs to be applied.

To organize features logically, modules are nested following the Routing structure. That makes it easy to keep the React and the Redux structure compatible with each other.

Example of a module structure:

- `index.ts`      is the index file, re-exporting the whole module
- `components`    contains the React components used in this module
- `Router.tsx`    contains the React Router for the Auth module
- `Auth.scss`     is responsible of styling the HTML
- `Auth.tsx`      is the React view for the Auth module
- `connectors.ts` contains the bindings between the actions and selectors to provide the React view with
- `hocs.tsx`      contains additional higher order components
- `sagas.ts`      contains, as the name suggests, the redux sagas for async operations
- `selectors.ts`  contains the redux selectors for the portion of the redux state that belongs to Auth
- `slice.ts`      contains the actions/reducer of the Auth module
- `helpers.ts`    exports all the reusable helpers used in and outside the Auth module
- `types.ts`      exports all the types used in the Auth module

### Utilities

Utilities should go in the `src/utils` folder.

Utilities is reusable code that is basically independent from your business logic.

An api utility, for instance, doesn't depends on how you organize your pages, but it's most likely going to used in your redux sagas.
