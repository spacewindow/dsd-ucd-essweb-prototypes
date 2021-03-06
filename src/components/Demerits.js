import React, { Fragment } from "react";

const Demerits = props => {
  return (
    <div style={{ display: "flex" }}>
      <svg
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        width="40"
        height="40"
      >
        <path
          id="dem5"
          d="M5.91,33.61C12.5,15.82,29.04,3.8,48,3.01v15.81c-12.09,0.76-22.6,8.41-27.05,19.67L5.91,33.61z"
          style={{ fill: props.value > 4 ? "red" : "lightgrey" }}
        />
        <path
          id="dem4"
          d="M20.79,86.85C9.59,77.96,2.96,64.33,2.96,50c0-4.26,0.58-8.49,1.71-12.58l15.04,4.87
	c-0.64,2.52-0.96,5.1-0.96,7.71c0,9.3,4.2,18.15,11.32,24.06L20.79,86.85z"
          style={{ fill: props.value > 3 ? "red" : "lightgrey" }}
        />
        <path
          id="dem3"
          d="M50,97.04c-9.32,0-18.26-2.7-25.98-7.83l9.28-12.79c4.99,3.17,10.73,4.83,16.69,4.83
	c5.98,0,11.72-1.67,16.72-4.85l9.29,12.78C68.29,94.33,59.34,97.04,50,97.04z"
          style={{ fill: props.value > 2 ? "red" : "lightgrey" }}
        />
        <path
          id="dem2"
          d="M69.96,74.04C77.06,68.13,81.25,59.28,81.25,50c0-2.62-0.33-5.21-0.97-7.74l15.03-4.89
	c1.15,4.11,1.73,8.35,1.73,12.63c0,14.31-6.61,27.93-17.79,36.82L69.96,74.04z"
          style={{ fill: props.value > 1 ? "red" : "lightgrey" }}
        />
        <path
          id="dem1"
          d="M79.04,38.45C74.58,27.21,64.08,19.58,52,18.81V3.01C70.94,3.8,87.47,15.8,94.08,33.57L79.04,38.45z"
          style={{ fill: props.value > 0 ? "red" : "lightgrey" }}
        />
        {/* <path
        id="exclaim"
        d="M46.86,64.91c0-1.91,1.33-3.3,3.14-3.3c1.91,0,3.14,1.38,3.14,3.3c0,1.86-1.22,3.3-3.14,3.3
	C48.14,68.21,46.86,66.78,46.86,64.91z M47.19,57.31l-1.74-25.52h8.6l-1.74,25.52H47.19z"
      /> */}
      </svg>
      <span>{props.value}</span>
    </div>
  );
};

export default Demerits;
