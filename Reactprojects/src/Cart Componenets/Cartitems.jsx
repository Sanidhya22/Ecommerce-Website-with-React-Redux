import React from "react";
import Placeorder from "./Placeorder";
import { connect } from "react-redux";
import {
  removeFromCart,
  addToCart,
  removeQty,
} from "../Redux/Functions/Functionactions";

const Cartitems = ({ cart, removeFromCart, addToCart, removeQty }) => {
  return (
    <React.Fragment>
      <div className="col">
        <div className="row">
          <div className="col-md-7  carditems">
            {cart.map((i) => {
              return (
                <div key={i.isbn} className="card mb-1">
                  <div className="card-body">
                    <div className="row">
                      <img src={i.thumbnailUrl} className="" />

                      <div className="col-md-6 col-lg-6 col-xl-8 small">
                        <h5>{i.title}</h5>

                        <div className="mt-1 mb-0 text-muted small">
                          <span>by</span>
                          <span className="text-primary"> - </span>
                          <span>{i.authors}</span>
                        </div>
                        <div className="mb-2 text-muted small">
                          <span>Categories</span>
                          <span className="text-primary"> - </span>
                          <span>{i.categories}</span>
                          <br />
                        </div>

                        <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                          <div className=" d-flex mt-1 align-items-center ">
                            <h4 className="mt-2 small">₹{i.price}</h4>
                            <span className="text-danger">
                              <s className=" mx-1 small">₹648</s>
                            </span>
                            <h6 className="mx-2 small text-success">
                              Free shipping
                            </h6>
                            <h5
                              onClick={() => removeQty(i.isbn)}
                              className="btn btn-outline-dark mx-1 px-1 py-0 "
                            >
                              -
                            </h5>
                            <h4 className="mb-1 text-bold small me-1">
                              Qty:{i.qty}
                            </h4>
                            <h5
                              onClick={() => addToCart(i.isbn)}
                              className="btn btn-outline-dark mx-1  px-1 py-0 "
                            >
                              +
                            </h5>
                          </div>
                        </div>
                        <span
                          className="btn text-danger "
                          onClick={() => removeFromCart(i.isbn)}
                        >
                          Remove
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Placeorder />
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
const mapDispachToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    addToCart: (id) => dispatch(addToCart(id)),
    removeQty: (id) => dispatch(removeQty(id)),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Cartitems);
