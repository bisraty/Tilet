import React, { useEffect } from 'react'
import Navbar from '../pages/Navbar'
import './components/rotatingCard.css'
import './components/toBuy.css'
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';
import { fadeIn } from '../utils/motion';
import RelatedCards from './components/RelatedCards';

const ServiceCard = ({ index, title, icon, price }) => (
  
    <motion.div
      onClick={() =>
      {
        navigate('/detail', { state: { id: index, title: title,price:price, icon:icon } });
       }}
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full  p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#ECECEC] h-[1.7em] w-[1.3em]  rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
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
);
function Detailpage() {
    const {state} = useLocation();
const { id, title, icon,price} = state;
   
    
    return (
     <div>
         <Navbar />
            <div className='flex flex-auto md:mx-20  justify-between'>
                <div className='w-[40%]'>
                <div className="coin  ">
                    <div className="side heads  ">
                    <ServiceCard id={id} price={price} icon={icon} title={title} />
                    </div>
                    <div className="side tails">
                        <ServiceCard id={id} price={price} icon={icon} title={title} />
                    </div>
                    </div>
                </div>
                <div className='md:w-[50%] w-[90%] flex justify-center '>
                    <div className="modal mt-20">
                        <form className="form">
                          <div className="banner"></div>
                          <label className="title">Only the best for you</label>
                          <p className="description">Discover Urban Adventure: Shop our Stylish Graphic T-Shirt Now! </p>
                          <div className="mx-auto">
                          {/* <img
                                src={icon}
                                alt="web-development"
                                className="w-[200px] h-[20vh] object-cover rounded-20"
                              /> */}
                          </div>

                          <div className="benefits">
                            <span>What we offer</span>
                            <ul>
                              <li>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="16" width="16">
                                  <rect fill="black" rx="8" height="16" width="16"></rect>
                                  <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="white" d="M5 8.5L7.5 10.5L11 6"></path>
                                </svg>
                                <span>Made from premium 100% cotton fabric</span>
                              </li>
                              <li>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="16" width="16">
                                  <rect fill="black" rx="8" height="16" width="16"></rect>
                                  <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="white" d="M5 8.5L7.5 10.5L11 6"></path>
                                </svg>
                                <span> t-shirt ensures a soft and breathable feel against your skin, keeping you comfortable all day long. </span>
                              </li>
                                                      </ul>
                                                  
                          </div>
                          <div className="benefits">
                            <span>                                    Customer Reviews:
                      </span>
                            <ul>
                              <li>
                              
                                <span>⭐⭐⭐⭐⭐ "Love the design! It's my go-to t-shirt for casual outings."</span>
                              </li>
                              <li>
                                
                                <span> ⭐⭐⭐⭐ "The fabric feels great, and the print is fantastic. Highly recommend!"
                      </span>
                                                          </li>
                                                          <li>
                                
                                <span>⭐⭐⭐⭐ "Super comfortable and fits perfectly. Will definitely buy more!"

                      </span>
                              </li>
                                                      </ul>
                                                    
                          </div>
                          <div className="modal--footer ">
                                                      <label className="price"><sup>$</sup>{ price}<sub></sub></label>
                            <button className="upgrade-btn">Buy Now</button>
                          </div>
                        </form>
                    </div>
                </div>
            </div>
        <div className='md:mx-20'>
          <RelatedCards />

            </div>
          <br/>
        </div>
  )
}

export default Detailpage