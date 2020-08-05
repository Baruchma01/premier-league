import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Teams from './containers/Teams/Teams';
import TeamInfo from './containers/TeamInfo/TeamInfo';
import "./App.css";


function App() {
  return (
    <Router>
      <>
      <Route exact path="/" component={Teams} />
      <Route exact path="/teams/:id" component={TeamInfo} />
      </>
    </Router>
  );
}

export default App;
