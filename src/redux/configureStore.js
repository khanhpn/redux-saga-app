import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

const composeEnhancers = process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    shouldHotReload: false
  }) : compose;

const configureStore = () => {
  const middelwares = [
    thunk
  ];
  const enhancers = [applyMiddleware(...middelwares)];
  const store = createStore(rootReducer, composeEnhancers(...enhancers));
  return store;
};

export default configureStore;
