import React from 'react';



export default class CreateUsers extends React.Component {

    state = {
        name: '',
        email: '',
      }
    
      handleName = (event) => {
        this.setState({name: event.target.value})
      }
    
      handleEmail = (event) => {
        this.setState({email: event.target.value})
      }

      createRegister = () => {
        const url = ''

        // axios
      }

    
    render() {
        return (
            <div>
                <button onClick={this.props.goToCreatePlayList}>Back</button>
                <h1>Enter to our comunity</h1>

                <input placeHolder={"name"} value={this.state.name} onChange={this.handleName}/>
                <input placeHolder={"email"} value={this.state.email} onChange={this.state.handleEmail}/>
                <button onClick={this.createRegister}>Sign Up</button>
            </div>
        )
    }
}
