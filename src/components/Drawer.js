import React, { Fragment } from "react";

const Drawer = props => {
  return (
    <Fragment>
      <div className={props.show ? "ds-backdrop show" : "ds-backdrop"}></div>
      <div className={props.show ? "drawer show" : "drawer"} id={props.id}>
        <header className="drawer-header container pb-1 border-bottom">
          <div className="row mt-3 pb-2">
            <button
              className="btn btn-drawer-x mt-2 ml-2 p-2 drawer-close"
              onClick={props.closeFunction}
            >
              <i className="ms-Icon ms-Icon--ChromeClose"></i>
              <span className="sr-only">Close</span>
            </button>
            <div className="col-11 offset-1">
              <h3 className="h4">{props.header}</h3>
            </div>
          </div>
        </header>
        <div className="drawer-content container pt-4 pb-4">
          <div className="row">
            <div className="col-11 offset-1 ">
              <div className="row flex-row flex-wrap">
                <div className="col-12">{props.children}</div>
              </div>
            </div>
          </div>
        </div>
        {props.id === "drawer-history" && (
          <footer className="drawer-controls">
            <button>Prev</button>
            <button>Next</button>
          </footer>
        )}
      </div>
    </Fragment>
  );
};

export default Drawer;
