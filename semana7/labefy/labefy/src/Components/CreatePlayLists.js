import React from 'react';
// import Axios from 'axios';
// import Styled from 'styled-components';


export default class App extends React.Component {
  
  // post = url('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists')

  state = {
    createPlayList: [],
  }

  handlecreatePlaylist = (event) => {
    this.setState({createPlayList: event.target.value})
  }

  // signIntPlayList = () => {
  //   const url = 

  // }


  render() {
    return (
      <div>
        <button onClick={this.props.goToCreateUsers}>Back</button>
        <h1>Create your playlist and volume up!</h1>
      </div>
    )
  }
}

