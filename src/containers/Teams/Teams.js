import React, { useState, useEffect } from "react";
import TeamsList from "../../components/TeamsList/TeamsList";
import { getTeams } from '../../api/Api';

const Teams = () => {
  useEffect(() => {
    getTeams();
  },[])
  return (
    <div>
      <TeamsList />
    </div>
  );
};

export default Teams;
