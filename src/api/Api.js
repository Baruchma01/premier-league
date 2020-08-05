import teams from './teams.json';

  const getTeams = () => {
      const teamsList = teams.map(({ team_key, team_name, founded, city }) => ({ team_key, team_name, founded, city }));
      return teamsList;
  }

  const getPlayers = (id) => {
    const players = teams.filter((team) => Number(team.team_key) === id).map(({players}) => ({players}));
    return players;
  }
  
  
  export {
    getTeams,
    getPlayers
  }