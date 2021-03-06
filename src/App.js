import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Dashboard2 from "./pages/Dashboard2";
import ActivityDash from "./pages/ActivityDash";
import Participants from "./components/Participants";
import JSCI from "./pages/JSCI";
import "./css/styles.css";

function App() {
  return (
    <Switch>
      <Route path="/dash1" render={props => <Dashboard {...props} />} />
      <Route path="/dash2" render={props => <Dashboard2 {...props} />} />
      <Route path="/jsci" render={props => <JSCI {...props} />} />
      <Route path="/activity" render={props => <ActivityDash {...props} />} />
      <Route
        path="/participants"
        render={props => <Participants {...props} />}
      />
      <Route path="/" render={props => <ActivityDash {...props} />} />
    </Switch>
  );
}

export default App;
