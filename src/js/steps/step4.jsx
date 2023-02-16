import React, { Component } from "react";
import pricing from "../resources/pricing";

class Step4 extends Component {
  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  render() {
    let summaryMain =
      "" +
      this.capitalize(this.props.plan) +
      " (" +
      this.capitalize(this.props.billing) +
      ")";

    // variable containing "/mo" or "/yr" depending on billing
    let billingType = this.props.billing === "monthly" ? "/mo" : "/yr";
    let summaryMainPrice =
      "$" +
      pricing.plans[this.props.billing][this.props.plan].price +
      billingType;

    function AddonsTitle({ addons }) {
      console.log(addons);
      const enabledAddons = Object.keys(addons).filter(
        (addon) => addons[addon]
      );

      // convert addon to the correct format
      // "online-service" => "Online Service"
      enabledAddons.forEach((addon, index) => {
        enabledAddons[index] = addon
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      });

      // decapitalize the second word
      // "Online Service" => "Online service"
      enabledAddons.forEach((addon, index) => {
        enabledAddons[index] = addon
          .split(" ")
          .map((word, index) =>
            index === 0 ? word : word.charAt(0).toLowerCase() + word.slice(1)
          )
          .join(" ");
      });

      return (
        <div>
          {enabledAddons.map((addon) => (
            <div className="t2" key={addon}>
              {addon}
            </div>
          ))}
        </div>
      );
    }

    function AddonsPrice({ addons, billing }) {
      const prices = pricing.addons[billing];
      const enabledAddons = Object.keys(addons).filter(
        (addon) => addons[addon]
      );

      return (
        <div>
          {enabledAddons.map((addon) => (
            <div className="t3" key={addon}>
              +${prices[addon].price}
              {billingType}
            </div>
          ))}
        </div>
      );
    }

    return (
      <>
        <div className="step step4" id="step4">
          <div className="card">
            <div className="t1">Finishing up</div>
            <div className="t2">
              Double-check everything looks OK before confirming.
            </div>
            <div className="summary">
              <div className="summary-plan">
                <div className="left">
                  <div className="t2">{summaryMain}</div>
                  <div className="t4">Change</div>
                </div>
                <div className="right">
                  <div className="t2">{summaryMainPrice}</div>
                </div>
              </div>
              <hr></hr>
              <div className="summary-addons">
                <div className="row">
                  <AddonsTitle addons={this.props.addons} />
                  <AddonsPrice
                    addons={this.props.addons}
                    billing={this.props.billing}
                  />
                </div>
              </div>
            </div>
            <div className="total">
              <div className="left">
                <div className="t2">Total (per month)</div>
              </div>
              <div className="right">
                <div className="t2">$9/mo</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Step4;
