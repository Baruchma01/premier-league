import teams from './teams.json';

  const getTeams = () => {
      const teamsList = teams.map(({ team_key, team_name, founded, city }) => ({ team_key, team_name, founded, city }));
      return teamsList;
  }

  const getTeamInfo = (id) => {
    const team = teams.find((team) => team.team_key === id);
    return team;
  }
  
  
  export {
    getTeams,
    getTeamInfo
  }