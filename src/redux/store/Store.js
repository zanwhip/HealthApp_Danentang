import { createStore } from 'redux';
import reducers from '../reducers/reducers';
import { combineReducers } from 'redux';

const routeReducer = combineReducers({ reducers });

const store = createStore(routeReducer);

export default store;
