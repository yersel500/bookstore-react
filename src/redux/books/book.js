// Actions
const ADDBOOK = 'bookstore/bookReducer/ADD_BOOK';
const REMOVEBOOK = 'bookstore/bookReducer/REMOVE_BOOK';
const APIBOOK = 'bookstore/bookReducer/API_BOOK';

let initialState = [];

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

export const removeBook = (id) => ({ type: REMOVEBOOK, payload: id });

export const apiBook = (data) => ({
  type: APIBOOK,
  payload: data,
});

export const getBooks = () => async (dispatch) => {
  const itemUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/opIvy7T4p9EOFrXXjvZD/books';
  const response = await fetch(itemUrl);
  const data = await response.json();
  const data1 = [];
  Object.entries(data).forEach(([key, value]) => {
    const newValue = value[0];
    const newdata = {
      ...newValue,
      id: key,
    };
    data1.push(newdata);
  });
  initialState = data1;
  dispatch(apiBook(data1));
};

export const eraseBook = (id) => {
  const deleteBook = { item_id: id };
  return (async (dispatch) => {
    await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/opIvy7T4p9EOFrXXjvZD/books/${deleteBook.item_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(deleteBook),
    });
    dispatch(removeBook(id));
  });
};

export const addBook = (newBook) => ({ type: ADDBOOK, payload: newBook });

// Reducer
export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ADDBOOK:
      return ([
        ...state,
        action.payload,
      ]
      );
    case APIBOOK:
      return (action.payload);
    case REMOVEBOOK:
      return state.filter((element) => element.id !== action.payload);
    default:
      return state;
  }
}
