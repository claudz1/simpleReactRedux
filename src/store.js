import {createStore, combineReducers,applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger'

import math from './reducers/mathReducer';
import user from './reducers/userReducer';
//store
export default createStore(
  combineReducers({math,user}),
 {},applyMiddleware(createLogger()));