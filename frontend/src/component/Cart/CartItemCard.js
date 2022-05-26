import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";

const CartItemCard = ({ item, deleteCartItems }) => {
  const MAX_PRODUCT_NAME_LENGTH = 25;
  const prodName = item.name
  return (
    <div className="CartItemCard">
      <img src={item.image} alt="ssa" />
      <div>
        <Link to={`/product/${item.product}`}>{prodName?.length > MAX_PRODUCT_NAME_LENGTH ?`${prodName.substring(0, MAX_PRODUCT_NAME_LENGTH)}...`: prodName}</Link>
        {/* <Link to={`/product/${item.product}`}>{item.name}</Link> */}
        <span>{`Price: ₹${item.price-(item.price*item.discount/100)}`}</span>
        <p onClick={() => deleteCartItems(item.product)}>Remove</p>
      </div>
    </div>
  );
};

export default CartItemCard;
