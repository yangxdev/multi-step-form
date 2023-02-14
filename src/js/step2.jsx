import React, { Component } from "react";

class Step2 extends Component {
  render() {
    return (
      <>
        <div className="step step2" id="step2">
          <div className="card">
            <div className="t1">Select your plan</div>
            <div className="t2">
              You have the option of monthly or yearly billing.
            </div>

            <div className="form-check form-check-inline">
              <div className="wrapper" id="btn-arcade">
                <div className="radio-btn">
                  <img
                    src="src/assets/images/icon-arcade.svg"
                    alt="icon-arcade"
                    className="radio-icon icon-arcade"
                  />
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="input-arcade"
                    value="option1"
                  />
                  <div className="radio-label">
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Arcade
                    </label>
                    <div className="t2">$9/mo</div>
                  </div>
                </div>
              </div>
              <div className="wrapper" id="btn-advanced">
                <div className="radio-btn">
                  <img
                    src="src/assets/images/icon-advanced.svg"
                    alt="icon-advanced"
                    className="radio-icon icon-advanced"
                  />
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="input-advanced"
                    value="option1"
                  />
                  <div className="radio-label">
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      Advanced
                    </label>
                    <div className="t2">$12/mo</div>
                  </div>
                </div>
              </div>
              <div className="wrapper" id="btn-pro">
                <div className="radio-btn">
                  <img
                    src="src/assets/images/icon-pro.svg"
                    alt="icon-pro"
                    className="radio-icon icon-pro"
                  />
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="input-pro"
                    value="option3"
                  />
                  <div className="radio-label">
                    <label className="form-check-label" htmlFor="inlineRadio3">
                      Pro
                    </label>
                    <div className="t2">$15/mo</div>
                  </div>
                </div>
              </div>
            </div>
            <label className="switch">
              <div className="t3 selected" id="billing-monthly">
                <div>Monthly</div>
              </div>
              <input type="checkbox" id="billing" />
              <span className="slider round" id="billing-slider"></span>
              <div className="t3" id="billing-yearly">
                <div>Yearly</div>
              </div>
            </label>
          </div>
        </div>
      </>
    );
  }
}

export default Step2;
