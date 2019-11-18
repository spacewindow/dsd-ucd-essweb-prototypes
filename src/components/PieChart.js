import React, { Fragment } from "react";
import Highcharts from "highcharts";
import "../theme/myTheme.css";
import { loadTheme, getTheme } from "@uifabric/styling";
import { Text } from "office-ui-fabric-react";
const tinycolor = require("tinycolor2");
// import {
//   ColorClassNames,
//   FontClassNames
// } from '@uifabric/styling';

loadTheme(require("../theme/myTheme.json"));
const myTheme = getTheme();

require("highcharts/modules/annotations")(Highcharts);
require("highcharts/modules/pattern-fill")(Highcharts);

const randMinMax = (Math.randMinMax = function(min, max, round) {
  var val = min + Math.random() * (max - min);
  if (round) val = Math.round(val);
  return val;
});

class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "Progress",
          animation: false,
          data: [
            {
              name: "Complete",
              y: props.complete,
              color: props.color
            },
            {
              name: "Scheduled",
              y: props.scheduled,
              // color: props.color,
              color: {
                pattern: {
                  color: props.color,
                  path: {
                    d: "M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11",
                    strokeWidth: 2
                  },
                  width: 10,
                  height: 10,
                  opacity: 0.5
                }
              }
            },
            {
              name: "Required",
              y: props.required,
              color: myTheme.palette.neutralLight
            }
          ]
        }
      ]
    };
  }

  randKey = randMinMax(1000, 9999, 0);

  highChartsRender() {
    Highcharts.chart({
      chart: {
        type: "pie",
        renderTo: "chart-" + this.randKey,
        animation: false
      },
      title: {
        verticalAlign: "bottom",
        text: this.props.title,
        y: 5,
        margin: 50,
        style: {
          fontSize: myTheme.fonts.medium.fontSize,
          color: this.props.color
        }
      },
      annotations: [
        {
          // labels: [
          //   {
          //     point: {
          //       x: 0,
          //       y: 0
          //     },
          //     text: "Label"
          //   }
          // ]
        }
      ],
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: false,
            format: "{point.name}: {point.percentage:.1f} %"
          },
          showInLegend: this.props.legend,
          tooltip: {
            enabled: true
          },
          size: 120,
          innerSize: "70%",
          borderWidth: "1px",
          borderColor: tinycolor(this.props.color)
            .setAlpha(0.2)
            .toRgbString()
        }
      },
      series: this.state.series
    });
  }

  containerStyle = {
    position: "relative",
    width: "180px",
    height: "180px",
    font: myTheme.fonts.large
  };

  overlayStyle = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    font: myTheme.fonts.large,
    pointerEvents: "none"
    // color: this.props.color
  };

  componentDidMount() {
    this.highChartsRender();
  }

  render() {
    return (
      <div className="chartContainer" style={this.containerStyle}>
        <div id={"chart-" + this.randKey} style={this.overlayStyle}></div>
        <div id="title" style={this.overlayStyle}>
          <Text variant="large">{this.props.complete}%</Text>
          <Text variant="tiny">complete</Text>
        </div>
      </div>
    );
  }
}

export default PieChart;
