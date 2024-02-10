import React from 'react'
import { Link } from 'react-router-dom'

export default function Navabr() {
  return (
   <>
   <div className="nav">
    <div className="nav-headline">  
    <Link to="/">Food Mania</Link>
    </div>
    <div className="nav-menu">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </div>
    
   </div>
   </>
  )
}
