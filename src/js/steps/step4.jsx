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

    function AddonsTitlePrice({ addons, billing }) {
      // console.log(addons);
      // console.log(billing);
      const enabledAddons = Object.keys(addons).filter(
        (addon) => addons[addon]
      );
      const prices = pricing.addons[billing];

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

      // function to reset the word back to the original format
      // "Online service" => "online-service"
      function resetWord(word) {
        return word
          .split(" ")
          .map((word) => word.toLowerCase())
          .join("-");
      }

      return (
        <>
          {enabledAddons.map((addon) => (
            <React.Fragment key={addon}>
              <div className="row">
                <div className="t2">{addon}</div>
                <div className="t3">
                  +${prices[resetWord(addon)].price}
                  {billingType}
                </div>
              </div>
            </React.Fragment>
          ))}
        </>
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
                  <div
                    className="t4"
                    id="btnChange"
                    onClick={() => this.props.goToStep(2)}
                  >
                    Change
                  </div>
                </div>
                <div className="right">
                  <div className="t2">{summaryMainPrice}</div>
                </div>
              </div>
              <hr></hr>
              <div className="summary-addons">
                <AddonsTitlePrice
                  addons={this.props.addons}
                  billing={this.props.billing}
                />
              </div>
            </div>
            <div className="total">
              <div className="left">
                <div className="t2">
                  Total (per{" "}
                  {this.props.billing === "monthly" ? "month" : "year"})
                </div>
              </div>
              <div className="right">
                <div className="t2">
                  {
                    // sum up the total price
                    "+$" +
                      (pricing.plans[this.props.billing][this.props.plan]
                        .price +
                        Object.keys(this.props.addons)
                          .filter((addon) => this.props.addons[addon])
                          .map(
                            (addon) =>
                              pricing.addons[this.props.billing][addon].price
                          )
                          .reduce((a, b) => a + b, 0)) +
                      billingType
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Step4;
