import { useDispatch, useSelector } from "react-redux"
import ProductCard from "./ProductCard"
import { StyledDisplay } from "../styles/styledDisplay"
import axios from "axios"
import {  setProducts } from "../redux/actions/productAions"
import { useEffect } from "react"

function ProductList () {
  const dispatch = useDispatch()
  const getProduct = async()=>{
    const {data} =await axios.get('https://fakestoreapi.com/products').catch((err)=>{
      console.log(err)
    });
    dispatch(setProducts(data))

  }

    useEffect(() => {
      getProduct()
      }
    ),[ProductList];
  const products = useSelector(state=>state.allProducts.products)
  // console.log(products)
  return (
    <>
    {products.length<1?<>loading...</>
    :
      <StyledDisplay>
      {
        products?.map((product,index)=>(
          <ProductCard key={index} product={product}/>
        ))
      }
       </StyledDisplay>}
    </>
  )
  
}
export default ProductList
