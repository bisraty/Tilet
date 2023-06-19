import React, { useEffect } from 'react'
import Home from '../pages/Home'
import CanvasModel from '../canvas'
import state from '../store'
import Searchpage from '../pages/Searchpage'
import Navbar from '../pages/Navbar'

export default function Homepage() {
 
    
    return (
      <div>
        <div >
          <Navbar />
          <br/>
        <main className="app bg-[#E2E2E2]  ">
          <Home />
        <CanvasModel />     
            </main>
        </div>
       
            <Searchpage />
      </div>
   
  )
}
