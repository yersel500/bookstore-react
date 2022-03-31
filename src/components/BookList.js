import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const myState = useSelector((state) => state.bookReducer);
  return (
    <div>
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
