// Actions
const ADDBOOK = 'bookstore/bookReducer/ADD_BOOK';
const REMOVEBOOK = 'bookstore/bookReducer/REMOVE_BOOK';

// Actions Creators
export const addBook = (newBook) => ({ type: ADDBOOK, payload: newBook });

export const removeBook = (myBook) => ({ type: REMOVEBOOK, payload: myBook });

// Reducer
export default function bookReducer(state = [], action) {
  switch (action.type) {
    case ADDBOOK:
      return ([
        ...state,
        action.payload,
      ]
      );
    case REMOVEBOOK:
      return state.filter((element) => element.id !== action.payload);
    default:
      return state;
  }
}
