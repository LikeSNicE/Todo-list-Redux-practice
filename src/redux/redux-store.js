import { legacy_createStore as createStore,combineReducers } from "redux";
import addPageReducers from "./add-reducer";

const reducers = combineReducers({
  addPage: addPageReducers
})

const store = createStore(reducers);

export default store;