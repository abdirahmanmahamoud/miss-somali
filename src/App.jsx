import { useState } from 'react'
import Competitors from './components/competitors/Competitors'
import Header from './components/header/Header'
import VoteModal from './components/modal/VoteModal'
import Timer from './components/timer/timer'

function App() {

  return (
    <div className="App">
      <Header/>
      <Timer/>
      <Competitors/>
      <VoteModal/>
    </div>
  )
}

export default App
