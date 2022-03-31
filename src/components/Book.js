import React from 'react';
import { useDispatch } from 'react-redux';
import bookReducer, { removeBook } from '../redux/books/book';

const Book = (props) => {
  console.log(props.details);
  const { author, title, id } = props.details;
  const dispatch = useDispatch();
  const deleteBook = (e) => {
    console.log(e.target.id);
    dispatch(removeBook(e.target.id));
  }
  return (
    <div>
      <p>My category</p>
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button" id={id} onClick={deleteBook}> Remove </button>
    </div>
  );
};

export default Book;
