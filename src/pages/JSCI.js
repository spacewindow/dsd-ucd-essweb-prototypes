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
import { MyTextField, MySelect, RadioButton, RadioButtonGroup } from '../components/FormFields';
const dtrum = window.dtrum;
const $ = window.$;


// console.log(Yup);

const mySchema = Yup.object().shape({
  WORK_TWOYEARS: Yup.string().required('Required'),
  WORK_HAVEYOUDONE: Yup.string().when('WORK_TWOYEARS', {
    is: "Paid work",
    then: Yup.string().required('Required')
  })
});



const JSCI = props => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [initValues, setInitValues] = useState({});

  useEffect(() => {
    const initValues = axios.get("http://localhost:4000/jsci").then(response => {
      setInitValues(response.data.values);
    });
  }, []);
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
            <Formik
              enableReinitialize
              initialValues={initValues}
              validationSchema={mySchema}
              validateOnChange={false}
              validateOnBlur={false}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert("Yo " + JSON.stringify(values, null, 2));
                  // axios.post('http://localhost:4000/users/', values);

                }, 400);
              }}
            >
              {({
                values,
                handleSubmit,
                isSubmitting,
                errors,
                touched,
                setValues,
                setFieldValue
                /* and other goodies */
              }) => (
                  <form onSubmit={handleSubmit}>
                    <MySelect
                      label="What have you MOSTLY been doing in the LAST TWO YEARS?"
                      name="WORK_TWOYEARS"
                      options={
                        [
                          { label: "Select a response...", value: "" },
                          { label: "Paid work", value: "Paid work" },
                          { label: "Working while in prison or other detention", value: "Working while in prison or other detention" },
                          { label: "Unpaid work (includes volunteering)", value: "Unpaid work (includes volunteering)" },
                          { label: "Unemployed (ie not working but looking for work)", value: "Unemployed (ie not working but looking for work)" },
                          { label: "Community Development Employment Projects (CDEP)", value: "Community Development Employment Projects (CDEP)" },
                          { label: "Studying part-time", value: "Studying part-time" },
                          { label: "Studying full-time", value: "Studying full-time" },
                          { label: "Caring", value: "Caring" },
                          { label: "Parenting", value: "Parenting" },
                          { label: "NOT working and NOT looking for work", value: "NOT working and NOT looking for work" }
                        ]
                      }
                      child={{
                        field: "WORK_HAVEYOUDONE",
                        parentValue: "Paid work",
                        reset: () => {
                          setFieldValue("WORK_HAVEYOUDONE", undefined)
                        }
                      }}
                    />

                    {values.WORK_TWOYEARS && values.WORK_TWOYEARS === "Paid work" ?

                      <RadioButtonGroup
                        id="WORK_HAVEYOUDONE_Group"
                        label="Have you done any paid work (in Australia or overseas) in the last 2 years"
                        value={values.WORK_HAVEYOUDONE}
                        error={errors.WORK_HAVEYOUDONE}
                        touched={touched.WORK_HAVEYOUDONE}
                        isSubmitting={isSubmitting}
                      >
                        <Field
                          component={RadioButton}
                          name="WORK_HAVEYOUDONE"
                          id="Yes"
                          label="Yes"
                        />
                        <Field
                          component={RadioButton}
                          name="WORK_HAVEYOUDONE"
                          id="No"
                          label="No"
                        />
                      </RadioButtonGroup> : null}



                    {/* <MyTextField
                      name="password"
                      label="password"
                    /> */}
                    <button type="submit" disabled={isSubmitting}>
                      Submit
          </button>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                    <pre>{JSON.stringify(errors, null, 2)}</pre>
                  </form>
                )}
            </Formik>



          </div>

        </div>
      </ContainerFluid>
    </>
  );
};

export default JSCI;
