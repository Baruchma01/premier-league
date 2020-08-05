import React, { useState, useEffect } from "react";
import TeamsList from "../../components/TeamsList/TeamsList";
import { getTeams } from "../../api/Api";
import { useHistory } from "react-router-dom";

const Teams = () => {
  let history = new useHistory();

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    setTeams(() => getTeams());
  }, []);

  const rowClickHandler = (id) => {
    history.push(`/teams/${id}`);
  };

  return (
    <div>
      <TeamsList teams={teams} rowClickHandler={(id) => rowClickHandler(id)} />
    </div>
  );
};

export default Teams;
