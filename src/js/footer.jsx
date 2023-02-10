import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <button
          type="button"
          className="btn btn-secondary btn-lg btn-block btn-back"
          id="btn-back"
        >
          Go Back
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block btn-next"
          id="btn-next"
        >
          Next Step
        </button>
      </div>
    );
  }
}

export default Footer;
