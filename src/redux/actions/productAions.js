import { actionTypes } from "../constants/actionsTypes";

const {SET_PRODUCTS,SELECTED_PRODUCT,REMOVE_SELECTED_PRODUCT} =actionTypes

const setProducts = (products)=>(
  {
    type:SET_PRODUCTS,
    payload:{products}
  }
);

const selectedProduct = (product)=>(
  {
    type:SELECTED_PRODUCT,
    payload:{product}
  }
);
const removeSlectedProduct = ()=>(
  {
    type:REMOVE_SELECTED_PRODUCT,
  }
);

export {setProducts,selectedProduct,removeSlectedProduct}