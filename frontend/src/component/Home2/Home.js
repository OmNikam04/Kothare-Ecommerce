import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import Contact from "../layout/Contact/Contact"
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Kothari's Lugguage Mall" />

          <div className="banner">
            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
            <span className="developer">Project Developed by om nikam</span>
          </div>
          <div className="products">
            <div id="container" className="container">
              <h1 className="lg-title">Our Featured Products</h1>
              <div className="product-items">
                {products &&
                  products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
              </div>
            </div>
          </div>
          <Contact/>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
