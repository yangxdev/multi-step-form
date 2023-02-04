const mobileWidth = 768;
let step = 2;
const btnBack = document.querySelector("#btn-back");
btnBack.addEventListener("click", previousStep);
const billingSlider = document.querySelector("#billing-slider");
billingSlider.addEventListener("click", selectBilling);

function start() {
  showStep(step);
  showSidebar();
  sidebarSelectStep(step);
  window.addEventListener("resize", showSidebar);
  selectPlan("arcade");
}

function sidebarSelectStep(n) {
  // remove "active" from all the divs with i inside
  document.querySelectorAll(".i").forEach((div) => {
    div.classList.remove("active");
  });

  // add "active" to the nth div with i inside
  document.querySelectorAll(".i")[n].classList.add("active");
}

function showSidebar() {
  document.querySelector(".sidebar-desktop").classList.add("hidden");
  document.querySelector(".sidebar-mobile").classList.add("hidden");
  if (isMobile()) {
    document.querySelector(".sidebar-mobile").classList.remove("hidden");
  } else {
    document.querySelector(".sidebar-desktop").classList.remove("hidden");
  }
}

function isMobile() {
  return window.innerWidth < mobileWidth;
}

function hideSidebar() {
  document.querySelector(".sidebar").classList.add("hidden");
}

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

function previousStep() {
  if (step > 0) {
    step--;
    showStep(step);
  }
}

// get status of switch
function getSwitchStatus(id) {
  return document.querySelector("#" + id).checked;
}

// add "selected" class to the selected plan
function selectBilling(plan) {
  document.querySelector("#billing-monthly").classList.remove("selected");
  document.querySelector("#billing-yearly").classList.remove("selected");
  if (getSwitchStatus("billing")) {
    document.querySelector("#billing-monthly").classList.add("selected");
  } else {
    document.querySelector("#billing-yearly").classList.add("selected");
  }
}

//add event listener to the three buttons
document.querySelector("#btn-arcade").addEventListener("click", () => {
  selectPlan("arcade");
});
document.querySelector("#btn-advanced").addEventListener("click", () => {
  selectPlan("advanced");
});
document.querySelector("#btn-pro").addEventListener("click", () => {
  selectPlan("pro");
});

// radio button system of arcade, advanced and pro
function selectPlan(plan) {
  deselectPlans();
  document.querySelector("#btn-" + plan).classList.add("selected");

  // select radio button
  document.querySelector("#input-" + plan).checked = true;

  console.log("plan selected: " + plan);
}

function deselectPlans() {
  document.querySelector("#btn-arcade").classList.remove("selected");
  document.querySelector("#btn-advanced").classList.remove("selected");
  document.querySelector("#btn-pro").classList.remove("selected");
  // console.log("plans deselected");
}
start();
