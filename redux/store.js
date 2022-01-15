import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import reducers from './reducers';
import initialState from './initialState';

const store = createStore(reducers, initialState, applyMiddleware(thunk));

const persistor = persistStore(store);

export { store, persistor };
