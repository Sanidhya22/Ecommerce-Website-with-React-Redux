import React from "react";
import Imgbtn from "../Detailpagecomponent/ImgBtn";
import Productdetails from "../Detailpagecomponent/Productdetails";
function Detailpage(props) {
  return (
    <React.Fragment>
      <div className="Detailpage p-4 ">
        <div className="card mb-4">
          <div className="row g-0">
            <Imgbtn />
            <Productdetails />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Detailpage;
