import React, { Component } from "react";

class StepComplete extends Component {
  render() {
    return (
      <>
        <div className="step step-complete" id="stepComplete">
          <div className="card">
            <img
              className="icon icon-thank-you"
              src="src/assets/images/icon-thank-you.svg"
              alt="icon-thank-you"
            />
            <div className="t1">Thank you!</div>
            <div className="step5 t2">
              Thanks for confirming your subscription!<br></br>
              We hope you have fun using our platform. <br></br>If you ever need
              support, please feel free to email us at support@loremgaming.com.
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default StepComplete;
