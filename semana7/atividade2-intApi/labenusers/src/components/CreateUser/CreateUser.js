import React from 'react';
import axios from 'axios';
import { Container } from './style';


const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

const headers = {
    headers: {
        Authorization: 'hugo-brito-lovelace'
    }
}


export default class CreateUser extends React.Component {

    state = {
        name: '',
        inputEmail: '',
    }

    changeInputEmail = (event) => {
        this.setState({ inputEmail: event.target.value })
    }

    changeUser = (event) => {
        this.setState({ name: event.target.value })
    }

    createUser = () => {

        const body = {

            'name': this.state.name,
            'email': this.state.inputEmail
        }
        axios
            .post(url, body, headers)
            .then((res) => {

                this.setState({ name: '', inputEmail: '' })
                alert('User adicioned succesfuly')

            })
            .catch(() => {
                alert('Warning')
            })
    }

    render() {
        return (
            <Container>

                <div>
                    <input
                        value={this.state.name}
                        onChange={this.changeUser}
                        type='text'
                    />
                    <input
                        value={this.state.inputEmail}
                        onChange={this.changeInputEmail}
                        type='email'
                    />
                    <br/>

                    <br/>
                    <div>
                    <button onClick={this.createUser}>Sign Up</button>
                    </div>
                </div>

            </Container>
        )
    }
}
