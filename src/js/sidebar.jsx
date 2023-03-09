import React, { Component } from "react";
import { isMobile } from "./mobile.jsx";

class Sidebar extends Component {
  componentDidMount() {
    window.addEventListener('resize', this.showSidebar);
    this.showSidebar();
    this.sidebarSelectStep(this.props.step);
  }

  componentDidUpdate(prevProps) {
    if (this.props.step !== prevProps.step) {
      this.sidebarSelectStep(this.props.step);
    }
  }

  showSidebar = () => {
    // console.log("showSidebar() called");
    const sidebarDesktop = document.querySelector(".sidebar-desktop");
    const sidebarMobile = document.querySelector(".sidebar-mobile");
    sidebarDesktop.classList.add("hidden");
    sidebarMobile.classList.add("hidden");

    // console.log("current minWidth: " + this.state.minWidth);

    if (isMobile(this.props.minWidth)) {
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
    if (n == 5) {
      n = 4;
    }
    document.querySelectorAll(".i")[n - 1].classList.add("active");
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
