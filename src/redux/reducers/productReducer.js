import { actionTypes } from "../constants/actionsTypes";

const {SET_PRODUCTS,SELECTED_PRODUCT,REMOVE_SELECTED_PRODUCT} =actionTypes
const inicialState ={
  products :[]
}
export const productReducer =(state=inicialState,{type,payload})=>{
  switch (type){
    case SET_PRODUCTS:
       return {
        ...state,products:payload.products
       };
    
    default:
      return state;
  }
}
export const slectedProdcutReducer = (state=inicialState,{type,payload})=>{
  switch (type) {
    case SELECTED_PRODUCT:
       return {...state,...payload.product};
    case REMOVE_SELECTED_PRODUCT:
       return {};
    default:
      return state
  }
}