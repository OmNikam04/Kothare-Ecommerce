import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getProductDetails,
  newReview,
} from "../../actions/productAction";
import ReviewCard from "./ReviewCard.js";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import { addItemsToCart } from "../../actions/cartAction";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { NEW_REVIEW_RESET } from "../../constants/productConstants";

const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  const MAX_PRODUCT_NAME_LENGTH = 28;
  const prodName = product.name
  
  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
    );
    
    const options = {
      size: "large",
      value: product.ratings,
      readOnly: true,
      precision: 0.5,
    };
    
    const [quantity, setQuantity] = useState(1);
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    
    

  const increaseQuantity = () => {
    if (product.Stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
      dispatch(addItemsToCart(match.params.id, quantity));
      alert.success("Item Added To Cart");
  };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", match.params.id);

    dispatch(newReview(myForm));

    setOpen(false);
  };
  /*// for discount percent
  let discountedPrice = product.discountedPrice;
  let actualPrice = product.price;

  let discount = Math.round(
    (100 * (actualPrice - discountedPrice)) / actualPrice
  );
  // end for discount percent */

  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }

      if (reviewError) {
        alert.error(reviewError);
        dispatch(clearErrors());
      }

      if (success) {
        alert.success("Review Submitted Successfully");
        dispatch({ type: NEW_REVIEW_RESET });
      }
      
      dispatch(getProductDetails(match.params.id));
    }

    return () => {
      unmounted = true;
    };
  }, [dispatch, match.params.id, error, alert, reviewError, success]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${product.name} -- KOTHARI'S LUGGAGE MALL`} />
          {/* Start of new Actual product display */}
          <div className="card-wrapper">
            <div className="card">
              {/* <!-- card left --> */}
              <div className="product-imgs">
                <div className="img-display">
                  <div className="img-showcase">
                    <Carousel>
                      {product.images &&
                        product.images.map((item, i) => (
                          <img
                            className="CarouselImage"
                            key={i}
                            src={item.url}
                            alt={`${i} Slide`}
                          />
                        ))}
                    </Carousel>
                  </div>
                </div>
              </div>
              {/* <!-- card right --> */}
              <div className="product-content">
                {/* <h2 className="product-title">{product.name}</h2> */}
                <h2 className="product-title">{prodName?.length > MAX_PRODUCT_NAME_LENGTH ?`${prodName.substring(0, MAX_PRODUCT_NAME_LENGTH)}...`: prodName}</h2>
                <p className="product-link">Product # {product._id}</p>
                <div className="product-rating">
                  <Rating {...options} />
                  <span>
                    {product.ratings} ({product.numOfReviews} reviews)
                  </span>
                </div>

                <div className="product-price">
                  <p className="last-price">
                    Old Price: <span>{`₹${product.price}`}</span>
                  </p>
                  <p className="new-price">
                    New Price:{" "}
                    <span>
                      {`₹${product.price-(product.price*product.discount/100)}`} ({product.discount}%)
                    </span>
                  </p>
                </div>

                <div className="product-detail">
                  <h2>about this item: </h2>
                  <p>{product.description}</p>
                  <p>
                    All products are shipped and packed by our store itself. We
                    value your time.
                  </p>
                  <ul>
                    <li>
                      Color: <span>{product.color}</span>
                    </li>
                    <li>
                      Available:{" "}
                      <span>
                        <b
                          className={
                            product.Stock < 1 ? "redColor" : "greenColor"
                          }
                        >
                          {product.Stock < 1 ? "Out Of Stock" : "In Stock"}
                        </b>
                      </span>
                    </li>
                    <li>
                      Category: <span>{product.category}</span>
                    </li>
                    <li>
                      Shipping Area: <span>All across the Nashik</span>
                    </li>
                    <li>
                      Shipping Fee:{" "}
                      <span>Free (only if product price exceeds ₹1000)</span>
                    </li>
                  </ul>
                </div>

                <div className="purchase-info">
                  <button className="btn" onClick={decreaseQuantity}>
                    -
                  </button>
                  <input readOnly type="number" value={quantity} />
                  <button className="btn" onClick={increaseQuantity}>
                    +
                  </button>

                  <button type="button" disabled={product.Stock < 1 ? true : false}
                    onClick={addToCartHandler} className="btn">
                    Add to Cart <i className="fas fa-shopping-cart"></i>
                  </button>
                  <button
                    type="button"
                    onClick={submitReviewToggle}
                    className="btn"
                  >
                    Submit review
                  </button>
                </div>

                <div className="social-links_productsDetails">
                  <p>Share At: </p>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End of new Actual product display */}

          <h3 className="reviewsHeading">REVIEWS</h3>

          <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewToggle}
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">
              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                size="large"
              />

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button onClick={submitReviewToggle} color="secondary">
                Cancel
              </Button>
              <Button onClick={reviewSubmitHandler} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>

          {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
