import React, { useEffect, useState } from "react";
import { MDBDataTable } from "mdbreact";
import DemeritsBar from "./DemeritsBar";
import { capitalCase, csvToJson } from "../helpers/helpers";
const csvFilePath = require("../data/participants.csv");

const DatatablePage = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    csvToJson(csvFilePath, setData);
  }, []);

  return (
    // <pre>{JSON.stringify(data)}</pre>
    <MDBDataTable bordered sortable data={data} noBottomColumns />
  );
};

export default DatatablePage;
