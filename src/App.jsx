import React from "react";

import Step1 from "./js/steps/step1.jsx";
import Step2 from "./js/steps/step2.jsx";
import Step3 from "./js/steps/step3.jsx";
import Step4 from "./js/steps/step4.jsx";
import StepComplete from "./js/steps/stepComplete.jsx";

import "./App.css";
import "./sass/output.scss";
import bgSidebarMobile from "./assets/images/bg-sidebar-mobile.svg";
import bgSidebarDesktop from "./assets/images/bg-sidebar-desktop.svg";
import Sidebar from "./js/sidebar.jsx";
import MainJS from "./legacy/functions.jsx";
import Footer from "./js/footer.jsx";
import { isMobile } from "./js/mobile.jsx";

class App extends React.Component {
  componentDidMount() {
    window.addEventListener("resize", this.setSidebar);
    this.setSidebar();
  }

  setSidebar = () => {
    const desktop = document.querySelector(".main-desktop");
    const mobile = document.querySelector(".main-mobile");

    if (isMobile(this.state.minWidth)) {
      mobile.classList.remove("hidden");
      desktop.classList.add("hidden");
      console.log("ismobile");
    } else {
      mobile.classList.add("hidden");
      desktop.classList.remove("hidden");
      console.log("isdesktop");
    }
  };

  state = {
    step: 1,
    minWidth: 575,

    // step2's state
    plan: "arcade",
    billing: "monthly",

    // step3's state
    addons: {
      "online-service": true,
      "larger-storage": true,
      "customizable-profile": false,
    },
  };

  updateState = (key, newState) => {
    this.setState({ [key]: newState });
  };

  render() {
    let currentStep = null;
    switch (this.state.step) {
      case 1:
        currentStep = (
          <Step1
            name={this.state.name}
            email={this.state.email}
            phone={this.state.phone}
            onUpdateNameState={this.updateState.bind(this, "name")}
            onUpdateEmailState={this.updateState.bind(this, "email")}
            onUpdatePhoneState={this.updateState.bind(this, "phone")}
          />
        );
        break;
      case 2:
        currentStep = (
          <Step2
            plan={this.state.plan}
            billing={this.state.billing}
            onUpdatePlanState={this.updateState.bind(this, "plan")}
            onUpdateBillingState={this.updateState.bind(this, "billing")}
          />
        );
        break;
      case 3:
        currentStep = (
          <Step3
            addons={this.state.addons}
            billing={this.state.billing}
            onUpdateAddonState={this.updateState.bind(this, "addons")}
          />
        );
        break;
      case 4:
        currentStep = (
          <Step4
            goToStep={this.updateState.bind(this, "step")}
            plan={this.state.plan}
            addons={this.state.addons}
            billing={this.state.billing}
          />
        );
        break;
      case 5:
        currentStep = (
          <StepComplete goToStep={this.updateState.bind(this, "step")} />
        );
        break;
      default:
        currentStep = <Step1 />;
        break;
    }

    return (
      <>
        <div className="main-mobile">
          <img
            className="bg bg-sidebar-mobile"
            src={bgSidebarMobile}
            alt="background image"
          />
          <div className="container">
            <Sidebar step={this.state.step} minWidth={this.state.minWidth} />
            {currentStep}
            <Footer
              step={this.state.step}
              onUpdateStepState={this.updateState.bind(this, "step")}
            />
          </div>
        </div>
        <div className="main-desktop">
          <img
            className="bg bg-sidebar-desktop"
            src={bgSidebarDesktop}
            alt="background image"
          />
          <div className="container">{currentStep}</div>
        </div>
        <script src="./js/functions.jsx"></script>
      </>
    );
  }
}

export default App;
