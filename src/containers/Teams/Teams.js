import React, { useState, useEffect } from "react";
import TeamsList from "../../components/TeamsList/TeamsList";
import { getTeams } from "../../api/Api";

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    setTeams(() => getTeams());
  }, []);

  return (
    <div>
      <TeamsList teams = {teams}/>
    </div>
  );
};

export default Teams;
