import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/book';
import Book from './Book';

const BookList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const myState = useSelector((state) => state.bookReducer);
  return (
    <div className="booklist">
      {myState.map((bookDetail) => (
        <Book
          details={bookDetail}
          key={bookDetail.id}
        />
      ))}
    </div>
  );
};

export default BookList;
