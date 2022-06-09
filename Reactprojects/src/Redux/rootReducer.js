import { combineReducers } from "redux";

import shoppingReducer from "./Functions/Functionreducer";

const rootReducer = combineReducers({
  shop: shoppingReducer,
});

export default rootReducer;
