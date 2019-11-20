import React, { useEffect, useState } from "react";
import { MDBDataTable } from "mdbreact";
import DemeritsBar from "./DemeritsBar";
import Papa from "papaparse";
import { capitalCase } from "../helpers/helpers";
const csvFilePath = require("../data/participants.csv");

const DatatablePage = () => {
  let rows, columns, data;

  Papa.parse(csvFilePath, {
    download: true,
    header: true, // will format it as an object now :)
    complete: function(results) {
      rows = results.data;
      columns = Object.keys(rows[0]).map(name => {
        return {
          field: name,
          label: capitalCase(name),
          sort: "asc"
        };
      });
      console.log(rows);
      data = {
        columns: columns,
        rows: rows
      };
    }
  });

  return <MDBDataTable bordered sortable data={data} noBottomColumns />;
};

export default DatatablePage;
