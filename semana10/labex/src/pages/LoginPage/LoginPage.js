import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import useData from '../../hooks/useData'

function LoginPage () {

    const {data, request} = useData()
    
        const getInfoAdmin = async () => {
            let email = 'astrodev@gmail.com.br', password = '123456'
            const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/hugo-brito-lovelace/login'
            const body = {
                email,
	            password
            }
            const header = {
                header: {
                    ContentType: "application/json"
                }
            }
            const method = 'post'
            request(url, body, header, method)
            console.log(data)
        }
            useEffect(() => getInfoAdmin(), [request])
     
        return (
            <div>
                <input placeholder={'E-mail'}/>
                <input placeholder={'Senha'}/>
                <br/>
                <Link to={'/'}>Voltar</Link>
                <Link to={'AdminHome'} onClick={getInfoAdmin}>Entrar</Link>
            </div>
        )
    
}
 
export default LoginPage 