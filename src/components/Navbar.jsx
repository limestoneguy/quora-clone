import React from "react";
import NavItems from "./NavItems";
import AutoCompleteText from "./AutoCompleteText";
import CircleAvatar from "./CircleAvatar";
import NavButton from "./NavButton";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = { activeWindow: "Home" };
    this.receiveChildValue = this.receiveChildValue.bind(this);
  }

  receiveChildValue(value) {
    this.setState({ activeWindow: value });
    console.log(this.state.activeWindow);
  }

  render() {
    return (
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://qsf.fs.quoracdn.net/-3-images.logo.wordmark_default.svg-26-bfa6b94bc0d6af2e.svg"
            alt="profile Pic"
          />
        </div>
        <div className="navLinks">
          <NavItems
            props={{
              name: "Home",
              isSelected: this.state.activeWindow === "Home",
              fromChildToParentCallback: this.receiveChildValue
            }}
          />
          <NavItems
            props={{
              name: "Answers",
              isSelected: this.state.activeWindow === "Answers",
              fromChildToParentCallback: this.receiveChildValue
            }}
          />
          <NavItems
            props={{
              name: "Spaces",
              isSelected: this.state.activeWindow === "Spaces",
              fromChildToParentCallback: this.receiveChildValue
            }}
          />
          <NavItems
            props={{
              name: "Notifications",
              isSelected: this.state.activeWindow === "Notifications",
              fromChildToParentCallback: this.receiveChildValue
            }}
          />
        </div>
        <AutoCompleteText placeholder="Search Quora" />
        <CircleAvatar url={"photoURL"} />
        <NavButton text={"Add Question or Link"} />
      </nav>
    );
  }
}

export default Navbar;
