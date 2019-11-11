import React, { Fragment } from "react";
import ContainerFluid from "../components/ContainerFluid";
import Header from "../components/Header";
import Card from "../components/Card";
import Drawer from "../components/Drawer";

const ActivityDash = props => {
  return (
    <Fragment>
      <Header />
      <ContainerFluid>
        <Card>
          <h1>Heading 1</h1>
        </Card>
      </ContainerFluid>
    </Fragment>
  );
};

export default ActivityDash;
