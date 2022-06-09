import React from "react";
import Productcard from "../Homepage Card/Productcard";
import { setTitle } from "../Redux/Functions/Functionactions";
import { connect } from "react-redux";
import { useEffect } from "react";

const Homepage = ({ Product, setTitle }) => {
  useEffect(() => {
    setTitle(" | Home");
  }, []);
  return (
    <React.Fragment>
      <div className=" homeacard container ">
        <div className="row">
          {Product.map((items, k) => {
            return <Productcard key={k} items={items} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    Product: state.shop.products,
  };
};
const mapDispachToProps = (dispatch) => {
  return {
    setTitle: (id) => dispatch(setTitle(id)),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Homepage);
