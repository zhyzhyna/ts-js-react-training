import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import "bulma/css/bulma.css";

import SiteHeader from "./lib/components/SiteHeader";
import Container from "./lib/components/Container";

import RobotSearch from "./features/robots/robot-search/RobotSearch";

function App() {
  return (
    <>
      <SiteHeader />
      <Container>
        <Router>
          <RobotSearch path="/" />
        </Router>
      </Container>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
