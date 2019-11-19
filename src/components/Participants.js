import React from "react";
import { MDBDataTable } from "mdbreact";
import DemeritsBar from "./DemeritsBar";
const csv = require("csvtojson");

const tableData = csv().fromFile("../data/participants.csv");

console.log(tableData);

const DatatablePage = () => {
  const data = {
    columns: [
      {
        field: "name",
        label: "Name",
        sort: "asc"
      },
      {
        field: "location",
        label: "Location",
        sort: "asc"
      },
      {
        field: "priority",
        label: "Priority",
        sort: "asc"
      },
      {
        field: "risk",
        label: "Risk",
        sort: "asc"
      },
      {
        field: "notified",
        label: "Notified",
        sort: "asc"
      },
      {
        field: "demerits",
        label: "Demerits",
        sort: "asc"
      }
    ],
    rows: [
      {
        name: "123456",
        location: "Hello",
        priority: 1,
        risk: "Compliance",
        notified: "Yes",
        demerits: <DemeritsBar value={3} />
      }
    ]
  };

  return <MDBDataTable bordered sortable data={data} noBottomColumns />;
};

export default DatatablePage;
