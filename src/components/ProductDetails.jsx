import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { StyledProductDetails } from "../styles/styledDisplay"
import axios from "axios"
import { useEffect } from "react"
import { removeSlectedProduct, selectedProduct } from "../redux/actions/productAions"
import ProductCard from "./ProductCard"

export const ProductDetails = () => {
  const {productId}=useParams()
  // console.log(productId)
  const dispatch = useDispatch(productId)
  const getSelectedProduct = async ()=>{
     const {data} = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
      console.log(err)
    
     })
    //  console.log(data)
     dispatch(selectedProduct(data))
  }
  useEffect(()=>{
    if(productId && productId!=='')
    {
      getSelectedProduct(productId)
      // dispatch(removeSlectedProduct())
    }
  }
  ,[productId])

  useEffect(()=>{
    if(productId && productId!=='')
    {
      dispatch(removeSlectedProduct())
    }
  }
  ,[productId])
  const product = useSelector((state)=>state.product)
  // console.log(product)
  // const {id,image,category,price}=product
  return (
    <>
    {Object.keys(product).length<1 ? 'loading ...':
    <StyledProductDetails>
     <ProductCard product={product}/>
    </StyledProductDetails>
    }
    </>
  )
}
