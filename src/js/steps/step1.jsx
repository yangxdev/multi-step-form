import React, { Component } from "react";

class Step1 extends Component {
  // add event listeners to the input fields
  setupInputFields = () => {
    const nameInput = document.querySelector("input[type=text]");
    const emailInput = document.querySelector("input[type=email]");
    const phoneInput = document.querySelector("input[type=tel]");

    nameInput.addEventListener("input", (e) => {
      localStorage.setItem("name", e.target.value);
    });

    emailInput.addEventListener("input", (e) => {
      localStorage.setItem("email", e.target.value);
    });

    phoneInput.addEventListener("input", (e) => {
      localStorage.setItem("phone", e.target.value);
    });
  };

  logState = () => {
    console.log(this.props);
  };

  checkStorage = () => {
    const nameInput = document.querySelector("input[type=text]");
    const emailInput = document.querySelector("input[type=email]");
    const phoneInput = document.querySelector("input[type=tel]");
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const phone = localStorage.getItem('phone');

    if (name) {
      nameInput.value = name;
      console.log("name: " + nameInput.value);
    }
    if (email) {
      emailInput.value = email;
      console.log("email: " + emailInput.value);
    }
    if (phone) {
      phoneInput.value = phone;
      console.log("phone: " + phoneInput.value);
    }
  };

  componentDidMount() {
    // this.logState();
    this.setupInputFields();
    this.checkStorage();
  }

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
      </>
    );
  }
}

export default Step1;
