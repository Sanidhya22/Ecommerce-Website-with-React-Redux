import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart, loadCurrentItem } from "../Redux/Functions/Functionactions";

const Productcard = ({ items, addToCart, loadCurrentItem }) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-3  d-flex align-items-stretch">
      <div className="card">
        <div className="inner-card card-body d-flex flex-column">
          {" "}
          <Link as={Link} to={`/products/${items.isbn}`}>
            <img
              onClick={() => loadCurrentItem(items)}
              className="img-fluid rounded"
              src={items.thumbnailUrl}
            />
          </Link>
          <div className="d-flex justify-content-between align-items-center mt-3 px-2">
            <h4>{items.title} </h4>{" "}
          </div>
          <div className="mt-1 mb-1 text-muted ">
            <span>by</span>
            <span className="text-primary"> - </span>
            <span>{items.authors}</span>
          </div>
          <div className="mb-2 text-muted ">
            <span>Categories</span>
            <span className="text-primary"> - </span>
            <span>{items.categories}</span>
            <br />
          </div>
          <div className="mt-1 mb-1 text-muted ">
            <span>Discription</span>
            <span className="text-primary"> - </span>
            <span>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium
            </span>
          </div>
          <div className="px-2 mt-3 text-center mt-auto">
            <div className="d-flex flex-row align-items-center mb-1">
              <h4 className="mb-1 me-1">₹{items.price}</h4>
              <span className="text-danger">
                <s>₹648</s>
              </span>

              <Link as={Link} to={`/cart`}>
                <button
                  onClick={() => addToCart(items.isbn)}
                  className="mx-2 my-2 btn btn-primary px-3"
                >
                  Buy Now
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Productcard);
