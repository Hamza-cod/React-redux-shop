import { combineReducers } from "redux";
import {productReducer, slectedProdcutReducer} from './productReducer'
export const reducers =combineReducers(
  {allProducts:productReducer,product:slectedProdcutReducer}
)