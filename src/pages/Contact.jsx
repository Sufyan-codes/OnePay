import React from "react";
import { motion } from "framer-motion";
import CTA from "../components/CTA";
import img from "../assets/contact1-BqtAsJJl.png";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <section className=" bg-[#FFF9EC] py-28 tracking-lighter overflow-hidden  mb-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-left mt-10 text-left"
          >
            <p className="text-center px-4 py-2 w-28 text-sm  py-1 bg-white  rounded-full">
              {" "}
              Contact Us
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-7xl  tracking-tighter font-medium text-[#510453] mb-6 mt-6"
            >
              Here For You,
              <br />
              Anytime, Anywhere.
            </motion.h1>
            <p className="text-sm md:text-xl text-gray-700">
              We prioritize your satisfaction. Our support team is available 24/7
              to assist you with any questions or concers. Whether you need help
              to navigate the app or resolving a payment issue. we`ve got your
              back.
            </p>
            <ul className="flex flex-col gap-4 mt-6  text-[#510453]">
              <li className="flex items-center gap-2 hover:underline"><p>Live Chat</p> <MdOutlineArrowRightAlt /></li>
              <li className="flex items-center gap-2 hover:underline"><p>Call: +234567890</p> <MdOutlineArrowRightAlt /></li>
              <li className="flex items-center gap-2 hover:underline"><p>Email: Ondepay@gmail.com</p> <MdOutlineArrowRightAlt /></li>
            </ul>
          </motion.div>
          <img src={img} alt="" />
        </div>
      </section>

      <CTA />
    </>
  );
}
