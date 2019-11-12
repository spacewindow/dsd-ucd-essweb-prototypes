import React from "react";

const Persona = props => {
  return (
    <div className="d-flex ds-persona align-items-start mt-4 mb-2">
      <div
        className="ds-persona-avatar bg-success text-white d-flex justify-content-center align-items-center mr-3"
        style={{
          textTransform: "uppercase",
          width: "3rem",
          height: "3rem",
          borderRadius: "100%",
          padding: 0
        }}
      >
        AY
      </div>
      <div className="ds-persona-details" style={{ width: "12rem" }}>
        <h6>Anne Yang</h6>
        <p className="small">Employment Consultant, Sureway Batemans Bay</p>
        <p className="m-0">
          <small>
            <a href="#">
              <i className="oi oi-envelope-closed mr-2"></i>
              anne.yang@sureway.org.au
            </a>
          </small>
        </p>

        <p className="m-0">
          <small>
            <a href="#">
              <i className="oi oi-phone mr-2"></i>
              0423 156 456
            </a>
          </small>
        </p>
      </div>
    </div>
  );
};

export default Persona;
