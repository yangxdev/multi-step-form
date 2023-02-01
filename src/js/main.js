const mobileWidth = 768;
let step = 1;
const btnBack = document.querySelector("#btn-back");
btnBack.addEventListener("click", previousStep);
const billingSlider = document.querySelector("#billing-slider");
billingSlider.addEventListener("click", selectPlan);

function start() {
  showStep(step);
  showSidebar();
  sidebarSelectStep(step);
  window.addEventListener("resize", showSidebar);
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
function selectPlan(plan) {
  document.querySelector("#billing-monthly").classList.remove("selected");
  document.querySelector("#billing-yearly").classList.remove("selected");
  if (getSwitchStatus("billing")) {
    document.querySelector("#billing-monthly").classList.add("selected");
  } else {
    document.querySelector("#billing-yearly").classList.add("selected");
  }
}

start();
