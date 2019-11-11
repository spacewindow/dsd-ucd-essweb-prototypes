import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import ActivityDash from "./pages/ActivityDash";

function App() {
  return (
    <Switch>
      <Route path="/" render={props => <ActivityDash {...props} />} />
    </Switch>
  );
}

export default App;
