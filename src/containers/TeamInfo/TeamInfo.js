import React, { useEffect, useState } from "react";
import { getTeamInfo } from "../../api/Api";
import TeamPage from "../../components/TeamPage/TeamPage";

const TeamInfo = ({ match }) => {
  const teamID = match.params.id;
  const [teamInfo, setTeamInfo] = useState({});

  useEffect(() => {
    getTeamInfo(teamID);
    setTeamInfo(() => getTeamInfo(teamID));
  }, [teamID]);

  return (
    <div>
      <TeamPage teamInfo={teamInfo} />
    </div>
  );
};

export default TeamInfo;
