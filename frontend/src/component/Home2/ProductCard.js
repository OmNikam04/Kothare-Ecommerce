import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";



// discountPercent = 100 * (original_price - discounted_price) / original_price

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  let discountedPrice = product.discountedPrice
  let actualPrice = product.price

  let discount = Math.round(100 * (actualPrice - discountedPrice) / actualPrice);
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      {/* <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <Rating className="stars" {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <s><span>{`₹${product.price}`}</span></s>
      <span>{`₹${product.discountedPrice}`}</span> */}

      {/* <!-- single product --> */}
      <div className= "product">
           <div className= "product-content">
               <div className= "product-img">
                   <img src = {product.images[0].url} alt = "product image" />
               </div>
               <div className= "product-btns">
                   <button type = "button" className= "btn-cart"> add to cart
                       <span><i className= "fas fa-plus"></i></span>
                   </button>
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
               <a href = "#" className= "product-name">{product.name}</a>
               <p className= "product-price">{`₹${product.price}`}</p>
               <p className= "product-price">{`₹${product.discountedPrice}`}</p>
           </div>

           <div className= "off-info">
               <h2 className= "sm-title">{`${discount}% off`}</h2>
           </div>
       </div>
       {/* <!-- end of single product --> */}
    </Link>
  );
};

export default ProductCard;
