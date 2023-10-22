import { legacy_createStore as createStore } from 'redux';
import { rootReducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhencers = composeWithDevTools();

export const store = createStore(rootReducer, composeEnhencers);
