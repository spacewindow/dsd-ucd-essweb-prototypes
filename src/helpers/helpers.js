const Papa = require("papaparse");

export const capitalCase = string => {
  return string.replace(/(?:^|\s)\S/g, function(a) {
    return a.toUpperCase();
  });
};

export const csvToJson = (csvFilePath, setState) => {
  Papa.parse(csvFilePath, {
    download: true,
    header: true, // will format it as an object now :)
    complete: function(results) {
      let rows = results.data;
      let columns = Object.keys(rows[0]).map(name => {
        return {
          field: name,
          label: capitalCase(name),
          sort: "asc"
        };
      });
      console.log(rows);
      setState({
        columns: columns,
        rows: rows
      });
    }
  });
};

// dashPOC: make sure dependencies below are defined in React component to execute dashPOC function there

const $ = window.jQuery;
const dtrum = window.dtrum;
const widgets = require("../data/widgets");

//

export const dashPOC = () => {
  widgets.map(dataZuValue => {
    const name = dataZuValue.split("/").pop();
    $("[data-zu='" + dataZuValue + "']").click(function() {
      var action = dtrum.enterAction(
        "Widget Click - " + name,
        "click",
        null,
        null,
        "ESSWeb Dashboard"
      );
      dtrum.leaveAction(action);
    });
  });
};
