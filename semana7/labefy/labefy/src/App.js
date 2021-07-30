import React from 'react';
// import Axios from 'axios';
// import Styled from 'styled-components';
import CreateUsers from './Components/CreateUsers';
import CreatePlayLists from './Components/CreatePlayLists';

export default class App extends React.Component {
 
  state = {
    getIn: 'Get In',
  }

  selectScreen = () => {
    switch (this.state.getIn){
      case 'Get In':
        return <CreateUsers  goToCreatePlayList={this.goToCreatePlayList}/>
      case 'Create Track List':
        return <CreatePlayLists goToCreateUsers={this.goToCreateUsers}/>
      default:
        return <div>Houston i have a problem...</div>

    }
  }

  goToCreateUsers = () => {
    this.setState({getIn: 'Get In'})

  }

  goToCreatePlayList = () => {
    this.setState({getIn: 'Create Track List'})

  }

  render() {
    return (
      <div>
        {/* <h1>Labefy</h1> */}

        {this.selectScreen()}
      </div>
    )
  }
}

