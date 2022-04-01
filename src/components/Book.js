import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { eraseBook } from '../redux/books/book';

const Book = ({ details }) => {
  const {
    author, title, id, category,
  } = details;
  const dispatch = useDispatch();
  const deleteBook = (e) => {
    dispatch(eraseBook(e.target.id));
  };

  const progress = 66;
  return (
    <div className="card-container">
      <div className="book-info">
        <p className="category">
          {category}
        </p>
        <h2 className="title">{title}</h2>
        <p className="author">{author}</p>
        <div className="button-container">
          <button type="button" className="comments">Comments</button>
          <button type="button" id={id} className="remove" onClick={deleteBook}> Remove </button>
          <button type="button" className="edit">Edit</button>
        </div>
      </div>
      <div className="progress-container">
        <div className="circle-progress">
          <CircularProgressbar value={progress} />
        </div>
        <div className="percentage-container">
          <p className="percentage">64%</p>
          <p className="status">Completed</p>
        </div>
      </div>
      <div className="chapter-container">
        <p className="chapter-title">CURRENT CHAPTER</p>
        <p className="chapter-name">Chapter 17</p>
        <button type="button" className="update-progress">UPDATE PROGRESS</button>
      </div>
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
