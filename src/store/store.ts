import configureStore from './configureStore';
// the store is initialized outside the function component
// so that it is persisted between mounts
export default configureStore(null, {
  isDevelopment: process.env.NODE_ENV === 'development',
});
