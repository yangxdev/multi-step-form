import React, { Component } from "react";
//import "Footer" component
import Footer from "./footer.jsx";

class Step1 extends Component {
  render() {
    return (
      <> 
      <div className="step step1" id="step1">
        <div className="card">
          <div className="t1">Personal info</div>
          <div className="t2">
            Please provide your name, email address, and phone number.
          </div>
          <div className="t3">Name</div>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Stephen King"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <div className="t3">Email Address</div>
          <input
            type="email"
            className="form-control"
            placeholder="e.g. stephenking@lorem.com"
            aria-label="Email Address"
            aria-describedby="basic-addon1"
          />
          <div className="t3">Phone Number</div>
          <input
            type="tel"
            className="form-control"
            placeholder="e.g. +1 234 567 890"
            aria-label="Phone Number"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
      <Footer page="1"/> 
      </>
  )
  }
}

export default Step1;