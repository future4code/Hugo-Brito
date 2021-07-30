import React from 'react';
import axios from 'axios';
// import '/style.css';


export default class App extends React.Component {

  state = {
    missions: [],
    
  }

  componentDidMount() {
    this.getMissions()

  }

  getMissions = () => {

    axios.get('https://api.spacexdata.com/v3/missions')
    .then((res) => {
      console.log(res.data.mission_id)
      this.setState({missions: res.data})

    }).catch((err) => {
      console.log(err)

    })
  }

  render() {
    const missionsList = this.state.missions.map((mission) => {
      return(
        <div key={mission.mission_id}>
          <p>Name: {mission.mission_name}</p>
          <p>Manufacturers: {mission.manufacturers.map((manufacturers) => <p>{manufacturers}</p>)}</p>
          <a href={mission.wikipedia}>Link for wikipedia</a>
          <hr/>
        </div>
      )
      
    } )

    return (
      <div>
        <h1>Space Missions is our duty</h1>
        {missionsList}
      </div>
    )
  }
}

