const robotReducer = (state, action) => {
  switch (action.type) {
    case "ACTIVATE":
      return state.map(robot =>
        robot.id !== action.id ? robot : { ...robot, active: true }
      );
    case "DEACTIVATE":
      return state.map(robot =>
        robot.id !== action.id ? robot : { ...robot, active: false }
      );
    default:
      return state;
  }
};

export { robotReducer };
