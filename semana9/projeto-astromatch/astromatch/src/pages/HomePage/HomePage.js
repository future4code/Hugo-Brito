import React, { useState, useEffect } from 'react'
import {Container} from './styled.js'
import {ProfileImage} from './styled.js'
import axios from 'axios'


function HomePage(props) {

    const [profile, setProfile] = useState({})

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/hugo-brito-lovelace/person"

    useEffect(() => { getProfile() }, [])

    const getProfile = () => {
        axios.get(url)
            
            .then((res) => {
                setProfile(res.data.profile)
                console.log(res.data.profile)
            })
            .catch((err) => { console.log(err.response) })
    }

    const [person, setPerson] = useState({})

    const choosePerson = () => {
        axios.get()
    }

    return (
        <Container>

            <button onClick={props.changePage}>Go Match</button>
            <h1>Let's the game begin</h1>

            <ProfileImage src={profile.photo}/>

            <h2>{profile.name}, {profile.age}</h2>
            <p>{profile.bio}</p>

            <div>
                <button onClick={choosePerson}>Yess</button>
                <button onClick={choosePerson}>Nooo</button>
            </div>

        </Container>
    )
}

export default HomePage