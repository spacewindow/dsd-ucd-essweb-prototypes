import React, { useEffect, useState } from "react";
import { MDBDataTable } from "mdbreact";
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import DemeritsBar from "./DemeritsBar";
import { capitalCase, csvToJson } from "../helpers/helpers";
const csvFilePath = require("../data/participants.csv");
const $ = window.$;

const DatatablePage = () => {
  const [data, setData] = useState({
    columns: [{
      dataField: 'default',
      text: 'Default'
    }],
    rows: []
  });

  // hack for custom checkboxes
  useEffect(() => {
    csvToJson(csvFilePath, setData);
    setTimeout(function () {
      $("input[type='checkbox']").after("<label />");
    }, 100)
  }, []);

  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true
  };

  return (
    <>
      {/* <MDBDataTable bordered sortable data={data} noBottomColumns /> */}
      <BootstrapTable keyField={'jobseekerID'} columns={data.columns} data={data.rows} selectRow={selectRow} />
    </>
  );
};

export default DatatablePage;
