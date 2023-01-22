import { useState } from 'react'
import Game from './components/Game'
import './styles.css'

function App() {

  return (
    <div className="App">
      <Game rows={20} columns={10} />
    </div>
  )
}

export default App
