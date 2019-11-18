import React, { Fragment } from "react";
import Persona from "../components/Persona";

const ActivityDetails = props => {
  return (
    <Fragment>
      <h4 className="mb-4">Contacts</h4>
      <h5 className="mt-5">Sureway Pty Ltd</h5>
      <p>
        <small>Provider. ABN 321 456 789</small>
      </p>
      <Persona />

      <h5 className="mt-5">TAFE Sutherland</h5>
      <p>
        <small>Host Organisation. ABN 654 789 789</small>
      </p>
      <table className="table table-borderless table-sm mb-5">
        <colgroup>
          <col className="td-fixed-10"></col>
          <col></col>
        </colgroup>
        <tbody>
          <tr>
            <th className="small pl-0">Contact name</th>
            <td>RICHARDS, Bob</td>
          </tr>
          <tr>
            <th className="small pl-0">Phone</th>
            <td>(07) 1234 4567)</td>
          </tr>
          <tr>
            <th className="small pl-0">Email</th>
            <td>bob@tafe.edu.au</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default ActivityDetails;
