import React, { useEffect } from "react";
import { connect } from "react-redux";
import Addresscomp from "../Cart Componenets/Addresscomp";
import Cartitems from "../Cart Componenets/Cartitems";
import { setTitle } from "../Redux/Functions/Functionactions";

const Cart = ({ cart, setTitle }) => {
  useEffect(() => {
    setTitle(" | Cart");
  }, []);
  if (cart.length === 0) {
    return <h1 className="text-center">Cart is Empty</h1>;
  } else {
    return (
      <React.Fragment>
        <div className="row">
          <Addresscomp />
          <Cartitems />
        </div>
      </React.Fragment>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
const mapDispachToProps = (dispatch) => {
  return {
    setTitle: (id) => dispatch(setTitle(id)),
  };
};
export default connect(mapStateToProps, mapDispachToProps)(Cart);
