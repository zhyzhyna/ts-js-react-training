/*
Sample Robot Data:

{
  id: 1,
  name: "Leanne Grahamss",
  username: "Bret",
  email: "Sincere@april.biz",
  jobTitleId: 1,
  active: true,
  retired: false
  },
*/
const buildRobots = (robotParts, departments, jobTitles) => {
  return robotParts
    .map(robot => {
      // implement jobTitles.find to return
      // the jobTitle for a robot
      // if you can't find the job title,
      // have the job title text say UNKNOWN
      // each robot will have a robot.jobTitleId
      let jobTitle = jobTitles.find(title => {
        console.log(title, robot);
        console.log(robot.jobTitleId === title.Id);

        return robot.jobTitleId === title.Id;
      });
      console.log(jobTitle);
      let jobTitleText = jobTitle === undefined ? "UNKNOWN" : jobTitle.text;
      return {
        ...robot,
        jobTitle: jobTitleText
      };
    })
    .filter(robot => {
      // implement find so that only robots that
      // are not retired are returned
      return robot.retired === false;
    });
};

export { buildRobots };
