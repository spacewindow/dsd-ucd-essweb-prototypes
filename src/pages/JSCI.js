import React, { Fragment, useState, useEffect } from "react";
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
import { Formik } from 'formik';
import axios from 'axios';
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
    <Fragment>
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
          <div className="col-8">
            <h1 className="h2 d-flex justify-content-between align-items-center mb-2">
              <span><abbr title="Job Seeker Capacity Instrument">JSCI</abbr></span>
            </h1>
            <Formik
              initialValues={{ email: '', password: '' }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  axios.post('http://localhost:4000/users/', values);

                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                  <form onSubmit={handleSubmit}>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                    <button type="submit" disabled={isSubmitting}>
                      Submit
          </button>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                  </form>
                )}
            </Formik>

            <div>
              <h4 id="item-1">Item 1</h4>
              <p>Sed vehicula ullamcorper lorem donec suspendisse laoreet diam at nec feugiat est leo diam accumsan nullam quisque commodo nisl sem sem.Pulvinar condimentum urna nam a pharetra a mus fringilla elementum placerat elit praesent eu a ridiculus orci sapien a consectetur interdum class suspendisse at himenaeos netus.Montes arcu vestibulum suspendisse parturient in cum id semper donec eget.</p>
              <h5 id="item-1-1">Item 1-1</h5>
              <p>Sed vehicula ullamcorper lorem donec suspendisse laoreet diam at nec feugiat est leo diam accumsan nullam quisque commodo nisl sem sem.Pulvinar condimentum urna nam a pharetra a mus fringilla elementum placerat elit praesent eu a ridiculus orci sapien a consectetur interdum class suspendisse at himenaeos netus.Montes arcu vestibulum suspendisse parturient in cum id semper donec eget.</p>
              <h5 id="item-1-2">Item 2-2</h5>
              <p>Sed vehicula ullamcorper lorem donec suspendisse laoreet diam at nec feugiat est leo diam accumsan nullam quisque commodo nisl sem sem.Pulvinar condimentum urna nam a pharetra a mus fringilla elementum placerat elit praesent eu a ridiculus orci sapien a consectetur interdum class suspendisse at himenaeos netus.Montes arcu vestibulum suspendisse parturient in cum id semper donec eget.</p>
              <h4 id="item-2">Item 2</h4>
              <p>Sed vehicula ullamcorper lorem donec suspendisse laoreet diam at nec feugiat est leo diam accumsan nullam quisque commodo nisl sem sem.Pulvinar condimentum urna nam a pharetra a mus fringilla elementum placerat elit praesent eu a ridiculus orci sapien a consectetur interdum class suspendisse at himenaeos netus.Montes arcu vestibulum suspendisse parturient in cum id semper donec eget.</p>
              <h4 id="item-3">Item 3</h4>
              <p>Sed vehicula ullamcorper lorem donec suspendisse laoreet diam at nec feugiat est leo diam accumsan nullam quisque commodo nisl sem sem.Pulvinar condimentum urna nam a pharetra a mus fringilla elementum placerat elit praesent eu a ridiculus orci sapien a consectetur interdum class suspendisse at himenaeos netus.Montes arcu vestibulum suspendisse parturient in cum id semper donec eget.</p>
              <h5 id="item-3-1">Item 3-1</h5>
              <p>Sed vehicula ullamcorper lorem donec suspendisse laoreet diam at nec feugiat est leo diam accumsan nullam quisque commodo nisl sem sem.Pulvinar condimentum urna nam a pharetra a mus fringilla elementum placerat elit praesent eu a ridiculus orci sapien a consectetur interdum class suspendisse at himenaeos netus.Montes arcu vestibulum suspendisse parturient in cum id semper donec eget.</p>
              <h5 id="item-3-2">Item 3-2</h5>
              <p>Sed vehicula ullamcorper lorem donec suspendisse laoreet diam at nec feugiat est leo diam accumsan nullam quisque commodo nisl sem sem.Pulvinar condimentum urna nam a pharetra a mus fringilla elementum placerat elit praesent eu a ridiculus orci sapien a consectetur interdum class suspendisse at himenaeos netus.Montes arcu vestibulum suspendisse parturient in cum id semper donec eget.</p>
            </div>

          </div>
          <div className="col-4">
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
        </div>
      </ContainerFluid>
    </Fragment>
  );
};

export default JSCI;
