import React, { useState, useEffect } from "react";
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
import axios from "axios";
import { Formik, Field, useField } from "formik";
import * as Yup from "yup";
import JSCIForm from "./JSCIForm";
import { formJSCI } from "../models/formJSCI";
import {
  TextField,
  Select,
  RadioButton,
  RadioButtonGroup
} from "../components/FormFields";
const dtrum = window.dtrum;
const $ = window.$;

const { sections } = formJSCI;

const JSCI = props => {
  const [showDrawer, setShowDrawer] = useState(false);
  $("body").scrollspy({ target: "#jsciNav" });

  const drawerClick = () => {
    console.log("showDrawer", showDrawer);
    setShowDrawer(!showDrawer);
    var action = dtrum.enterAction("Drawer Click", "click", null, "info");
    dtrum.leaveAction(action);
  };

  return (
    <>
      <Header />
      <Picker>
        <PickerPill type="Org" name="BBXY" />
        <PickerPill type="Site" name="TL45" />
        <PickerPill type="Contract" name="DES" />
      </Picker>
      <Drawer
        show={showDrawer}
        closeFunction={drawerClick}
        header="Skills for Work | Details"
      ></Drawer>
      <ContainerFluid>
        <div className="row">
          <div className="col-3">
            <nav
              id="jsciNav"
              className="navbar navbar-light bg-light"
              style={{ position: "sticky", top: "0" }}
            >
              <nav className="nav nav-pills flex-column">
                {sections.map((section, index) => (
                  <a className="nav-link" href={"#" + section.id}>
                    {section.title}
                  </a>
                ))}
              </nav>
            </nav>
          </div>
          <div className="col-8">
            <h1 className="h2 d-flex justify-content-between align-items-center mb-2">
              <span>Job Seeker Capacity Instrument (JSCI)</span>
            </h1>
            <JSCIForm />
          </div>
        </div>
      </ContainerFluid>
    </>
  );
};

export default JSCI;
