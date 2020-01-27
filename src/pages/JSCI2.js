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
import axios from 'axios';
import { Formik, Field, useField } from 'formik';
import * as Yup from 'yup';
import JSCIForm from './JSCIForm';
import { TextField, Select, RadioButton, RadioButtonGroup } from '../components/FormFields';
const dtrum = window.dtrum;
const $ = window.$;



const JSCI = props => {
  const [showDrawer, setShowDrawer] = useState(false);
  // $('body').scrollspy({ target: '#navbar-example3' })

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
      >
      </Drawer>
      <ContainerFluid>
        <div className="row">
          <div className="col-3">
            <nav id="navbar-example3" className="navbar navbar-light bg-light" style={{ position: "sticky", top: "0" }}>
              <nav className="nav nav-pills flex-column">
                <a className="nav-link" href="#item-1">Item 1</a>
                <nav className="nav nav-pills flex-column">
                  <a className="nav-link ml-3 my-1" href="#item-1-1">Item 1-1</a>
                  <a className="nav-link ml-3 my-1" href="#item-1-2">Item 1-2</a>
                </nav>
                <a className="nav-link" href="#item-2">Item2</a>
                <a className="nav-link" href="#item-3">Item3</a>
                <nav className="nav nav-pills flex-column">
                  <a className="nav-link ml-3 my-1" href="#item-3-1">Item 3-1</a>
                  <a className="nav-link ml-3 my-1" href="#item-3-2">Item 3-2</a>
                </nav>
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
