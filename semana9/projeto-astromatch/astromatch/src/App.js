import React, { useState, useEffect } from 'react'
import HomePage from './pages/HomePage/HomePage'
import MatchesPage from './pages/MatchesPage/MatchesPage'
import axios from 'axios'
import { ProfileImage } from './pages/HomePage/styled'



function App() {

  const [telaAtual, setTelaAtual] = useState('Home')


  const chooseScreen = () => {

    switch (telaAtual) {
      case 'Home':
        return <HomePage changePage={selectScreen} profile={profile} getProfile={getProfile}  />
      case 'Matches':
        return <MatchesPage changePage = {selectSecondScreen} />
      default:
        return <HomePage changePage = {selectScreen} />
    }
  }

  const selectScreen = () => {
    setTelaAtual('Matches')
  }

  const selectSecondScreen = () => {
    setTelaAtual('Home')
  }
  
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

  return (

    <div>
      <h1>Astromatch</h1>

      {chooseScreen()}
      

    </div>

  )
}
export default App