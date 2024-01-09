import { Link } from "react-router-dom"

export default function ProductCard({product}) {
  const {id,image,category,price}=product
  
  return (
   
      <div className="container">
    <Link to={`/detail/${id}`}>
      <div className="containerImage">
      <img src={image} alt="" />
      </div>
      <div className="description">
        {category}
        <div>
         $ {price}

         <Link to={`detail/${id}`}>
          more details
         </Link>
        </div>
      </div>
    </Link>
      </div>
  
  )
}
