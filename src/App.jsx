import { useState } from 'react'
import './App.css'
// import Tabs from './components/Tabs'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import First from './components/First'
import Counters from './components/Counters'
import Registration from './components/Registration'
import StateBasics from './components/StateBasics'
import { Tab } from '@mui/material'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<First/>}/>
      <Route path='/reg' element={<Registration/>}/>
      <Route path='/state' element={<StateBasics/>}/>
      <Route path='/counter' element={<Counters/>}/>
     
    </Routes>
      
    </>
  )
}

export default App
