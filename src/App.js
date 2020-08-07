import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Teams from './containers/Teams/Teams';
import TeamInfo from './containers/TeamInfo/TeamInfo';
import Header from '../src/components/Layout/Header/Header';
import Footer from '../src/components/Layout/Footer/Footer';
import "./App.css";


function App() {
  return (
    <>
    <Header />
    <Router>
      <Route exact path="/" component={Teams} />
      <Route exact path="/teams/:id" component={TeamInfo} />
    </Router>
    <Footer />  
    </>
  );
}

export default App;
