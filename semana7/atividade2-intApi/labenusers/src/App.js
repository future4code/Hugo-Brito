import axios from 'axios';
import React from 'react';
import { render } from '@testing-library/react';
import CreateUser from './components/CreateUser/CreateUser';
import ListUser from './components/ListUser/ListUser';
import styled from 'styled-components';


const AppStyle = styled.div`

  background-color: lightblue;
  height: 100vh;
  

` 


export default class App extends React.Component {

  state = {
    
    userRegister: [],
    frontPage: true
  }

    changePage = () => {

      this.setState({frontPage: !this.state.frontPage})
    }


  render() {
    return (

      <AppStyle>

        <h1>Labenusers</h1>
      
        {this.state.frontPage ? <CreateUser/> : <ListUser/>}
        <br/>
        <button onClick={this.changePage}>{this.state.frontPage ? 'Return List Users' : 'Return Register User'}</button>

       </AppStyle>
    )
  }

}

