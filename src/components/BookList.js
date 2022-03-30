import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const myState = useSelector((state) => state);
  console.log(myState);
  return (
    <div>
      <Book />
      <Book />
      <Book />
    </div>
  );
};

export default BookList;
