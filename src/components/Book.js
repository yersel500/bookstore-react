import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/book';

const Book = ({ details }) => {
  const { author, title, id } = details;
  const dispatch = useDispatch();
  const deleteBook = (e) => {
    dispatch(removeBook(e.target.id));
  };
  return (
    <div>
      <p>My category</p>
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button" id={id} onClick={deleteBook}> Remove </button>
    </div>
  );
};

Book.defaultProps = { details: { author: '', title: '', id: '' } };
Book.propTypes = {
  details: {
    author: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string,
  },
};

export default Book;
