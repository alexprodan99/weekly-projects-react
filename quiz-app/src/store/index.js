import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default=localstorage
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const persistConfig = {
  key: 'quiz-app',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer, applyMiddleware(thunk));
  const persistor = persistStore(store);
  window.store = store;
  return { store, persistor };
};
