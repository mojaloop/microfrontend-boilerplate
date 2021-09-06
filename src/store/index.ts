export { default } from './configureStore';
export { default as ReduxContext, useStore, useSelector } from './context';
export * from './types';

// the store is initialized outside the function component
// so that it is persisted between mounts
export { default as store } from './store';
