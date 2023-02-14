import React, { Component } from "react";
import { isMobile } from "./mobile.jsx";

class Sidebar extends Component {
  state = {
    step: 1,
    minWidth: 768,
  };

  componentDidMount() {
    this.showSidebar();
    this.sidebarSelectStep(this.state.step);
  }

  showSidebar = () => {
    console.log("showSidebar() called");
    const sidebarDesktop = document.querySelector(".sidebar-desktop");
    const sidebarMobile = document.querySelector(".sidebar-mobile");
    sidebarDesktop.classList.add("hidden");
    sidebarMobile.classList.add("hidden");

    // console.log("current minWidth: " + this.state.minWidth);

    if (isMobile(this.state.minWidth)) {
      sidebarMobile.classList.remove("hidden");
      // console.log("sidebarMobile.classList.remove('hidden');");
    } else {
      sidebarDesktop.classList.remove("hidden");
      // console.log("sidebarDesktop.classList.remove('hidden');");
    }
  };

  hideSidebar = () => {
    document.querySelector(".sidebar").classList.add("hidden");
  };

  sidebarSelectStep = (n) => {
    // remove "active" from all the divs with i inside
    document.querySelectorAll(".i").forEach((div) => {
      div.classList.remove("active");
    });

    // add "active" to the nth div with i inside
    document.querySelectorAll(".i")[n].classList.add("active");
  };

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-mobile">
          <div className="n">
            <div className="i n1">1 </div>
            <div className="i n2">2 </div>
            <div className="i n3">3 </div>
            <div className="i n4">4 </div>
          </div>
        </div>
        <div className="sidebar-desktop">
          {/* Step 1 Your info Step 2 Select plan Step 3 Add-ons Step 4 Summary */}
        </div>
      </div>
    );
  }
}

export default Sidebar;