import { createStore, combineReducers } from 'redux';
import bookReducer from './books/books';
import catReducer from './categories/categories';

const rootReducer = combineReducers({ bookReducer, catReducer });

const store = createStore(rootReducer);

export default store;