//Actions
const ADDBOOK = 'ADDBOOK';
const REMOVEBOOK = 'REMOVEBOOK';

//Actions Creators
export function addBook(newBook) {
  return {type: ADDBOOK, book: newBook};
}

export function removeBook(myBook) {
  return {type: REMOVEBOOK, book: myBook};
}

//Reducer
export default function bookReducer(state = [], action) {
  switch(action.type) {
    case ADDBOOK:
      return ([
        ...state,
        newBook
      ]
      );
    case REMOVEBOOK:
      return ([
        ...state,
      ]);
      default:
        return state;
  }
}

