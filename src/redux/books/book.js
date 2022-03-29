// Actions
const ADDBOOK = 'bookstore/bookReducer/ADD_BOOK';
const REMOVEBOOK = 'bookstore/bookReducer/REMOVE_BOOK';

// Actions Creators
export const addBook = (newBook) => ({ type: ADDBOOK, book: newBook });

export const removeBook = (myBook) => ({ type: REMOVEBOOK, book: myBook });

// Reducer
export default function bookReducer(state = [], action) {
  switch (action.type) {
    case ADDBOOK:
      return ([
        ...state,
        action.book,
      ]
      );
    case REMOVEBOOK:
      return state.filter((element) => element.id !== action.book.id);
    default:
      return state;
  }
}
