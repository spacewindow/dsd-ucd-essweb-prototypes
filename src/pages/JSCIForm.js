import React, { useState, useEffect, Component } from "react";
import axios from 'axios';
import { Formik, Field, useField } from 'formik';
import * as Yup from 'yup';
import { form_jsci as Questions } from "../models/model_form_jsci";

const valSchema = (() => {
    var validation = {};
    Questions.map(q => {
        validation[q.name] = q.validation;
        if (q.parent) {
            validation[q.name] = Yup.string().when("workExp1_1_recent", {
                is: "Paid work",
                then: Yup.string().required('Required'),
                otherwise: Yup.string()
            });
        }
    });
    return Yup.object().shape(validation);
})();

const JSCIForm = props => {
    const [initValues, setInitValues] = useState({});

    useEffect(() => {
        const initValues = axios.get("http://localhost:4000/jsci").then(response => {
            setInitValues(response.data.values);
        });
    }, []);

    return (
        <Formik
            enableReinitialize
            initialValues={initValues}
            validationSchema={valSchema}
            validateOnChange={false}
            validateOnBlur={true}
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
                            // console.log("over heere", values, q.parent ? values[q.parent.name] : "No Parent");
                            return <q.component name={q.name} options={q.options} key={"key" + index} parent={q.parent ? { currentValue: values[q.parent.name], ...q.parent } : null} />;
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
