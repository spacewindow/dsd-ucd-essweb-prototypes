import React, { Fragment } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// const tinycolor = require("tinycolor2");

// require("highcharts/modules/annotations")(Highcharts);
// require("highcharts/modules/pattern-fill")(Highcharts);

const options = {
  // title: {
  //   text: "My chart"
  // },
  chart: {
    type: "column",
    height: "80px",
    events: {
      load: function() {
        Highcharts.each(this.series[0].points, function(p) {
          if (p.y < 5) {
            p.update({
              color: "red"
            });
          }
        });
      }
    }
  },
  title: {
    text: null
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    },
    gridLineWidth: 0
  },
  credits: {
    enabled: false
  },
  xAxis: {
    title: {
      enabled: false
    },
    tickWidth: 0,
    maxPadding: 0,
    minPadding: 0,
    labels: {
      enabled: false
    },
    categories: [
      "1/1",
      "3/1",
      "5/1",
      "9/1",
      "11/1",
      "13/1",
      "15/1",
      "17/1",
      "19/1",
      "21/1",
      "23/1",
      "25/1",
      "29/1",
      "1/2",
      "3/2",
      "7/2",
      "9/2",
      "11/2",
      "15/2",
      "17/2"
    ]
  },
  legend: {
    enabled: false
  },
  series: [
    {
      name: "Attendance",
      data: [1, 2, 3, 8, 7, 5, 6, 8, 1, 5, 6, 7, 4, 3, 0, 0, 0, 0, 0, 0]
    }
  ]
};

const BarChart = props => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default BarChart;
