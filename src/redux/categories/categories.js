// Actions
const CHECKCAT = 'bookstore/catReducer/CHECK_CAT';

// Actions Creators
export const checkCat = () => ({ type: CHECKCAT });

// Reducer
export default function catReducer(state = [], action) {
  switch (action.type) {
    case CHECKCAT:
      return 'Under construction';
    default:
      return state;
  }
}
