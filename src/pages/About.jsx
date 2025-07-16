import React from 'react'
import { motion } from "framer-motion";
import CTA from "../components/CTA"
import More from '../components/More';

export default function About() {
    return (
      <>
    <section className=' bg-[#FFF9EC] py-28 tracking-lighter overflow-hidden  mb-28'>
          <div className='max-w-7xl mx-auto  relative'>
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mt-10 text-center"
        >
         
          <p className="text-center px-4 py-2  text-sm  py-1 bg-white  rounded-full">
            {" "}
          About Us
              </p>
              
              <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl  tracking-tighter font-semibold text-[#510453] mb-6 mt-6"
        >
          Learn how We`re
              <br />
              Changing <br />

          Payments In Africa.
        </motion.h1>
        </motion.div>
      
   

        </div>
      
            </section>
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto grid grid-col-1 lg:grid-cols-2 px-4 text-lg mt-28 text-gray-700 gap-4 lg:gap-10 mb-6"
          >
            

            <div className="flex flex-col gap-4 p-8  border rounded-lg">
              
              <h1 className="tracking-tighter font-semibold text-gray-900 text-xl lg:text-2xl mt-4">
                Our Mission
              </h1>
              <p className=" text-gray-700">
                          To revolutionise the payment landscape in Africa by offering fast,
                          easy, and flawless payment solutions, complemented by
                          outstanding care and customer service.
              </p>
            </div>

            <div className="flex flex-col gap-4 p-8  border rounded-lg">
              
              <h1 className="tracking-tighter font-semibold text-gray-900 text-xl lg:text-2xl mt-4">
                Our Vision
              </h1>
                      <p className=" text-gray-700">
                          To become the most trusted and beloved payment platform
                          across Africa, known for its reliability, user-friendly experience, and
                          customer-centric approach.
              </p>
            </div>

           
          </motion.div>

            <div className='max-w-6xl lg:max-w-7xl mx-auto rounded-lg p-10 mt-28 text-center bg-[#510453] text-white'>
                <h1 className='text-2xl lg:text-4xl'>
                    Ondepay offers more uptime, unparalleled reliability, and top-tier
                    customer-sercices.
                </h1>
            </div>

            <div className='max-w-5xl mx-auto rounded-lg p-10 mt-28 mb-28'>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl text-center font-bold mb-6 mt-6"
          >
            Our Values
          </motion.h1>
          

            <ul className='flex flex-col gap-4 lg:gap-8 mt-12'>
                    <li className='text-gray-700 text-lg'><span className='font-bold text-black'>Reliability:</span> Delivering on our promise of zero downtime.</li>
                    <li className='text-gray-700 text-lg'><span className='font-bold text-black'>Care:</span> Putting our customer first with outstanding support.</li>
                    <li className='text-gray-700 text-lg'><span className='font-bold text-black'>Innovation:</span> Leveraging cutting-edge technology to simplify payments.</li>
                    <li className='text-gray-700 text-lg'><span className='font-bold text-black'>Trust:</span> Ensuring your transactons are safe and secure.</li>
         </ul>
        </div>
        
      <More />
          <CTA />
            </>
  )
}
