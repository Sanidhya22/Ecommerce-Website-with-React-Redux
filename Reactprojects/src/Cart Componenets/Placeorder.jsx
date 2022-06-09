import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { placeOrder } from "../Redux/Functions/Functionactions";

const Placeorder = ({ cart, placeOrder }) => {
  const totaAmount = cart.reduce((a, c) => a + c.price * c.qty, 0);
  const discount = totaAmount + totaAmount * (30 / 100);
  return (
    <React.Fragment>
      <div className="col-md-5 small">
        <div className="card">
          <h5 className="m-2">Price details</h5>

          <div className="m-2 text-muted small">
            <span>MRP</span>
            <span className="text-primary"> - </span>
            <span>₹{discount}.00</span>
          </div>
          <div className="m-2 text-muted small">
            <span>Price after Dicount</span>
            <span className="text-primary"> - </span>
            <span>₹{totaAmount}.00</span>
            <br />
          </div>
          <div className="m-2 text-muted small">
            <span>Shipping Cost </span>
            <span className="text-primary"> - </span>
            <span>₹00.00</span>
            <br />
          </div>
          <hr />
          <div className="m-2 text-muted small">
            <span>Total Amount</span>
            <span className="text-primary"> - </span>
            <span>₹{totaAmount}.00</span>
            <br />
          </div>
          <Link as={Link} to={`/Ordercompleted`}>
            <button
              type="button"
              className="btn btn-danger btn-block m-2"
              onClick={() => {
                placeOrder(cart, totaAmount);
              }}
            >
              Place Order
            </button>
          </Link>
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
    placeOrder: (items, totaAmount) => dispatch(placeOrder(items, totaAmount)),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Placeorder);
