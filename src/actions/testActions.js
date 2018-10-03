import * as types from "../constants/actionTypes";

export const testAction = () => ({
  type: types.TEST_ACTION,
  payload: "hello world"
});
