import React from 'react'
import {Link} from 'react-router-dom'


function HomePage() {

    return (

        <div>
            <p>labeX</p>
            <Link to={'ListTrip'}>Lista de viagens</Link>
            <Link to={'LoginPage'}>Administrador</Link>
        </div>
    )

}

export default HomePage