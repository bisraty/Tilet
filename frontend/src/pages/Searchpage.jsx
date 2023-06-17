import React from 'react'
import { Tilt } from "react-tilt";
import { data } from '../constant';
import { motion } from "framer-motion";
import { fadeIn } from '../utils/motion';
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
const Searchpage = () => {
 const navigate=useNavigate()
  return (
      <div className=' my-4 mx-auto'>
            <p
       className="font-[700] text-[30px] lg:text-[44px] mb-[49px] text-center"
      
      >
        Awesome cloths You <br /> Should have
    </p>
  <div className="flex w-[90%] mx-auto lg:w-[50%]">
      <input
        type="text"
        className="w-full  border border-gray-300 px-4 py-1 h-12 rounded-l-md"
        placeholder=" Search ...."
        //  value={search}
        //   onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <button
                //   onClick={handleSearch}

        className="bg-[#000000]  hover:bg-[#000000] text-white px-4 py-1 rounded-r-md"
      >
        Search 
      </button>
          </div>
            <div className="mt-10  flex flex-wrap justify-center gap-10">
        {data?.map((info, index) => (
          <ServiceCard key={index} index={index} navigate={navigate} {...info} />
        ))}
          </div>
      <div className='flex justify-center mt-7'> 
<nav aria-label="Page navigation example ">
  <ul className="inline-flex items-center -space-x-px">
    <li>
      <a href="#" className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span className="sr-only">Previous</span>
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
      </a>
    </li>
    <li>
      <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
    </li>
    <li>
      <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
    </li>
    <li>
      <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
    </li>
    <li>
      <a href="#" className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span className="sr-only">Next</span>
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
      </a>
    </li>
  </ul>
</nav>
</div>   
    </div>
  )
}

export default Searchpage