import React from "react";

const PickerPill = props => {
  return (
    <div className="ds-picker-pill small rounded-pill mx-2">
      <span className="ds-picker-pill-type bg-light text-dark px-2 py-1">
        {props.type}
      </span>
      <span className="ds-picker-pill-name bg-secondary text-white px-2 py-1">
        {props.name}
      </span>
    </div>
  );
};

export default PickerPill;
