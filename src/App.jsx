import React from "react";
import Step1 from "./js/step1.jsx";
import "./App.css";
import "./sass/output.scss";
import bgSidebarMobile from "./assets/images/bg-sidebar-mobile.svg";
import Sidebar from "./js/sidebar.jsx";
import MainJS from "./js/main.jsx";

function App() {
  return (
    <div>
      <img
        className="bg bg-sidebar-mobile"
        src={bgSidebarMobile}
        alt="background image"
      />
      <div className="container">
          <Sidebar/>
          <Step1 />
      </div>

      <script src={MainJS}></script>
    </div>
  );
}

export default App;
