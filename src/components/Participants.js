import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import Demerits from "./Demerits";

const jobseekers = [
  {
    name: "123456",
    location: "Hello",
    priority: 1,
    risk: "Compliance",
    notified: "Yes",
    demerits: <Demerits value={3} />
  }
];
const columns = [
  {
    dataField: "name",
    text: "Name",
    classes: "table-column-bold"
  },
  {
    dataField: "location",
    text: "Location"
  },
  {
    dataField: "priority",
    text: "Priority"
  },
  {
    dataField: "risk",
    text: "Risk"
  },
  {
    dataField: "notified",
    text: "Notified"
  },
  {
    dataField: "demerits",
    text: "Demerits"
  }
];

export default () => (
  <BootstrapTable hover keyField="id" data={jobseekers} columns={columns} />
);
