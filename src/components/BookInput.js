import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/book';

const BookInput = () => {
  const [book, SetBook] = useState({
    author: '',
    title: '',
  });

  const dispatch = useDispatch();

  const handleAuthor = (e) => {
    SetBook({
      ...book,
      author: e.target.value
    })
  }

  const handleTitle = (e) => {
    SetBook({
      ...book,
      title: e.target.value
    })
  }

  const handleBook = (e) => {
    e.preventDefault();
    console.log(book);
    dispatch(addBook(book));
  }

  return (
    <div>
      <form onSubmit={handleBook}>
        <input type="text" placeholder="Enter the author" name='author' onChange={handleAuthor} />
        <input type="text" placeholder="Enter the title" name='title' onChange={handleTitle}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookInput;
