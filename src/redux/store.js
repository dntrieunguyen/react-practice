import { legacy_createStore as createStore } from 'redux';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools();

// createStore(rootReducer, initValue, enhancers: redux saga, redux thunk)
const store = createStore(rootReducer, composeEnhancers);

export default store;
