import React from 'react'
import Navabar from './components/Navabar'
import About from './components/About'
import { BrowserRouter as Main,Routes,Route } from 'react-router-dom'
import Contact from './components/Contact'
import Home from './components/Home'
export default function App() {
  return (
    <>
    <Main>
    <Navabar/>
    <Routes>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/contact' element={ <Contact/>}/>
    </Routes>
    <Home/>
    
    </Main>
    </>
  )
}
