import { useState } from 'react'
import './App.scss'
import Home from './Pages/Home'
import { DataProvider } from './Contexts/Data'

function App() {

  return (

    <>
      <DataProvider>
        <Home />
      </DataProvider>
    </>
  )
}

export default App
