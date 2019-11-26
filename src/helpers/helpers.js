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
