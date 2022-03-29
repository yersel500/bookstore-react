//Actions
const ADDBOOK = 'ADDBOOK';
const REMOVEBOOK = 'REMOVEBOOK';

//Actions Creators
export const addBook = (newBook) => {
  return {type: ADDBOOK, book: newBook};
}

export const removeBook = (myBook) => {
  return {type: REMOVEBOOK, book: myBook};
}

//Reducer
export default function bookReducer(state = [], action) {
  switch(action.type) {
    case ADDBOOK:
      return ([
        ...state,
        action.book
      ]
      );
    case REMOVEBOOK:
      return state.filter(element => element.id !== action.book.id);
      default:
        return state;
  }
}

