import React, { useState } from 'react'
import Navbar from '../pages/Navbar'

function Profile() {
  const [index, setIndex] = useState(0)
  return (
      <div className='bg-[#E2E2E2] min-h-[100vh]'>
      <Navbar />
     
       
        <div className='w-full flex  py-20 px-40 md:flex-row flex-col  justify-between'>
        <div className='h-[45vh] w-[25%] bg-white rounded-md shadow-md '>
           <div className=" rounded-full bg-gray-400 h-[15vh] w-[15vh] mt-2 mx-auto " >
                    <img src ={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQduQaw52XvsA9qaIF5DwgFcM-18n8ilqYBiTkXn5a_yWKrrxWk"} className=" rounded-full border-black " />
          </div>
          <div className='h-[1px] mx-auto w-[90%] mt-2 bg-gray-400' />
          <div className='flex flex-col  items-center'>
            <button className={`w-[90%] mt-4 h-8 font-bold rounded-md ${index===0?'bg-black text-white':'bg-slate-500 text-black'} `}>
            Profile
            </button>
                
            <button className={`w-[90%] mt-2 h-8 font-bold rounded-md ${index === 1 ? 'bg-black text-white' : 'bg-gray-100 text-black'} `}>
              Posted
            </button>
             <button className={`w-[90%] mt-2 h-8 font-bold rounded-md ${index === 2 ? 'bg-black text-white' : 'bg-gray-100 text-black'} `}>
              Sold
            </button>
          </div>
          
          
          </div>
        <div className='w-[70%] bg-white rounded-md shadow-md'>
          
          </div>
              </div>
    </div>
  )
}

export default Profile