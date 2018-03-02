import { combineReducers } from "redux";

const initialState = {
  reviews: []
};

const ReviewReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const RootReducer = combineReducers({
  reviews: ReviewReducer
});

export default RootReducer;
