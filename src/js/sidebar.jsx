import React, { Component } from "react";

class Sidebar extends Component {
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
