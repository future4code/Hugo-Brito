import axios from 'axios'
import React from 'react'
import {Container, Img} from './styled'

function MatchesPage(props) {

    const [matches, setMatches] = React.useState([])

    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/hugo-brito-lovelace/matches'

    const getMatches = async () => {
        try {
            const response = await axios.get(url)
            setMatches(response.data.matches)
            console.log(matches)
        } catch (error) { console.error() }
    }

    const renderMatches = matches.map((match) => {
        return (
            <>
                <p>{match.name}</p>
                <Img src={match.photo}></Img>

            </>)
    })

    return (

        <Container>

            <button onClick={props.changePage}>Go Home</button>

            <button onClick={getMatches}>Gotcha</button>
            {renderMatches}

            <h1>MatchesPage</h1>

        </Container>
    )
}

export default MatchesPage