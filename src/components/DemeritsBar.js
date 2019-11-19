import React, { Fragment } from "react";

const DemeritsBar = props => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "150px",
        height: "1.5rem"
      }}
    >
      <div style={{ marginRight: "1rem" }}>{props.value}</div>
      <div
        style={{
          background: props.value > 0 ? "#dc3545" : "lightgrey",
          width: "20%",
          height: "0.5rem"
        }}
        className="demerits-bar mx-1 demerits-bar1"
      ></div>
      <div
        style={{
          background: props.value > 1 ? "#dc3545" : "lightgrey",
          width: "20%",
          height: "0.5rem"
        }}
        className="demerits-bar mx-1 demerits-bar2"
      ></div>
      <div
        style={{
          background: props.value > 2 ? "#dc3545" : "lightgrey",
          width: "20%",
          height: "0.5rem"
        }}
        className="demerits-bar mx-1 demerits-bar3"
      ></div>
      <div
        style={{
          background: props.value > 3 ? "#dc3545" : "lightgrey",
          width: "20%",
          height: "0.5rem"
        }}
        className="demerits-bar mx-1 demerits-bar4"
      ></div>
      <div
        style={{
          background: props.value > 4 ? "#dc3545" : "lightgrey",
          width: "20%",
          height: "0.5rem"
        }}
        className="demerits-bar mx-1 demerits-bar5"
      ></div>
    </div>
  );
};

export default DemeritsBar;
