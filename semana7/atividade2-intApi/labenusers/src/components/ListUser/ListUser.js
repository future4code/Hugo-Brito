import React from 'react'
import axios from 'axios'


const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

const headers = {
    headers: {
        Authorization: 'hugo-brito-lovelace'
    }
}



export default class ListUser extends React.Component {

    state = {

        receiveUser: [],
    }

    componentDidMount = () => {

       this.getListUser() 
    }

    getListUser = () => {

        axios
        .get(url, headers)
        .then((res) => {
            this.setState({receiveUser: res.data})
        })
    }

    deleteUser = (id) => {

        const newUrl = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        
        axios
        .delete(newUrl, headers)
        .then((res) => {
            this.getListUser()
            alert('deleted user')
        })

    }

    render() {

        const showList = this.state.receiveUser.map((item) => {
            return (
                <li>
                {item.name}
                <button onClick={() => this.deleteUser(item.id)}>X</button>
                </li>
            )
        })
        
        return (

            <div>
            <h2>List Users</h2>
                {showList}
            </div>
        )
    }
}



