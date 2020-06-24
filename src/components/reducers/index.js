import { combineReducers } from "redux";
import loggedReducer from "./userLogged";
import RestloggedReducer from "./restLogged";
import DelloggedReducer from "./delLogged";
import CountItemsReducer from "./countItems";

const allReducers = combineReducers({
  userLogged: loggedReducer,
  restLogged: RestloggedReducer,
  delLogged: DelloggedReducer,
  countItems: CountItemsReducer,
});

export default allReducers;
