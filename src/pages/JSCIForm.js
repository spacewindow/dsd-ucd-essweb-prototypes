import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import { Formik, Field, useField } from "formik";
import * as Yup from "yup";
import { formJSCI as Questions } from "../models/formJSCI";

const valSchema = (() => {
  var validation = {};
  Questions.map(q => {
    validation[q.name] = q.validation;
    if (q.parent) {
      validation[q.name] = Yup.string().when(q.parent.name, {
        is: val => q.parent.toggleValues.includes(val),
        then: q.validation
      });
    }
  });
  return Yup.object().shape(validation);
})();

const JSCIForm = props => {
  const [initValues, setInitValues] = useState({});

  useEffect(() => {
    const initValues = axios
      .get("http://localhost:4000/jsci")
      .then(response => {
        // setTimeout(() => {
        setInitValues(response.data.values);
        // }, 1000);
      });
  }, []);

  console.log("initValues", initValues);

  return (
    <Formik
      enableReinitialize
      initialValues={initValues}
      validationSchema={valSchema}
      // validateOnMount={false}
      // validateOnChange={false}
      // validateOnBlur={false}
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
          {Questions.map((q, index) => {
            // console.log("RENDERING", q.name);
            return (
              <q.component
                name={q.name}
                label={q.label}
                options={q.options}
                key={"key" + index}
                parent={
                  q.parent
                    ? { currentValue: values[q.parent.name], ...q.parent }
                    : null
                }
              />
            );
          })}

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
          <pre>{JSON.stringify(errors, null, 2)}</pre>
        </form>
      )}
    </Formik>
  );
};

export default JSCIForm;
