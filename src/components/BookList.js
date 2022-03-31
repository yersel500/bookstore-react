import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const myState = useSelector((state) => state);
  console.log(myState);
  return (
    <div>
      {myState.add.map((bookDetail, index) => (
        <Book
          details={bookDetail}
          key={`book-${index}`}
        />
      ))}
    </div>
  );
};

export default BookList;
