const mobileWidth = 768;
let step = 1;
const btnBack = document.querySelector("#btn-back");
btnBack.addEventListener("click", previousStep);

function start() {
  showStep(step);
  showSidebar();
  sidebarSelectStep(step);
  window.addEventListener("resize", showSidebar);

  // add event listener to the button
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
function getSwitchStatus() {
  return document.querySelector("#billing").checked;
}

start();
