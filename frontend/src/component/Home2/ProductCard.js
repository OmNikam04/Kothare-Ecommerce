import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ProductCard = ({ product }) => {
  const MAX_PRODUCT_NAME_LENGTH = 20;
  const prodName = product.name
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      {/* <!-- single product --> */}
      <div className= "product">
           <div className= "product-content_home">
               <div className= "product-img">
                   <img src = {product.images[0].url} alt="product image" />
               </div>
               <div className= "product-btns">
                   <button type = "button" className= "btn-buy"> buy now
                       <span><i className= "fas fa-shopping-cart"></i></span>
                   </button>
               </div>
           </div>

           <div className= "product-info">
               <div className= "product-info-top">
                   <h2 className= "sm-title">{product.category}</h2>
                   <div className= "rating">
                    <Rating className="stars" {...options} />{" "}
                   </div>
               </div>
               <h6 className= "product-name">{prodName.length > MAX_PRODUCT_NAME_LENGTH ?`${prodName.substring(0, MAX_PRODUCT_NAME_LENGTH)}...`: prodName}</h6>
               <p className= "product-price">{`₹${product.price}`}</p>
               <p className= "product-price">{`₹${product.price-(product.price*product.discount/100)}`}</p>
           </div>

           <div className= "off-info">
               <h2 className= "sm-title">{`${product.discount}% off`}</h2>
           </div>
       </div>
       {/* <!-- end of single product --> */}
    </Link>
  );
};

export default ProductCard;
