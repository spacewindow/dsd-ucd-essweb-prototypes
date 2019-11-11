import React from "react";

const Header = props => {
  return (
    <header>
      <nav className="navbar navbar-expand-md bg-white">
        <div className="navbar-nav mr-auto">
          <div className="nav-masthead navbar-nav mr-auto">
            <a className="navbar-brand col-md-4" href="#">
              <h4 className="masthead-brand">ESSWeb</h4>
            </a>
          </div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent mb-0">
              <li className="breadcrumb-item">
                <a href="#">Search</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Search results</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Client:{" "}
                <span style={{ textTransform: "uppercase" }}>Satewerawat</span>,
                Jit
              </li>
            </ol>
          </nav>
        </div>
        <div className="d-flex align-items-center">
          <nav className="nav nav-masthead justify-content-center mr-4 pr-4 border-right">
            <a className="nav-link" title="Search" href="/">
              <i className="ms-Icon ms-Icon--Inbox"></i>
              <span className="sr-only">Search</span>
            </a>
            <a className="nav-link" title="Search" href="/">
              <i className="ms-Icon ms-Icon--Inbox"></i>
              <span className="sr-only">Search</span>
            </a>
            <a className="nav-link" title="Search" href="/">
              <i className="ms-Icon ms-Icon--Inbox"></i>
              <span className="sr-only">Search</span>
            </a>
            <a className="nav-link" title="Search" href="/">
              <i className="ms-Icon ms-Icon--Inbox"></i>
              <span className="sr-only">Search</span>
            </a>
          </nav>
          <p className="mb-0 mr-3">Hi, Rob</p>
          <button className="btn btn-sm btn-secondary">Logout</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
