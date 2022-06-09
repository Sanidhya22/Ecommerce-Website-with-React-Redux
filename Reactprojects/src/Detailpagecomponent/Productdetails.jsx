import React, { Component } from "react";
import { connect } from "react-redux";

const Productdetails = ({ data }) => {
  return (
    <React.Fragment>
      <div className="col-md-8 p-3">
        <div className="card-body "></div>
        <h4>{data.title} </h4>{" "}
        <div className="mt-1 mb-1 text-muted ">
          <span>by</span>
          <span className="text-primary"> - </span>
          <span>{data.authors}</span>
        </div>
        <div className="mb-2 text-muted ">
          <span>Categories</span>
          <span className="text-primary"> - </span>
          <span>{data.categories}</span>
          <br />
        </div>
        <div className="mt-1 mb-1 text-muted ">
          <span>Pages</span>
          <span className="text-primary"> - </span>
          <span>{data.pageCount}</span>
        </div>
        <div className="mt-1 mb-1 text-muted ">
          <span>Discription</span>
          <span className="text-primary"> - </span>
          <span>{data.longDescription}</span>
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.shop.currentItem,
  };
};

export default connect(mapStateToProps, null)(Productdetails);
