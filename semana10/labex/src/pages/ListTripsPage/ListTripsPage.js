import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'

function LisTripPages () {

        // const getTripList = async () => {
        //     axios.get()
        // }
     
        return (
            <div>
               <p>Lista de viagens</p> 
               <Link to={'/'}>Voltar</Link>
               <Link to={'Application'}>Inscreva-se</Link>
            </div>
        )
    
}
 
export default LisTripPages