import React from 'react'
import { Link } from 'react-router-dom'

function ApplicationFormPage () {
     
        return (
            <div>
                <p>Inscreva-se para uma viagem</p>
                <Link to={'ListTrip'}>Voltar</Link>
                <button>Enviar</button>
            </div>
        )
    
}
 
export default ApplicationFormPage 