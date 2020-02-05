import React from "react";
import Icon from "@mdi/react";
import { mdiPowerPlug, mdiPowerPlugOff } from "@mdi/js";

import Card from "../../../lib/components/Card";
import CardImage from "../../../lib/components/CardImage";
import CardContent from "../../../lib/components/CardContent";
import CardaMediaContent from "../../../lib/components/CardMediaContent";
import CardFooter from "../../../lib/components/CardFooter";
import CardFooterItem from "../../../lib/components/CardFooterItem";

const PowerOn = () => (
  <span class="icon is-large">
    <Icon path={mdiPowerPlug} size={3} />
  </span>
);
const PowerOff = () => (
  <span class="icon is-large">
    <Icon path={mdiPowerPlugOff} size={3} />
  </span>
);
const RobotSearchCard = ({
  robotId,
  active,
  name,
  username,
  department,
  jobTitle,
  onActivate,
  retired,
  onDeactivate
}) => (
  <Card style={{ margin: "1rem" }}>
    <CardImage src={`https://robohash.org/${robotId}?size=1280x960`} />
    <CardContent>
      <CardaMediaContent renderMediaLeft={active ? PowerOn : PowerOff}>
        <p className="title is-4">
          {name} {retired ? " : [retired]" : ""}
        </p>
        <p className="subtitle is-6">@{username}</p>
      </CardaMediaContent>
      {department} - {jobTitle}
    </CardContent>
    <CardFooter>
      <CardFooterItem>
        <button
          className="button is-fullwidth is-success"
          disabled={active}
          onClick={onActivate}
        >
          Activate
        </button>
      </CardFooterItem>
      <CardFooterItem>
        <button
          className="button is-fullwidth is-warning"
          disabled={!active}
          onClick={onDeactivate}
        >
          Deactivate
        </button>
      </CardFooterItem>
    </CardFooter>
  </Card>
);

RobotSearchCard.displayName = "RobotSearchCard";
export default RobotSearchCard;
