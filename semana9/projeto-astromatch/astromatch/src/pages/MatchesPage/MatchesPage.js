import React from 'react'
import Container from './styled'

function MatchesPage(props) {
    return (

        <Container>

            <button onClick={props.changePage}>Go Home</button>

            <h1>MatchesPage</h1>

           

        </Container>
    )
}

export default MatchesPage