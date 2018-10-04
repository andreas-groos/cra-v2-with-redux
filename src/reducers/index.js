import { combineReducers } from "redux";
import testReducer from "./testReducer";
import anotherReducer from "./anotherReducer";

const rootReducer = combineReducers({
  test: testReducer,
  another: anotherReducer
});

export default rootReducer;
