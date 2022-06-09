import React from "react";
import { Link } from "react-router-dom";
function Orderplaced(props) {
  return (
    <React.Fragment>
      <div className="contaner text-center">
        <h2>Order Placed...</h2>
        <h6 className="btn">
          Check our order status on
          <Link as={Link} to={`/myorders`}>
            {" "}
            <h6 href="#" className="text-decoration-none">
              Orders
            </h6>
          </Link>{" "}
        </h6>
        <h6>
          For Home Page click
          <Link as={Link} to={`/`}>
            <h6 href="#" className="text-decoration-none">
              Here.
            </h6>
          </Link>{" "}
        </h6>
      </div>
    </React.Fragment>
  );
}

export default Orderplaced;
