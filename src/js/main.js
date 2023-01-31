function start() {
  let step = 1;
  showStep(step);
  hideSidebar();
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
}

// show steps array in console
console.log(document.querySelectorAll(".step"));

start();
