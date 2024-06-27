import React from 'react'
import { useState } from 'react'
import Pagelayout from './Components/Layout' 
import Home from './Pages/Home'
import { Link } from 'react-router-dom';


function App() {
 

  return (
    <React.StrictMode>
      <Pagelayout>
      <Home/>
      </Pagelayout>
    </React.StrictMode>
  )
}

export default App
