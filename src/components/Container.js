import React from "react";

const Container = props => {
  return (
    <div className={"container pt-4 " + props.containerClass}>
      {props.children}
    </div>
  );
};

export default Container;
