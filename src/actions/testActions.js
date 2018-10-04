import * as types from "../constants/actionTypes";

export const testAction = () => ({
  type: types.TEST_ACTION,
  payload: "hello world"
});

export const testThunk = () => {
  return (dispatch, getState) => {
    console.log("getState()", getState());
    dispatch(testAction());
  };
};
