import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart, setTitle } from "../Redux/Functions/Functionactions";
const Imgbtn = ({ data, addToCart, setTitle }) => {
  useEffect(() => {
    setTitle(` | ${data.title}`);
  }, []);
  return (
    <React.Fragment>
      <div className="col-md-3 text-center">
        <img src={data.thumbnailUrl} alt=" " />

        <div className="d-flex flex-row align-items-center mx-5  ">
          <h4 className="mb-1 me-1">Price : ₹{data.price}</h4>
          <span className="text-danger">
            <s>₹648</s>
          </span>
        </div>

        <div className="mb-2">
          <Link as={Link} to={"/cart"}>
            <button
              onClick={() => addToCart(data.isbn)}
              type="button"
              className="btn btn-primary btn m-1 "
            >
              Buy Now
            </button>
          </Link>
          <button
            onClick={() => addToCart(data.isbn)}
            type="button"
            className="btn btn-secondary btn m-1"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
const mapDispachToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    setTitle: (id) => dispatch(setTitle(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    data: state.shop.currentItem,
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Imgbtn);
