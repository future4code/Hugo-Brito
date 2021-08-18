import React from 'react'
import {Link} from 'react-router-dom'

function LoginPage () {
     
        return (
            <div>
                <input placeholder={'E-mail'}/>
                <input placeholder={'Senha'}/>
                <br/>
                <Link to={'/'}>Voltar</Link>
                <Link to={'AdminHome'}>Entrar</Link>
            </div>
        )
    
}
 
export default LoginPage 