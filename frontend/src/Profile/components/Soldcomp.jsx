import React from 'react'
import SalesChart from './Saleschart'

export default function Soldcomp() {
  return (
    <div>
      <h1 className='text-[30px] mt-5 ml-8 font-semibold'>My Product Sales </h1>

      <div className='w-100% md:h-[70vh] h-[40vh]'>
        <SalesChart />
      </div>
    </div>
  )
}
