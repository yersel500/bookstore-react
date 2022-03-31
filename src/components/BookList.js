import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const myState = useSelector((state) => state);
  return (
    <div>
      {myState.add.map((bookDetail) => (
        <Book
          details={bookDetail}
          key={bookDetail.id}
        />
      ))}
    </div>
  );
};

export default BookList;
