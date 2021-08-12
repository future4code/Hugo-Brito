import React, { useState, useEffect } from 'react'
import HomePage from './pages/HomePage/HomePage'
import MatchesPage from './pages/MatchesPage/MatchesPage'



function App() {

  const [telaAtual, setTelaAtual] = useState('Home')


  const chooseScreen = () => {

    switch (telaAtual) {
      case 'Home':
        return <HomePage changePage = {selectScreen} />
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

  return (

    <div>
      <h1>Astromatch</h1>

      {chooseScreen()}

    </div>

  )
}
export default App