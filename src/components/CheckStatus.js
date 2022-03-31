import React from 'react';
import { useDispatch } from 'react-redux';
import { checkCat } from '../redux/categories/categories';

const CheckStatus = () => {
  const dispatch = useDispatch();
  const reviewStatus = () => {
    dispatch(checkCat());
  };
  return (
    <div>
      <button type="button" onClick={reviewStatus}>Check Status</button>
    </div>
  );
};

export default CheckStatus;
