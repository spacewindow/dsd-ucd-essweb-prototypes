import React, { Fragment } from "react";
import ContainerFluid from "../components/ContainerFluid";
import Header from "../components/Header";
import Picker from "../components/Picker";
import PickerPill from "../components/PickerPill";
import Card from "../components/Card";
import Persona from "../components/Persona";
import Drawer from "../components/Drawer";

const ActivityDash = props => {
  return (
    <Fragment>
      <Header />
      <Picker>
        <PickerPill type="Org" name="BBXY" />
        <PickerPill type="Site" name="TL45" />
        <PickerPill type="Contract" name="DES" />
      </Picker>
      <ContainerFluid>
        <div className="row">
          <div className="col-12">
            <h1 className="h2 mb-4 d-flex justify-content-between align-items-center">
              <span>
                <span className="text-muted">Activity | </span>
                <span>Skills for Work</span>
              </span>
              <span className="small">ID: 123456789</span>
            </h1>
          </div>
          <div className="col-8 atv-widgets">
            <div className="row flex-row flex-wrap">
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
          <div className="col-4 atv-contacts">
            <Card>
              <h4 className="mb-4">Contacts</h4>
              <h5 className="mt-5">Sureway Pty Ltd</h5>
              <p>
                <small>Provider. ABN 321 456 789</small>
              </p>
              <Persona />

              <h5 className="mt-5">TAFE Sutherland</h5>
              <p>
                <small>Host Organisation. ABN 654 789 789</small>
              </p>
              <table className="table table-borderless table-sm mb-5">
                <colgroup>
                  <col className="td-fixed-10"></col>
                  <col></col>
                </colgroup>
                <tbody>
                  <tr>
                    <th className="small pl-0">Contact name</th>
                    <td>RICHARDS, Bob</td>
                  </tr>
                  <tr>
                    <th className="small pl-0">Phone</th>
                    <td>(07) 1234 4567)</td>
                  </tr>
                  <tr>
                    <th className="small pl-0">Email</th>
                    <td>bob@tafe.edu.au</td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </div>
        </div>
      </ContainerFluid>
    </Fragment>
  );
};

export default ActivityDash;
