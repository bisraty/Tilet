import React, {useEffect} from 'react'
import Home from '../pages/Home'
import CanvasModel from '../canvas'
import state from '../store'
import Searchpage from '../pages/Searchpage'
import Navbar from '../pages/Navbar'
import Footer from '../pages/Footer'

export default function Homepage() {
  useEffect(() => {
    state.intro = true
  }, [])
  console.log({data: state.intro})
  return (
    <div>
      <div>
        <Navbar />
        <br />
        <main className='app bg-[#E2E2E2]  '>
          <Home />
          <CanvasModel />
        </main>
      </div>

      <Searchpage />
      <Footer />
    </div>
  )
}
