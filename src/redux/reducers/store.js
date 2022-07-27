import {createStore} from 'redux'
import rootReducers from './rootReducers.js';

const store = createStore(rootReducers);
export default store; 