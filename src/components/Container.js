import React from "react";
import Header from "./Header";

const Container = props => {
  return (
    <div className={"container pt-4 " + props.containerClass}>
      {props.children}
    </div>
  );
};

export default Container;
