import React, { useEffect } from "react";
import Card from "./Card";
const dtrum = window.dtrum;

const DashboardWidget = props => {
  const name = props.dataZu.split("/").pop();
  useEffect(() => {
    if(dtrum){
      // page loaded
      var widgetLoad = dtrum.enterAction(
        "Widget loaded - " + name,
        "load",
        null,
        "ESS Dashboard"
      );
      dtrum.leaveAction(widgetLoad);
    }
    }, []);

  return (
    <div data-zu={props.dataZu} className="col-4 widget">
      <Card
        style={{
          height: "14rem",
          overflowWrap: "break-word",
          cursor: "pointer"
        }}
      >
        <p>{name}</p>
      </Card>
    </div>
  );
};

export default DashboardWidget;
