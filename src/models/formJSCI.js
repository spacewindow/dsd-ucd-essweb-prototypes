import React from "react";
import {
  TextField,
  Select,
  RadioButton,
  RadioButtonGroup
} from "../components/FormFields";
const Yup = require("yup");

export const formJSCI = [
  {
    name: "workExp1_1_recent",
    label: "What have you MOSTLY been doing in the LAST TWO YEARS?",
    component: Select,
    options: [
      "Paid work",
      "Working while in prison or other detention",
      "Unpaid work (includes volunteering)",
      "Unemployed (ie not working but looking for work)",
      "Community Development Employment Projects (CDEP)",
      "Studying part-time",
      "Studying full-time",
      "Caring",
      "Parenting",
      "NOT working and NOT looking for work"
    ],
    validation: Yup.string().required("Required")
  },
  {
    name: "workExp2_1_paid",
    label:
      "Have you done any paid work (in Australia or overseas) in the last 2 years",
    component: RadioButtonGroup,
    options: ["Yes", "No"],
    parent: {
      name: "workExp1_1_recent",
      toggle: "render",
      toggleValues: [
        undefined,
        "Working while in prison or other detention",
        "Unpaid work (includes volunteering)",
        "Unemployed (ie not working but looking for work)",
        "Community Development Employment Projects (CDEP)",
        "Studying part-time",
        "Studying full-time",
        "Caring",
        "Parenting",
        "NOT working and NOT looking for work"
      ]
    },
    validation: Yup.string().required("Required")
  },
  {
    name: "workExp2_2_paidHours",
    label:
      "In your most recent job, how many paid hours did you mostly work per week?",
    component: Select,
    options: [
      "30+ hours per week",
      "15-30 hours per week",
      "Less than 15 hours per week"
    ],
    parent: {
      name: "workExp1_1_recent",
      toggle: "render",
      toggleValues: ["Paid work"]
    },
    validation: Yup.string().required("Required")
  }
];