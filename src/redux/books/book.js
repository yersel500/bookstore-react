// Actions
const ADDBOOK = 'bookstore/bookReducer/ADD_BOOK';
const REMOVEBOOK = 'bookstore/bookReducer/REMOVE_BOOK';

// Actions Creators
export const postBook = (newBook) => async () => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/opIvy7T4p9EOFrXXjvZD/books', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: newBook.id,
      title: newBook.title,
      author: newBook.author,
      category: 'my-category',
    }),
  });
};

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
