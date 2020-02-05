import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";

import Container from "./lib/components/Container";
import Column from "./lib/components/Column";
import Columns from "./lib/components/Columns";
import RobotSearchCard from "./features/robots/components/RobotSearchCard";

import { DEPARTMENTS, JOB_TITLES, INITIAL_ROBOTS } from "./data";
import { robotReducer } from "./robot-reducer";
import { buildRobots } from "./robot-factory";

function App() {
  let [robotParts, robotDispatch] = useReducer(robotReducer, INITIAL_ROBOTS);

  let robots = buildRobots(robotParts, DEPARTMENTS, JOB_TITLES);
  return (
    <>
      <Container>
        <Columns>
          <Column size={1 / 3}>
            {robots.map(robot => {
              return (
                <RobotSearchCard
                  robotId={robot.id}
                  active={robot.active}
                  username={robot.username}
                  department={robot.department}
                  jobTitle={robot.jobTitle}
                  name={robot.name}
                  retired={robot.retired}
                  onActivate={() => {
                    robotDispatch({ type: "ACTIVATE", id: robot.id });
                  }}
                  onDeactivate={() =>
                    robotDispatch({ type: "DEACTIVATE", id: robot.id })
                  }
                />
              );
            })}
          </Column>
        </Columns>
      </Container>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
