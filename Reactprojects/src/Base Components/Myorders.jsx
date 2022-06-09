import React, { useEffect } from "react";
import { connect } from "react-redux";
import Orderdetails from "../Orderdetails/Orderdetails";
import { setTitle } from "../Redux/Functions/Functionactions";

const Myorders = ({ orders, setTitle }) => {
  useEffect(() => {
    setTitle(" | Orders");
  }, []);
  if (orders.length === 0) {
    return <h1 className="text-center">No Orders Details</h1>;
  } else {
    return (
      <React.Fragment>
        <div className="contaner justify-content-center ">
          {orders.map((item, k) => {
            const totaAmount = item.reduce((a, c) => a + c.price * c.qty, 0);
            return (
              <div key={k} className="card w-100 my-3 ">
                {" "}
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                  <h5 className="text-light my-2 mx-3">Order Items </h5>{" "}
                  <p className=" m-2 text-light my-2 mx-3 ms-auto">
                    Order Status : In Transit{" "}
                  </p>{" "}
                </nav>{" "}
                {item.map((i, k) => {
                  return <Orderdetails i={i} key={k} />;
                })}
                <p className="mx-4 mb-1">Total Amount - ₹{totaAmount}.00</p>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    orders: state.shop.orders,
  };
};
const mapDispachToProps = (dispatch) => {
  return {
    setTitle: (id) => dispatch(setTitle(id)),
  };
};
export default connect(mapStateToProps, mapDispachToProps)(Myorders);
