import React, { useEffect } from 'react'
import CanvasModel from '../canvas'
import Customizer from '../pages/Customizer'
import state from '../store'

const Createpage = () => {
       useEffect(() => {
    state.intro = false
    }, [])
  return (
   <main className="app translate-all ease-in">
   
      <CanvasModel />
      <Customizer />
    </main>  )
}

export default Createpage