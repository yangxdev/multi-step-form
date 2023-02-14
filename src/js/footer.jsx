import React, { Component } from "react";

class Footer extends Component {
  componentDidMount() {
    this.refreshButtons();
  }

  refreshButtons = () => {
    const btnBack = document.querySelectorAll(".btn-back");
    btnBack.forEach((btn) => {
      btn.addEventListener("click", this.previousStep);
      console.log("added click to previousStep button n" + btn);
    });
    const btnNext = document.querySelectorAll(".btn-next");
    btnNext.forEach((btn) => {
      btn.addEventListener("click", this.nextStep);
      console.log("added click to nextStep button n" + btn);
    });
  };

  previousStep = () => {
    if (this.state.step > 0) {
      this.setState({ step: this.state.step - 1 });
      this.showStep();
      this.refreshButtons();
      console.log("previousStep pressed");
    }
  };

  nextStep = () => {
    if (this.state.step < 3) {
      this.setState({ step: this.state.step + 1 });
      this.showStep();
      this.refreshButtons();
      console.log("nextStep pressed");
    }
  };

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
