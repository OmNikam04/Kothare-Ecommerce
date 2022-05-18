import React, { Fragment, useCallback, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home2/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../layout/MetaData";
import {categories} from '../../data'

const Products = ({ match }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  // const [discountedPrice, setDiscountedPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");

  const [ratings, setRatings] = useState(0);

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = async (event, newPrice) => {
    await setPrice(newPrice);
  };
  let count = filteredProductsCount;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, price, category, ratings));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, keyword, currentPage, category, alert, error]);

  const fetchRequest = useCallback(() => {
    window.scrollTo(0, 0);
    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, category, price, ratings]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- Kothari's Luggage Mall" />
          <div className="productsDiv">
            <h2 className="productsHeading">Products</h2>
            <h2 className="productsSubHeading">
              Selected Category: {category ? category : "All"}
            </h2>

            {/* <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div> */}
            <div className="products">
              <div className="container">
                <div className="product-items">
                  {products &&
                    products.map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))}
                </div>
              </div>
            </div>

            <div className="filterBox">
              <Typography>Price</Typography>
              <Slider
                value={price}
                onChange={priceHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={20000}
                step={500}
              />

              <Typography>Categories</Typography>
              <ul className="categoryBox">
                {categories.map((category) => (
                  <li
                    className="category-link"
                    key={category}
                    onClick={() => setCategory(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>

              <fieldset>
                <Typography component="legend">Ratings Above</Typography>
                <Slider
                  value={ratings}
                  onChange={(e, newRating) => {
                    setRatings(newRating);
                  }}
                  aria-labelledby="continuous-slider"
                  valueLabelDisplay="auto"
                  min={0}
                  max={5}
                />
              </fieldset>

              <button className="filterBtn" onClick={fetchRequest}>
                Apply Filter
              </button>
            </div>
            {resultPerPage < count && (
              <div className="paginationBox">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={productsCount}
                  onChange={setCurrentPageNo}
                  nextPageText="Next"
                  prevPageText="Prev"
                  firstPageText="1st"
                  lastPageText="Last"
                  itemClass="page-item"
                  linkClass="page-link"
                  activeClass="pageItemActive"
                  activeLinkClass="pageLinkActive"
                />
              </div>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
