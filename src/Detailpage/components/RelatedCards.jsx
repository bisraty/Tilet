import React from 'react'
import { Tilt } from "react-tilt";
import { data } from '../../constant/index';
import { motion } from "framer-motion";
import { fadeIn } from '../../utils/motion';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ index, title, icon, price,navigate }) => (
  
  <Tilt className="w-[250px] " >
    <motion.div
      onClick={() =>
      {
        navigate('/detail', { state: { id: index, title: title,price:price, icon:icon } });
       }}
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#ECECEC]  rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-[250px] h-[30vh] object-cover rounded-20"
        />

        <h3 className="text-black text-[16px] font-bold text-center">
          {title}
                </h3>
                 <h3 className="text-black text-[16px]  text-center">
        price:  {price}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
function RelatedCards() {
    const navigate=useNavigate()
  return (
      <div>
          <h1 className='text-[30px] ml-8'>
              Related
          </h1>
          
          
            <div className="mt-10  flex flex-wrap justify-center gap-10">
        {data?.map((info, index) => (
          <ServiceCard key={index} index={index} navigate={navigate} {...info} />
        ))}
          </div>
    </div>
  )
}

export default RelatedCards