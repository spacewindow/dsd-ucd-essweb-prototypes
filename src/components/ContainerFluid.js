/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../css/bd.css";

const ContainerFluid = props => {
  return (
    <div className="container-fluid">
      <div className="row flex-xl-nowrap">
        <div className="col-12 col-md-5 col-xl-2 bd-sidebar">
          <form className="bd-search d-flex align-items-center">
            <input
              type="search"
              className="form-control"
              id="search-input"
              placeholder="Search..."
              aria-label="Search for..."
              autocomplete="off"
              data-docs-version="4.3"
            />
            <button
              className="btn btn-link bd-search-docs-toggle d-md-none p-0 ml-3"
              type="button"
              data-toggle="collapse"
              data-target="#bd-docs-nav"
              aria-controls="bd-docs-nav"
              aria-expanded="false"
              aria-label="Toggle docs navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                role="img"
                focusable="false"
              >
                <title>Menu</title>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="M4 7h22M4 15h22M4 23h22"
                />
              </svg>
            </button>
          </form>
          <nav className="bd-links" id="bd-docs-nav">
            <div className="bd-toc-item active">
              <a className="bd-toc-link" href="#">
                Home
              </a>
              {/* <ul className="nav bd-sidenav">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li>
                  <a href="#">Caseload</a>
                </li>
              </ul> */}
            </div>
            <div className="bd-toc-item active">
              <a className="bd-toc-link" href="#">
                Activities
              </a>

              <ul className="nav bd-sidenav">
                <li className="active">
                  <a href="#">Summary</a>
                </li>
                <li>
                  <a href="#">Create</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <main className="col-10 p-4" role="main">
          {props.children}
        </main>
      </div>
    </div>
  );
};

export default ContainerFluid;
