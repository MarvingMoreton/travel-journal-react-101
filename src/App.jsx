import { useState } from 'react'
import reactLogo from '../public/assets/react.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Trip from './components/Trip.jsx'
import data from './data'

function App() {
  const tripElements = data.map(element => {
    return (
      <Trip
      key={element.id}
      element={element}
      />
    )
  })

  return (
    <div className='App'>
        <Navbar />
        {tripElements}
    </div>
  )
}

export default App
