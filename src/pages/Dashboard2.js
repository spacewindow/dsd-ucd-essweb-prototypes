import React, { Fragment, useState, useEffect } from "react";
import ContainerFluid from "../components/ContainerFluid";
import DashboardWidget from "../components/DashboardWidget";
import Header from "../components/Header";
import { dashPOC } from "../helpers/helpers";
const widgets = require("../data/widgets.json");

const dtrum = window.dtrum;

console.log("Dynatrace loaded", dtrum);

const Dashboard = props => {
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    console.log("jQuery!", window.$);

    // page loaded
    dtrum.identifyUser("User2");
    var pageLoad = dtrum.enterAction(
      "Dash Page load",
      "load",
      null,
      null,
      "ESSWeb Dashboard"
    );
    window.onbeforeunload = function(event) {
      dtrum.leaveAction(pageLoad);
      dtrum.endSession();
    };

    dashPOC();
  }, []);

  const testClick = () => {
    setShowDrawer(!showDrawer);
    var action = dtrum.enterAction("Drawer Click", "click");
    dtrum.leaveAction(action);
  };

  return (
    <Fragment>
      <Header />
      <ContainerFluid>
        <div className="row">
          {widgets.map((widgetName, index) => {
            if (index < 9) {
              return (
                <DashboardWidget
                  key={"widget-" + index}
                  dataZu={widgetName}
                  onClick={testClick}
                ></DashboardWidget>
              );
            } else {
              return null;
            }
          })}
        </div>
      </ContainerFluid>
    </Fragment>
  );
};

export default Dashboard;
