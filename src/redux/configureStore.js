import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './books/book';
import catReducer from './categories/categories';

const rootReducer = combineReducers({ bookReducer, catReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
