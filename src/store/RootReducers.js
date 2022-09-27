import { combineReducers } from "redux";
import ThemeCustomReducer from './ThemeCustom/ThemeCustomReducer';
import NotesReducer from "./notes/NotesReducer";
import CardProductList from "./CardProductList/CardProductList"
import OrderListReducer from "./OrderProductList/OrderListReducer";

const RootReducers = combineReducers({
    NotesReducer,
    ThemeCustomReducer,
    CardProductList,
    OrderListReducer

});
  
  export default RootReducers;