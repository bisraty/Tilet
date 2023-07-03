import React from 'react'
import {Tilt} from 'react-tilt'
import {data} from '../../constant/index'
import {motion} from 'framer-motion'
import {fadeIn} from '../../utils/motion'
import {useNavigate} from 'react-router-dom'
import {AiFillDelete} from 'react-icons/ai'
const ServiceCard = ({index, title, icon, price, navigate}) => (
  <Tilt className='w-[30vh]  '>
    <motion.div
      onClick={() => {
        navigate('/detail', {state: {id: index, title: title, price: price, icon: icon}})
      }}
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className='w-full  green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#ECECEC] w-full  rounded-[20px] py-5  min-h-[30vh] flex justify-evenly items-center flex-col'
      >
        <AiFillDelete className={'self-end mr-3'} />{' '}
        <div className='px-10'>
          <img
            src={icon}
            alt='web-development'
            className='w-[30vh] h-[20vh] object-cover rounded-20'
          />
          <h3 className='text-black text-[13px] font-bold text-center'>{title}</h3>
          <h3 className='text-black text-[13px]  text-center'>price: {price}</h3>
        </div>
      </div>
    </motion.div>
  </Tilt>
)
function Postedcomp() {
  const navigate = useNavigate()
  return (
    <div className='md:h-[87vh] md:overflow-y-auto'>
      <h1 className='text-[30px] mt-5 ml-8 font-semibold'>My Post</h1>

      <div className='mt-4  mb-10 mx-5 flex flex-wrap justify-center gap-10'>
        {data?.map((info, index) => (
          <ServiceCard key={index} index={index} navigate={navigate} {...info} />
        ))}
      </div>
    </div>
  )
}

export default Postedcomp
