import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import { Formik, Field, useField } from "formik";
import * as Yup from "yup";
import { formJSCI } from "../models/formJSCI";

const { sections } = formJSCI;

const allQs = sections.reduce((all, section) => {
  return all.concat(section.questions);
}, []);

console.log("allQs", allQs);

const valSchema = (() => {
  var validation = {};
  allQs.map(q => {
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
          {sections.map((section, index) => {
            const questions = section.questions.map((q, index) => {
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
            });
            return (
              <>
                <h3 id={section.id}>{section.title}</h3>
                {questions}
              </>
            );
          })}

          <button
            className="btn-primary btn"
            type="submit"
            disabled={isSubmitting}
          >
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
