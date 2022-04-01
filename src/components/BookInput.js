import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, postBook } from '../redux/books/book';

const BookInput = () => {
  const [book, SetBook] = useState({
    author: '',
    title: '',
    id: '',
  });

  const dispatch = useDispatch();

  const handleAuthor = (e) => {
    SetBook({
      ...book,
      author: e.target.value,
      id: uuidv4(),
    });
  };

  const handleTitle = (e) => {
    SetBook({
      ...book,
      title: e.target.value,
    });
  };

  const handleBook = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
    dispatch(postBook(book));
    e.target.author.value = '';
    e.target.title.value = '';
  };

  return (
    <div className="form-container">
      <div className='internal-form-container'>
        <p className="title-form">ADD NEW BOOK</p>
        <form onSubmit={handleBook} className="form">
          <input type="text" placeholder="Enter the author" name="author" onChange={handleAuthor} className="author-input" />
          <input type="text" placeholder="Enter the title" name="title" onChange={handleTitle} className="title-input" />
          <button type="submit" className="submit-book">ADD A BOOK</button>
        </form>
      </div>
    </div>
  );
};

export default BookInput;
