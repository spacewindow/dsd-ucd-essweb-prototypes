import React from "react";
import {
  TextField,
  Select,
  RadioButton,
  RadioButtonGroup,
  MultiSelect
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
        }
      ]
    },
    {
      title: "Education",
      id: "education",
      questions: [
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
            "Did not go to school"
          ],
          validation: Yup.string().required("Please select an option below")
        },
        {
          name: "edu2_1_quals",
          label: "Have you COMPLETED any other qualification(s)? ",
          component: RadioButtonGroup,
          options: ["Yes", "No"],
          validation: Yup.string().required("Please select an option below")
        },
        {
          name: "edu3_1_qualsCompleted",
          label: "Which of these have you completed?",
          component: MultiSelect,
          options: [
            "Masters Degree",
            "Vocational Graduate Diploma or Graduate Diploma",
            "Vocational Graduate Cert_ or Graduate Cert_",
            "Bachelor Degree",
            "Diploma, Advanced Diploma or Associate Degree",
            "Tradesperson's qualification",
            "VET Certificate I or industry licence/ticket",
            "Course run by private or community organisation",
            "Other non-trade VET Certificate II",
            "Other non-trade VET Certificates III or IV"
          ],
          parent: {
            name: "edu2_1_quals",
            toggle: "render",
            toggleValues: ["Yes"]
          },
          validation: Yup.string() /* Yup.array()
            .max(1, "Pick at least 3 tags")
            .of(
              Yup.object().shape({
                label: Yup.string().required(),
                value: Yup.string().required()
              })
            ) */
        },
        {
          name: "edu3_2_qualsWork",
          label: "Do you think any of these could be work-related?",
          component: RadioButtonGroup,
          options: ["Yes", "No"],
          parent: {
            name: "edu2_1_quals",
            toggle: "render",
            toggleValues: ["Yes"]
          },
          validation: Yup.string().required("Please select an option below")
        }
      ]
    },
    {
      title: "Work Capacity",
      id: "workCapacity",
      questions: [
        {
          name: "capacity1_1_hours",
          label:
            "Do you have any disabilities or medical conditions that affect the HOURS you are able to work?",
          component: Select,
          options: [
            "Yes",
            "No",
            "Not sure/don't know",
            "Do not wish to answer"
          ],
          validation: Yup.string().required("Please select an option below")
        },
        {
          name: "capacity2_1_hours",
          label:
            "What is the most number of hours a week you think you are able to work?",
          component: Select,
          options: ["30 hours or more", "15-29 hours", "Less than 15 hours"],
          validation: Yup.string().required("Please select an option below")
        },
        {
          name: "capacity3_1_type",
          label:
            "Do you have any disabilities or medical conditions that affect the TYPE OF WORK you can do?",
          component: Select,
          options: [
            "Yes",
            "No",
            "Not sure/don't know",
            "Do not wish to answer"
          ],
          validation: Yup.string().required("Please select an option below")
        }
      ]
    },
    {
      title: "Transport",
      id: "transport",
      questions: []
    },
    {
      title: "Personal Factors",
      id: "personalFactors",
      questions: []
    }
  ]
};
