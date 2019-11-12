import React from "react";

const Picker = props => {
  return (
    <div className="container-fluid bg-dark py-3">
      <div className="row"></div>
      <div className="col-12">
        <div className="row d-flex align-items-center">
          <i className="ms-Icon ms-Icon--Settings mr-3 text-white"></i>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Picker;
