import teams from './teams.json';

// const search = (searchkey) => {
//     console.log('Search Data : ', searchkey);
//     const videos = videosData.filter((item) => item.name.toLowerCase().includes(searchkey.toLowerCase()));
//     console.log('videos', videos);
//     return videos
//   }

  const getTeams = () => {
      let teams = []
      teams.map((item => {
          teams = [{
              name: item.name
          }]
      }))
      console.log(teams);
  }
  
  
  export {
    getTeams
  }