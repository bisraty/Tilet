import React, {useState} from 'react'
import Navbar from '../pages/Navbar'
import ProfileForms from './components/ProfileForms'

export default function Profile() {
  const [index, setIndex] = useState(0)
  return (
    <div className='bg-[#E2E2E2] min-h-[100vh] '>
      <Navbar />
      <div className='md:mx-20  mb-10 '>
        <div className='w-full flex  pt-20  md:flex-row flex-col  justify-between'>
          <div className='h-[45vh] md:w-[25%] lg:w-[25%] w-[80%] bg-white rounded-md shadow-md '>
            <div className=' rounded-full bg-black h-[14.8vh] w-[14.8vh] mt-2 mx-auto flex items-center justify-center '>
              <img
                src={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQduQaw52XvsA9qaIF5DwgFcM-18n8ilqYBiTkXn5a_yWKrrxWk'
                }
                className=' rounded-full border-black h-[14.5vh] w-[14.5vh] '
              />
            </div>
            <div className='h-[1px] mx-auto w-[90%] mt-2 bg-gray-400' />
            <div className='flex flex-col  items-center'>
              <button
                onClick={() => {
                  setIndex(0)
                }}
                className={`w-[90%] mt-4 h-8 font-bold rounded-md ${
                  index === 0 ? 'bg-black text-white' : 'bg-gray-100 text-black'
                } `}
              >
                Profile
              </button>

              <button
                onClick={() => {
                  setIndex(1)
                }}
                className={`w-[90%] mt-2 h-8 font-bold rounded-md ${
                  index === 1 ? 'bg-black text-white' : 'bg-gray-100 text-black'
                } `}
              >
                Posted
              </button>
              <button
                onClick={() => {
                  setIndex(2)
                }}
                className={`w-[90%] mt-2 h-8 font-bold rounded-md ${
                  index === 2 ? 'bg-black text-white' : 'bg-gray-100 text-black'
                } `}
              >
                Sold
              </button>
            </div>
          </div>
          <div className='md:w-[70%] w-[100%] bg-white rounded-md shadow-md'>
            {index === 0 && <ProfileForms />}
          </div>
        </div>
      </div>
    </div>
  )
}
