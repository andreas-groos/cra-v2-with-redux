import { TEST_ACTION } from "../constants/actionTypes";

const initialState = {
  initial: "the beginning"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TEST_ACTION:
      return { ...state, subsequent: action.payload };

    default:
      return state;
  }
};
