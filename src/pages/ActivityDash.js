import React, { Fragment, useState } from "react";
import ContainerFluid from "../components/ContainerFluid";
import Header from "../components/Header";
import Picker from "../components/Picker";
import PickerPill from "../components/PickerPill";
import Card from "../components/Card";
import Persona from "../components/Persona";
import Drawer from "../components/Drawer";
import BarChart from "../components/BarChart";
import ActivityDetails from "./ActivityDetails";
import Participants from "../components/Participants";

const ActivityDash = props => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <Fragment>
      <Header />
      <Picker>
        <PickerPill type="Org" name="BBXY" />
        <PickerPill type="Site" name="TL45" />
        <PickerPill type="Contract" name="DES" />
      </Picker>
      <Drawer
        show={showDrawer}
        closeFunction={() => setShowDrawer(false)}
        header="Skills for Work | Details"
      >
        <ActivityDetails />
      </Drawer>
      <ContainerFluid>
        <div className="row">
          <div className="col-10">
            <h1 className="h2 d-flex justify-content-between align-items-center mb-2">
              <span>
                <span className="text-muted">Activity | </span>
                <span>Skills for Work</span>
              </span>
            </h1>
            <p className="text-muted"> ID: 123456789</p>
          </div>
          <div className="col-2 d-flex justify-content-end align-items-start">
            <button
              className="btn btn-secondary"
              onClick={() => {
                showDrawer ? setShowDrawer(false) : setShowDrawer(true);
              }}
            >
              View details
            </button>
          </div>

          <div className="col-12">
            <div className="row flex-row flex-wrap">
              <div className="col-12">
                <Card>
                  <div className="row flex-row">
                    <div className="col-md-3">
                      <label className="small mt-2">Attendance</label>
                      <p className="lead text-danger d-flex align-items-center">
                        <i
                          className="ms-Icon ms-Icon--SkypeCircleArrow mr-2"
                          style={{ transform: "rotate(-90deg" }}
                        ></i>
                        Low
                      </p>
                    </div>

                    <div className="col-md-9">
                      <p className="small mt-1">4 months remaining</p>
                      <BarChart />
                      <div className="row flex-row justify-content-between">
                        <div className="col-6">
                          <p className="small mt-1">1/1/2019</p>
                        </div>
                        <div className="col-6">
                          <p className="small mt-1 text-right">30/6/2019</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-12">
                <Card>
                  <h3 className="h4">Participants</h3>
                  <Participants />
                </Card>
              </div>
              <div className="col-6">
                <Card>Yo</Card>
              </div>
              <div className="col-6">
                <Card>Yo</Card>
              </div>
              <div className="col-12">
                <Card>
                  <div className="row">
                    <div className="col-6">
                      <h4 className="h3 d-flex justify-content-between">
                        Details
                      </h4>
                    </div>
                    <div className="col-6">
                      <p>Hello</p>
                    </div>
                  </div>
                  <label className="small mt-2">Activity Name</label>
                  <p className="lead">Skills for Work</p>
                  <label className="small mt-2">Description</label>
                  <p className="line-clamp-3 mb-0">
                    Elit netus scelerisque per ullamcorper id parturient
                    consequat suspendisse ligula elementum auctor platea
                    senectus himenaeos venenatis.Sagittis mus a suspendisse
                    consectetur parturient a a at fusce natoque justo duis ad a
                    a sociosqu diam ac eros malesuada pulvinar parturient ut
                    praesent condimentum bibendum etiam consequat.Convallis
                    varius hac nam vehicula curae adipiscing suspendisse.
                  </p>
                  <p className="mt-1">
                    <a href="#">More...</a>
                  </p>
                  <label className="small mt-2">Host Organisation</label>
                  <p className="lead">TAFE Sutherland</p>
                  <label className="small mt-2">Tags</label>
                  <ul className="ds-tags">
                    <li
                      className="rounded-pill px-3 bg-secondary text-white mr-2 small"
                      style={{
                        paddingBottom: "0.4em",
                        paddingTop: "0.3em",
                        display: "inline-block"
                      }}
                    >
                      EST
                    </li>
                    <li
                      className="rounded-pill px-2 py-1 bg-secondary text-white mr-2 small"
                      style={{
                        paddingBottom: "0.4em",
                        paddingTop: "0.3em",
                        display: "inline-block"
                      }}
                      style={{ paddingBottom: "1em", display: "inline-block" }}
                    >
                      activity
                    </li>
                    <li
                      className="rounded-pill px-2 py-1 bg-secondary text-white mr-2 small"
                      style={{
                        paddingBottom: "0.4em",
                        paddingTop: "0.3em",
                        display: "inline-block"
                      }}
                      style={{ paddingBottom: "1em", display: "inline-block" }}
                    >
                      youth
                    </li>
                  </ul>
                </Card>
              </div>
              <div className="col-6">
                <Card>Hello</Card>
              </div>
              <div className="col-6">
                <Card>Hello</Card>
              </div>
            </div>
          </div>
        </div>
      </ContainerFluid>
    </Fragment>
  );
};

export default ActivityDash;
