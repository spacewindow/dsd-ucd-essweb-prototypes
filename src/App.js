import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import ActivityDash from "./pages/ActivityDash";
import Participants from "./components/Participants";
import "./css/styles.css";

function App() {
  return (
    <Switch>
      <Route path="/" render={props => <ActivityDash {...props} />} />
      {/* <Route path="/" render={props => <Participants {...props} />} /> */}
    </Switch>
  );
}

export default App;
