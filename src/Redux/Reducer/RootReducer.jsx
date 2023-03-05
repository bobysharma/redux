import Reducer from "./reducer";
import FakeReducer from "./FakeReducer";
import { combineReducers } from "redux";
import EstoreReducer from "./EstoreReducer";
 
const RootReducer=combineReducers({
    Reducer,
    FakeReducer,
    EstoreReducer,

});
export default RootReducer;