import React from "react";

function NavItems(props) {
  let Style;
  if (props.props.isSelected) {
    Style = {
      color: "#cf001b",
      fontWeight: 500,
      borderBottom: "2px solid #cf001b"
    };
  }
  return (
    <div
      onClick={() => props.props.fromChildToParentCallback(props.props.name)}
      className="NavItems"
    >
      <a href="#" style={Style}>
        {props.props.name}
      </a>
    </div>
  );
}

export default NavItems;
