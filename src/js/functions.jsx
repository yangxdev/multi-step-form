import React, { Component } from "react";

class Main extends React.Component {
  state = {
    step: 1,
    billing: "monthly",
    plan: "arcade",
  };

  componentDidMount() {
    // the former start() function
    this.showStep(step);
    this.showSidebar();
    this.sidebarSelectStep(step);
    window.addEventListener("resize", this.showSidebar);
    this.selectPlan(plan);
    this.setupBilling();
    this.refreshButtons();
    console.log("mounted");
  }

  refreshButtons = () => {
    const btnBack = document.querySelectorAll(".btn-back");
    btnBack.forEach((btn) => {
      btn.addEventListener("click", this.previousStep);
    });
    const btnNext = document.querySelectorAll(".btn-next");
    btnNext.forEach((btn) => {
      console.log("added click to nextStep button n" + btn)
      btn.addEventListener("click", () => {
        this.nextStep();
      });
    });
  };

  setupBilling = () => {
    const billingSlider = document.querySelector("#billing-slider");
    billingSlider.addEventListener("click", this.selectBilling);
  };

  // add "selected" to the selected plan
  selectBilling = (plan) => {
    document.querySelector("#billing-monthly").classList.remove("selected");
    document.querySelector("#billing-yearly").classList.remove("selected");
    if (this.getSwitchStatus("billing")) {
      document.querySelector("#billing-monthly").classList.add("selected");
    } else {
      document.querySelector("#billing-yearly").classList.add("selected");
    }
    billing = plan;
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

  showStep = (step) => {
    // collect all the steps
    let steps = document.querySelectorAll(".step");

    // hide all the steps
    steps.forEach((step) => {
      step.classList.add("hidden");
    });

    // show the step we want
    steps[this.state.step].classList.remove("hidden");
  };

  render() {
    return (
      <div>
        <img
          className="bg bg-sidebar-mobile"
          src={bgSidebarMobile}
          alt="background image"
        />
        <div className="container">
          <Sidebar />
          <Step1 />
        </div>
      </div>
    );
  }
}

// const mobileWidth = 768;
// let step = 1;
// let billing = "monthly";

// function refreshButtons() {
//   console.log("refreshed buttons");
//   const btnBack = document.querySelectorAll(".btn-back");
//   btnBack.forEach((btn) => {
//     btn.addEventListener("click", previousStep);
//   });
//   const btnNext = document.querySelectorAll(".btn-next");
//   btnNext.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       nextStep();
//     });
//   });
// }
// const billingSlider = document.querySelector("#billing-slider");
// billingSlider.addEventListener("click", selectBilling);

function start() {
  showStep(step);
  showSidebar();
  sidebarSelectStep(step);
  window.addEventListener("resize", showSidebar);
  selectPlan("arcade");
  refreshButtons();
}

// function sidebarSelectStep(n) {
//   // remove "active" from all the divs with i inside
//   document.querySelectorAll(".i").forEach((div) => {
//     div.classList.remove("active");
//   });

//   // add "active" to the nth div with i inside
//   document.querySelectorAll(".i")[n].classList.add("active");
// }

// function showSidebar() {
//   document.querySelector(".sidebar-desktop").classList.add("hidden");
//   document.querySelector(".sidebar-mobile").classList.add("hidden");
//   if (isMobile()) {
//     document.querySelector(".sidebar-mobile").classList.remove("hidden");
//   } else {
//     document.querySelector(".sidebar-desktop").classList.remove("hidden");
//   }
// }

// function isMobile() {
//   return window.innerWidth < mobileWidth;
// }

// function hideSidebar() {
//   document.querySelector(".sidebar").classList.add("hidden");
// }

function showStep(n) {
  // collect all the steps
  let steps = document.querySelectorAll(".step");

  // hide all the steps
  steps.forEach((step) => {
    step.classList.add("hidden");
  });

  // show the step we want
  steps[n].classList.remove("hidden");

  sidebarSelectStep(n);
}

// function previousStep() {
//   if (step > 0) {
//     step--;
//     showStep(step);
//     refreshButtons();
//     console.log("previousStep pressed");
//   }
// }
// function nextStep() {
//   if (step < 3) {
//     step++;
//     showStep(step);
//     refreshButtons();
//     console.log("nextStep pressed");
//   }
// }

// get status of switch
function getSwitchStatus(id) {
  return document.querySelector("#" + id).checked;
}

// add "selected" class to the selected plan
// function selectBilling(plan) {
//   document.querySelector("#billing-monthly").classList.remove("selected");
//   document.querySelector("#billing-yearly").classList.remove("selected");
//   if (getSwitchStatus("billing")) {
//     document.querySelector("#billing-monthly").classList.add("selected");
//   } else {
//     document.querySelector("#billing-yearly").classList.add("selected");
//   }
//   billing = plan;
// }

//add event listener to the three buttons
// if these elements exist, add event listener
if (document.querySelector("#btn-arcade")) {
  this.addEventListener("click", () => {
    selectPlan("arcade");
  });
}
if (document.querySelector("#btn-advanced")) {
  this.addEventListener("click", () => {
    selectPlan("advanced");
  });
}
if (document.querySelector("#btn-pro")) {
  this.addEventListener("click", () => {
    selectPlan("pro");
  });
}
// radio button system of arcade, advanced and pro
function selectPlan(plan) {
  deselectPlans();
  document.querySelector("#btn-" + plan).classList.add("selected");

  // select radio button
  document.querySelector("#input-" + plan).checked = true;

  console.log("plan selected: " + plan);
}

//add event listener to the buttons: btn-online-service, btn-larger-storage, btn-customizable-profile
if (document.querySelector("#btn-online-service")) {
  this.addEventListener("click", () => {
    selectAddons("online-service");
  });
}
if (document.querySelector("#btn-larger-storage")) {
  this.addEventListener("click", () => {
    selectAddons("larger-storage");
  });
}
if (document.querySelector("#btn-customizable-profile")) {
  this.addEventListener("click", () => {
    selectAddons("customizable-profile");
  });
}

function selectAddons(addon) {
  // add "selected" class to the selected addons, deselect if already selected
  if (document.querySelector("#btn-" + addon).classList.contains("selected")) {
    document.querySelector("#btn-" + addon).classList.remove("selected");
    // uncheck the input box
    document.querySelector("#input-" + addon).checked = false;
  } else {
    document.querySelector("#btn-" + addon).classList.add("selected");
    // check the input box
    document.querySelector("#input-" + addon).checked = true;
  }
}

function deselectPlans() {
  document.querySelector("#btn-arcade").classList.remove("selected");
  document.querySelector("#btn-advanced").classList.remove("selected");
  document.querySelector("#btn-pro").classList.remove("selected");
  // console.log("plans deselected");
}
// start();

export default Main;
