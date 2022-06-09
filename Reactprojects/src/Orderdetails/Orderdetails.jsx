import React, { Component } from "react";
const Orderdetails = (props) => {
  const { i } = props;
  return (
    <div className="card mb-1">
      <div className="card-body">
        <div className="row">
          <img className="col-md-1" src={i.thumbnailUrl} />

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
            <div className="mb-2 text-muted small">
              <span>Qty</span>
              <span className="text-primary"> - </span>
              <span>{i.qty}</span>
              <br />
            </div>
            <div className="mb-2 text-muted small">
              <span>Product Amount</span>
              <span className="text-primary"> - </span>
              <span>₹{i.price * i.qty}.00</span>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orderdetails;
