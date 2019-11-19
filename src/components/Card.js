import React from "react";

const Card = props => {
  return (
    <div className="row no-gutters border rounded  flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-white">
      <div className="col p-4 position-static">{props.children}</div>
    </div>
  );
};

export default Card;
