import React, { Component } from "react";

class Footer extends Component {
  componentDidMount() {
    this.refreshButtons();
    // console.log("Footer mounted, current step: " + this.props.step);
  }

  componentDidUpdate() {
    this.refreshButtons();
    // console.log("Footer updated, current step: " + this.props.step);
  }

  refreshButtons = () => {
    const btnBack = document.querySelectorAll(".btn-back");
    btnBack.forEach((btn) => {
      btn.addEventListener("click", this.previousStep);
      // console.log("added click to previousStep button n" + btn);
    });
    const btnNext = document.querySelectorAll(".btn-next");
    btnNext.forEach((btn) => {
      btn.addEventListener("click", this.nextStep);
      // console.log("added click to nextStep button n" + btn);
    });

    const btnSubmit = document.querySelectorAll(".btn-submit");
    btnSubmit.forEach((btn) => {
      btn.addEventListener("click", this.submitForm);
      // console.log("added click to submitForm button n" + btn);
    });
    // TODO: create submitForm
  };

  previousStep = () => {
    let newStep = this.props.step;
    if (this.props.step > 1) {
      // this.setState({ step: this.props.step - 1 });
      this.props.onUpdateStepState(--newStep);
      // this.showStep();
      // this.refreshButtons();
      // console.log("previousStep pressed, current state: " + newStep);
    } else {
      // console.log("can't go further back, current state: " + newStep);
    }
  };

  nextStep = () => {
    let newStep = this.props.step;
    if (this.props.step < 4) {
      // this.setState({ step: this.props.step + 1 });
      this.props.onUpdateStepState(++newStep);
      // this.showStep();
      // this.refreshButtons();
      // console.log("nextStep pressed, current state: " + newStep);
    } else {
      // console.log("can't go further forward, current state: " + newStep);
    }
  };

  render() {
    return (
      <>
        {this.props.step != 5 ? (
          <div className="footer">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block btn-back"
              id="btn-back"
            >
              Go Back
            </button>
            {this.props.step === 4 ? (
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block btn-submit"
                id="btn-submit"
              >
                Submit
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block btn-next"
                id="btn-next"
              >
                Next Step
              </button>
            )}
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default Footer;
