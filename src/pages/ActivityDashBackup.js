import React, { Fragment } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Card from "../components/Card";
import Drawer from "../components/Drawer";

const ActivityDash = props => {
  return (
    <Fragment>
      <Header />
      <Container containerClassName="client bg-light">
        <div className="col-12">
          <h1 className="h2 mb-4">
            <span style={{ textTransform: "uppercase" }}>Satewerawat</span>, Jit
          </h1>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Card>
              <h3 className="h4 mb-4">Client details</h3>
              <label className="small mt-2 mb-0">Date of Birth</label>
              <p className="lead">23/01/1996</p>
              <label className="small mt-2 mb-0">Gender</label>
              <p className="lead">Female</p>
              <label className="small mt-2 mb-0">Email</label>
              <p className="lead">janet@gmail.com</p>
              <label className="small mt-2 mb-0">Phone</label>
              <p className="lead">0424 123 456</p>
              <label className="small mt-2 mb-0">Location</label>
              <p className="lead">
                <span style={{ textTransform: "uppercase" }}>Broome</span> WA,
                6655
              </p>
              <label className="small mt-2 mb-0">CRN</label>
              <p className="lead">-</p>
              <button type="button" className="btn btn-primary btn-inline">
                View more
              </button>
            </Card>
          </div>
          <div className="col-md-8">
            <div className="row flex-row flex-wrap">
              <div className="col-12">
                <Card>
                  <h3 className="h4 mb-4">Apprenticeship</h3>
                  <div className="row flex-row">
                    <div className="col-md-6 col-lg-3 mb-4">
                      <label className="small mt-2">Status</label>
                      <p className="lead text-success  d-flex align-items-center">
                        <i className="oi oi-circle-check mr-2"></i>Current
                      </p>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4">
                      <label className="small mt-2">Reg ID</label>
                      <p className="lead">123456789</p>
                    </div>
                    <div className="col-md-12 col-lg-6 mb-4">
                      <p className="small mt-1">4 months remaining</p>
                      <div className="progress">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="row flex-row justify-content-between">
                        <div className="col-6">
                          <p className="small mt-1">1/1/2019</p>
                        </div>
                        <div className="col-6">
                          <p className="small mt-1 text-right">30/6/2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4">
                      <label className="small mt-2">Attendance</label>
                      <p className="lead text-primary d-flex align-items-center">
                        <i className="ms-Icon ms-Icon--CircleFill mr-2"></i>
                        Full Time
                      </p>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4">
                      <label className="small mt-2">Training Contract</label>
                      <p className="lead text-danger  d-flex align-items-center">
                        <i className="oi oi-pencil mr-2 small"></i>Draft
                      </p>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4">
                      <label className="small mt-2">Provider</label>
                      <p className="lead">MEGT</p>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4">
                      <label className="small mt-2">STA</label>
                      <p className="lead">WA</p>
                    </div>
                    <div className="col-12">
                      <button
                        id="view-registration"
                        className="btn btn-primary"
                      >
                        View registration
                      </button>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-lg-6">
                <Card>
                  <h3 className="h4 mb-4">Claims</h3>
                  <label className="small mt-2">Claim type</label>
                  <p>Living Away From Home Allowance (LAHFA)</p>
                  <label className="small mt-2">Period</label>
                  <p>
                    <span>Year 1 :</span> 12/08/2019 - 11/08/2020
                  </p>
                  <button className="btn btn-primary">View claims</button>
                </Card>
              </div>
              <div className="col-lg-6">
                <Card>
                  <h3 className="h4 mb-4">Employer</h3>
                  <label className="small mt-2">Workplace</label>
                  <p>
                    Broome Broome Car Rentals
                    <br />
                    <span style={{ textTransform: "uppercase" }}>
                      Broome
                    </span>{" "}
                    WA 6655
                  </p>
                  <label className="small mt-2">Business Name / ABN</label>
                  <p>Broome Broome Pty Ltd 123 456 789</p>
                  <button className="btn btn-primary">View employer</button>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className="backdrop"></div>
        <Drawer
          id="drawer-registration"
          header={[
            "Drawer Title",
            <span className="text-muted" key="first">
              {" "}
              ID: 123456789
            </span>
          ]}
        >
          Drawer content goes here
        </Drawer>
      </Container>
    </Fragment>
  );
};

export default ActivityDash;
