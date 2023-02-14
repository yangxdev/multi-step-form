import React, { Component } from "react";

class Step3 extends Component {
  selectAddons = (addon) => {
    const btn = document.querySelector(`#btn-${addon}`);
    btn.classList.toggle("selected");
    document.querySelector(`#input-${addon}`).checked =
      btn.classList.contains("selected");
    // this.setState({
    //   addons: {
    //     ...this.state.addons,
    //     [addon]: btn.classList.contains("selected"),
    //   },
    // });
    // update the state in App.jsx
    this.props.onUpdateAddonState({
      ...this.props.addons,
      [addon]: btn.classList.contains("selected"),
    });
  };

  showState = () => {
    console.log(this.state);
  };

  refreshAddonButtons = () => {
    const onlineServiceBtn = document.querySelector("#btn-online-service");
    const largerStorageBtn = document.querySelector("#btn-larger-storage");
    const customizableProfileBtn = document.querySelector(
      "#btn-customizable-profile"
    );

    onlineServiceBtn.removeEventListener(
      "click",
      this.handleOnlineServiceBtnClick
    );
    largerStorageBtn.removeEventListener(
      "click",
      this.handleLargerStorageBtnClick
    );
    customizableProfileBtn.removeEventListener(
      "click",
      this.handleCustomizableProfileBtnClick
    );

    onlineServiceBtn.addEventListener(
      "click",
      this.handleOnlineServiceBtnClick
    );
    largerStorageBtn.addEventListener(
      "click",
      this.handleLargerStorageBtnClick
    );
    customizableProfileBtn.addEventListener(
      "click",
      this.handleCustomizableProfileBtnClick
    );
  };

  handleOnlineServiceBtnClick = () => {
    this.selectAddons("online-service");
    console.log("online service clicked");
  };

  handleLargerStorageBtnClick = () => {
    this.selectAddons("larger-storage");
    console.log("larger storage clicked");
  };

  handleCustomizableProfileBtnClick = () => {
    this.selectAddons("customizable-profile");
    console.log("customizable profile clicked");
  };

  // function to select the addons based on the state
  selectAddonsBasedOnState = () => {
    if (this.props.addons["online-service"]) {
      document.querySelector("#btn-online-service").classList.add("selected");
      document.querySelector("#input-online-service").checked = true;
    }
    if (this.props.addons["larger-storage"]) {
      document.querySelector("#btn-larger-storage").classList.add("selected");
      document.querySelector("#input-larger-storage").checked = true;
    }
    if (this.props.addons["customizable-profile"]) {
      document
        .querySelector("#btn-customizable-profile")
        .classList.add("selected");
      document.querySelector("#input-customizable-profile").checked = true;
    }
  };

  componentDidMount() {
    this.refreshAddonButtons();
    this.selectAddonsBasedOnState();
    document.addEventListener("keydown", (e) => {
      if (e.key === "'") {
        this.showState();
      }
    });
  }

  render() {
    return (
      <>
        <div className="step step3" id="step3">
          <div className="card">
            <div className="t1">Pick add-ons</div>
            <div className="t2">
              Add-ons help enhance your gaming experience.{" "}
            </div>
            <div className="form-check form-check-inline">
              <div className="wrapper" id="btn-online-service">
                <div className="checkbox-btn">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="input-online-service"
                    value="option1"
                  />
                  <div className="checkbox-label">
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                    >
                      Online service
                    </label>
                    <div className="t2">Access to multiplayer games</div>
                  </div>
                  <div className="price-label">
                    <div className="t3">$1/mo</div>
                  </div>
                </div>
              </div>
              <div className="wrapper" id="btn-larger-storage">
                <div className="checkbox-btn">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="input-larger-storage"
                    value="option2"
                  />
                  <div className="checkbox-label">
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox2"
                    >
                      Larger storage
                    </label>
                    <div className="t2">Extra 1TB of cloude save</div>
                  </div>
                  <div className="price-label">
                    <div className="t3">$2/mo</div>
                  </div>
                </div>
              </div>
              <div className="wrapper" id="btn-customizable-profile">
                <div className="checkbox-btn">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="input-customizable-profile"
                    value="option3"
                  />
                  <div className="checkbox-label">
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox3"
                    >
                      Customizable profile
                    </label>
                    <div className="t2">Custom theme on your profile</div>
                  </div>
                  <div className="price-label">
                    <div className="t3">$2/mo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Step3;
