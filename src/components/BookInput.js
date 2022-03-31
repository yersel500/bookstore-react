import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, getBooks, postBook } from '../redux/books/book';

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
    console.log('book was added');
  };

  return (
    <div>
      <form onSubmit={handleBook}>
        <input type="text" placeholder="Enter the author" name="author" onChange={handleAuthor} />
        <input type="text" placeholder="Enter the title" name="title" onChange={handleTitle} />
        <button type="submit">Add new</button>
      </form>
    </div>
  );
};

export default BookInput;
