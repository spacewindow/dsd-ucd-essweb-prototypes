import React from "react";

const Header = props => {
  return (
    <header>
      <nav className="navbar navbar-expand-md bg-white">
        <div className="navbar-nav mr-auto">
          <div
            className="nav-masthead navbar-nav"
            style={{ marginRight: "6rem" }}
          >
            <a className="navbar-brand col-md-4" href="#">
              <h4 className="row masthead-brand">ESSWeb</h4>
            </a>
          </div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent mb-0">
              <li className="breadcrumb-item">
                <a href="#">Level 1</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Level 2</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Current Page
              </li>
            </ol>
          </nav>
        </div>
        <div className="d-flex align-items-center">
          <nav className="nav nav-masthead justify-content-center mr-4 pr-4 border-right">
            <a className="nav-link" title="Updates" href="/">
              <i className="ms-Icon ms-Icon--Megaphone"></i>
              <span className="sr-only">Updates</span>
            </a>
            <a className="nav-link" title="Noticeboard" href="/">
              <i className="ms-Icon ms-Icon--PageList"></i>
              <span className="sr-only">Noticeboard</span>
            </a>
            <a className="nav-link" title="Messages" href="/">
              <i className="ms-Icon ms-Icon--Mail"></i>
              <span className="sr-only">Messages</span>
            </a>
            <a className="nav-link" title="Search" href="/">
              <i className="ms-Icon ms-Icon--Search"></i>
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
