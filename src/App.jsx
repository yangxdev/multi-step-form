import React from "react";

import Step1 from "./js/step1.jsx";
import Step2 from "./js/step2.jsx";
// import Step3 from "./js/step3.jsx";
// import Step4 from "./js/step4.jsx";

import "./App.css";
import "./sass/output.scss";
import bgSidebarMobile from "./assets/images/bg-sidebar-mobile.svg";
import Sidebar from "./js/sidebar.jsx";
import MainJS from "./js/functions.jsx";
import Footer from "./js/footer.jsx";

class App extends React.Component {
  state = {
    step: 2,
    minWidth: 768,
  };

  updateState = (newState) => {
    this.setState({ step: newState });
  };

  render() {
    let currentStep = null;
    switch (this.state.step) {
      case 1:
        currentStep = <Step1 />;
        break;
      case 2:
        currentStep = <Step2 />;
        break;
      // case 3:
      //   currentStep = <Step3 />;
      //   break;
      default:
        currentStep = <Step1 />;
        break;
    }

    return (
      <div>
        <img
          className="bg bg-sidebar-mobile"
          src={bgSidebarMobile}
          alt="background image"
        />
        <div className="container">
          <Sidebar step={this.state.step} minWidth={this.state.minWidth} />
          {currentStep}
          <Footer step={this.state.step} onUpdateState={this.updateState} />
        </div>

        <script src="./js/functions.jsx"></script>
      </div>
    );
  }
}

export default App;
