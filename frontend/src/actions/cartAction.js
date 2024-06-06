import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
} from "../constants/cartConstants";
import axios from "axios";

// Function to set headers with token
const setHeaders = () => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return config;
};

// Add to Cart
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/product/${id}`,
      setHeaders()
    );

    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: data.product._id,
        name: data.product.name,
        price: data.product.price,
        discount: data.product.discount,
        image: data.product.images[0].url,
        stock: data.product.Stock,
        quantity,
      },
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    console.error("Error adding item to cart: ", error);
  }
};

// REMOVE FROM CART
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: id,
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    console.error("Error removing item from cart: ", error);
  }
};

// SAVE SHIPPING INFO
export const saveShippingInfo = (data) => async (dispatch) => {
  try {
    dispatch({
      type: SAVE_SHIPPING_INFO,
      payload: data,
    });

    localStorage.setItem("shippingInfo", JSON.stringify(data));
  } catch (error) {
    console.error("Error saving shipping info: ", error);
  }
};
