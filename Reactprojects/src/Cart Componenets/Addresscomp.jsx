import React, { Component } from "react";
export default class Addresscomp extends Component {
  render() {
    return (
      <React.Fragment>
        <form className=" card m-2 col-md-4">
          <h3 className="text-center">Address Info</h3>
          <div className="contaner">
            <div className=" p-2 ">
              <div className="form-group col-md-12 py-2">
                <label htmlFor="inputEmail4">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>
              <div className="form-group col-md-12 py-2">
                <label htmlFor="inputname4">Password</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Full Name"
                />
              </div>

              <div className="form-group col-md-12 py-2">
                <label htmlFor="inputAddress">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Buidling name and No"
                />
              </div>
              <div className="form-group col-md-12 py-2">
                <label htmlFor="inputAddress2">Street Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder=""
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-12 py-2">
                  <label htmlFor="inputCity">City</label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputState">State</label>
                  <select
                    defaultValue={"1"}
                    id="inputState"
                    className="form-control"
                  >
                    <option value={"1"}>Choose...</option>
                    <option value={"2"}>Madhya Pradesh</option>
                    <option value="3">Mr</option>
                    <option value="4">Mrs</option>
                    <option value="5">Ms</option>
                    <option value="6">Miss</option>
                    <option value="7">Dr</option>
                    <option value="8">Mr</option>
                    <option value="9">9Mrs</option>
                    <option value="10">Ms</option>
                    <option value="11">Miss</option>
                    <option value="12">Dr</option>
                    <option value="13">Mr</option>
                    <option value="14">Mrs</option>
                    <option value="15">Ms</option>
                    <option value="16">Miss</option>
                    <option value="17">Dr</option>
                    <option value="18">Mr</option>
                    <option value="19">Mrs</option>
                    <option value="20">Ms</option>
                    <option value="21">Miss</option>
                    <option value="22">Dr</option>
                    <option value="23">Mrs</option>
                    <option value="24">Ms</option>
                    <option value="25">Miss</option>
                    <option value="26">Dr</option>
                  </select>
                </div>
                <div className="form-group col-md-4 py-2">
                  <label htmlFor="inputZip">Zip</label>
                  <input type="text" className="form-control" id="inputZip" />
                </div>
              </div>
              <div className="form-group py-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Use this Address For Shipment
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
