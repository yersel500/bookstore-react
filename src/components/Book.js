import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { eraseBook } from '../redux/books/book';

const Book = ({ details }) => {
  const {
    author, title, id, category,
  } = details;
  const dispatch = useDispatch();
  const deleteBook = (e) => {
    dispatch(eraseBook(e.target.id));
  };
  return (
    <div>
      <p>
        {' '}
        {category}
      </p>
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button" id={id} onClick={deleteBook}> Remove </button>
    </div>
  );
};

Book.defaultProps = {
  details: {
    author: '', title: '', id: '', category: '',
  },
};
Book.propTypes = {
  details: {
    author: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string,
    category: PropTypes.string,
  },
};

export default Book;
