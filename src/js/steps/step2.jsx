import React, { Component } from "react";
import pricing from "../resources/pricing";

class Step2 extends Component {
  selectPlan = (plan) => {
    // deselect all plans first
    const arcadeBtn = document.querySelector("#btn-arcade");
    const advancedBtn = document.querySelector("#btn-advanced");
    const proBtn = document.querySelector("#btn-pro");
    arcadeBtn.classList.remove("selected");
    advancedBtn.classList.remove("selected");
    proBtn.classList.remove("selected");

    // select the plan
    switch (plan) {
      case "arcade":
        arcadeBtn.classList.add("selected");
        break;
      case "advanced":
        advancedBtn.classList.add("selected");
        break;
      case "pro":
        proBtn.classList.add("selected");
        break;
      default:
        arcadeBtn.classList.add("selected");
        break;
    }

    // update the state
    this.props.onUpdatePlanState(plan);
  };

  setupPlanButtons = () => {
    const arcadeBtn = document.querySelector("#btn-arcade");
    const advancedBtn = document.querySelector("#btn-advanced");
    const proBtn = document.querySelector("#btn-pro");

    arcadeBtn.removeEventListener("click", () => this.handleBtnClick("arcade"));
    advancedBtn.removeEventListener("click", () =>
      this.handleBtnClick("advanced")
    );
    proBtn.removeEventListener("click", () => this.handleBtnClick("pro"));

    arcadeBtn.addEventListener("click", () => this.handleBtnClick("arcade"));
    advancedBtn.addEventListener("click", () =>
      this.handleBtnClick("advanced")
    );
    proBtn.addEventListener("click", () => this.handleBtnClick("pro"));
  };

  // refreshBillingButtons = () => {

  // };

  // function to be called when toggle switch is pressed
  // refreshBillingButtons = () => {

  toggleBilling = () => {
    let monthly = document.querySelector("#billing-monthly");
    let yearly = document.querySelector("#billing-yearly");

    if (monthly.classList.contains("selected")) {
      monthly.classList.remove("selected");
      yearly.classList.add("selected");
    } else {
      yearly.classList.remove("selected");
      monthly.classList.add("selected");
    }

    let billing = document.querySelector("#billing");
    console.log("current value of billing before animation: " + billing.value);

    // update the state
    this.props.onUpdateBillingState(
      monthly.classList.contains("selected") ? "monthly" : "yearly"
    );
    // console.log(monthly.classList.contains("selected"))
  };

  selectBilling = () => {
    let monthly = document.querySelector("#billing-monthly");
    let yearly = document.querySelector("#billing-yearly");

    if (this.props.billing === "monthly") {
      monthly.classList.add("selected");
      yearly.classList.remove("selected");
    } else {
      yearly.classList.add("selected");
      monthly.classList.remove("selected");
    }
  };

  setupBillingToggle = () => {
    let billingToggle = document.querySelector("#billing");

    billingToggle.addEventListener("change", this.toggleBilling);
  };

  handleBtnClick = (plan) => {
    this.selectPlan(plan);
  };

  componentDidMount() {
    this.setupPlanButtons();
    this.setupBillingToggle();
    this.selectPlan(this.props.plan);
    this.selectBilling(this.props.billing);
  }

  render() {
    // change price based on billing
    let monthlyPrices = {
      arcade: "$" + pricing.plans.monthly.arcade.price + "/mo",
      advanced: "$" + pricing.plans.monthly.advanced.price + "/mo",
      pro: "$" + pricing.plans.monthly.pro.price + "/mo",
    };

    let yearlyPrices = {
      arcade: "$" + pricing.plans.yearly.arcade.price + "/yr",
      arcadeMonthsFree: pricing.plans.yearly.arcade.monthsFree + " months free",
      advanced: "$" + pricing.plans.yearly.advanced.price + "/yr",
      advancedMonthsFree:
        pricing.plans.yearly.advanced.monthsFree + " months free",
      pro: "$" + pricing.plans.yearly.pro.price + "/yr",
      proMonthsFree: pricing.plans.yearly.pro.monthsFree + " months free",
    };

    let prices =
      this.props.billing === "monthly" ? monthlyPrices : yearlyPrices;

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
                    <div className="t2">{prices.arcade}</div>
                    <div className="t3">{prices.arcadeMonthsFree}</div>
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
                    <div className="t2">{prices.advanced}</div>
                    <div className="t3">{prices.advancedMonthsFree}</div>
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
                    <div className="t2">{prices.pro}</div>
                    <div className="t3">{prices.proMonthsFree}</div>
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
