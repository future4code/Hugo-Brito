import react from 'react';
import { StyledComponent } from 'styled-components';
import axios from 'axios';
import React from 'react';
import { render } from '@testing-library/react';



const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

 const headers = {
     headers: {
     Authorization: 'hugo-brito-lovelace'
    }
}

export default class app extends React.Component {

  state= {

    name: '',
    inputEmail: ''

  }

  componentDidMount() {

    this.pegarEmail()

  }

  changeInputEmail = (event) => {

    this.setState({ inputEmailt: event.target.value })

  }

  catchEmail = () => { 
    
    axios
    .get(url, headers)
    .then((res) => {

      this.setState({ email: res.data.result.list })

    })

    .catch((err) => {

      alert(err.response.data)

    })

    createEmail = () => {

      const body = {

        name: this.state.name,
        email: this.state.inputEmail

      }

      axios
        .post(url, body, headers)
        .then((res) => {

          alert('User adicioned succesfuly')
          this.tetState({ inputEmail: ''})
          this.catchEmail()
        })

      .catch((err) => {

        alert(err.response.data.message)

      })
          
    }
  }

}

render() {

  const componentsEmail = this.email.map((doit) => {

  return <li key={doit.id}>{doit.name}</li> })



    return (

        <div>

        <h1>Labenusers</h1>

        <input

        value={this.state.inputEmail}
        onChange={this.changeInputEmail}
      
        />

        <button onclick={this.createEmail}>Send</button>

      {componentsEmail}

      </div>
    )
  } 



