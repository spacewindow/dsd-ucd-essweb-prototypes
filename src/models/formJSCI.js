import React from "react";
import {
  TextField,
  Select,
  RadioButton,
  RadioButtonGroup
} from "../components/FormFields";
const Yup = require("yup");

export const formJSCI = {
  state: "draft",
  sections: [
    {
      title: "Work Experience",
      id: "workExperience",
      questions: [
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
          validation: Yup.string().required("Please select an option below")
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
          validation: Yup.string().required("Please select an option below")
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
          validation: Yup.string().required("Please select an option below")
        },
        {
          name: "edu1_1_highest",
          label: "What is the highest level of schooling you have COMPLETED?",
          component: Select,
          options: [
            "Year 12/13",
            "Year 11",
            "Year 10",
            "Completed primary school but less than Year 10",
            "Primary school or less",
            "Special school/support unit in school",
            "Did not go to school]"
          ],
          validation: Yup.string().required("Please select an option below")
        },
        {
          name: "edu2_1_quals",
          label: "Have you COMPLETED any other qualification(s)? ",
          component: RadioButtonGroup,
          options: ["Yes", "No"],
          validation: Yup.string().required("Please select an option below")
        }
      ]
    }
  ]
};
