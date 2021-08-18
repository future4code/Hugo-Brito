import React from 'react'
import { Link } from 'react-router-dom'

function LisTripPages () {
     
        return (
            <div>
               <p>Lista de viagens</p> 
               <Link to={'/'}>Voltar</Link>
               <Link to={'Application'}>Inscreva-se</Link>
            </div>
        )
    
}
 
export default LisTripPages