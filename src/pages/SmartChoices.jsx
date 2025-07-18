import React from 'react'
import About from "../assets/about1-B_jg3c0Z.png";
import About2 from "../assets/about2-CbTu8vxM.png";
import About3 from "../assets/about3-CyL2btlz.png";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { BsCashCoin } from "react-icons/bs";
import { FaThumbsUp } from "react-icons/fa6";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FcProcess } from "react-icons/fc";
import { GiAfrica } from "react-icons/gi";
import { Link } from "react-router-dom";
import { LuMousePointerClick } from "react-icons/lu";
import { FaHeadphonesAlt } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import More from "../components/More";
import Store from "../assets/play-DZr-00hM.png";
import App from "../assets/appstore-Duw9Ew9d.png";
import { motion } from "framer-motion";

export default function SmartChoices() {
  return (
    <section className='max-w-7xl mx-auto px-4 lg:px-10 '>
      <div className=" mt-28">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-6xl text-center font-medium tracking-tighter  mb-6 mt-6"
      >
        The Smart Choice For <br />
        Seamless Payments
      </motion.h1>

      <div className=" px-4">
        <div className="flex justify-between lg:flex-row flex-col  items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, x: 30 }}
            transition={{ duration: 0.8 }}
            className=" mb-6 mt-6 flex flex-col items-left gap-4 "
          >
            <h1 className="tracking-tighter lg:text-4xl text-3xl font-medium">
              Always Reliable
            </h1>
            <p className=" text-gray-700">
              Zero downtime guaranteed. Your money moves wen you need it, every
              single time.
            </p>
            <ul className="text-gray-700 flex flex-col gap-4">
              <li className="flex gap-2 items-center">
                <AiOutlineFieldTime /> <span>99.99% Uptime</span>
              </li>
              <li className="flex gap-2 items-center">
                <FcProcess /> <span>Instant Transaction Processing</span>
              </li>
              <li className="flex gap-2 items-center">
                <GiAfrica /> <span>Network Redundancy Across Africa</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <img src={About} className="w-[300px] md:w-[550px]" alt="" />
          </motion.div>
        </div>

        <div className="flex justify-between lg:flex-row flex-col-reverse items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <img src={About2} className="w-[300px] md:w-[550px]" alt="" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, x: 30 }}
            transition={{ duration: 0.8 }}
            className=" mb-6 mt-6 flex flex-col gap-4 "
          >
            <h1 className="tracking-tighter lg:text-4xl text-3xl font-medium">
              Fast And Simple
            </h1>
            <p className=" text-gray-700">
              Financial transitions so smooth, you will forget theyr`e happening
            </p>
            <ul className="text-gray-700 flex flex-col gap-4">
              <li className="flex gap-2 items-center">
                <FaCheck />
                <p>instant Cross-border Transfers</p>
              </li>
              <li className="flex gap-2 items-center">
                <BsCashCoin /> <p>Zero Hidden Fees</p>
              </li>
              <li className="flex gap-2 items-center">
                <LuMousePointerClick /> <p>One-Click Transactions</p>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="flex justify-between lg:flex-row flex-col  items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, x: 30 }}
            transition={{ duration: 0.8 }}
            className=" mb-6 mt-6 flex flex-col gap-4 "
          >
            <h1 className="tracking-tighter  lg:text-4xl text-3xl font-medium">
              Unmatched customer Care
            </h1>
            <p className=" text-gray-700">
              We`re not just a platform, We`re your finacial partner. available
              24/7
            </p>
            <ul className="text-gray-700 flex flex-col gap-4">
              <li className="flex gap-2 items-center">
                <FaHeadphonesAlt /> <p>Multilingual Support Team</p>
              </li>
              <li className="flex gap-2 items-center">
                <AiOutlineFieldTime />{" "}
                <p>Average Response Time: Under 3 Minutes</p>
              </li>
              <li className="flex gap-2 items-center">
                <IoPersonSharp /> <p>Personal Problem Resolution</p>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <img src={About3} className="w-[300px] md:w-[500px]" alt="" />
          </motion.div>
        </div>
      </div>

      <div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-6xl text-center tracking-tighter font-medium mb-6 mt-6"
        >
          Getting Started
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm lg:text-xl text-gray-700 mb-12 text-center"
        >
          begin your journey with Ondepay in just a few simple steps!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-col-1 lg:grid-cols-3 px-4 text-lg text-gray-700 gap-4 mb-6"
        >
          <div className="flex flex-col gap-4 p-8 border rounded-lg">
            <span className="bg-pink-300 w-12 h-12 rounded-full">
              <FaThumbsUp className="m-4 text-black" />
            </span>
            <h1 className="font-medium text-gray-900 text-xl mt-2">
              Sign up and Verify Your <br /> Details
            </h1>
            <p className="text-sm text-gray-700">
              Simply provide your email and phone number. then verify your name
              with a quick OTP. It`s fast, secure, and hassle-free.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8  border rounded-lg">
            <span className="bg-pink-300 w-12 h-12 rounded-full ">
              <IoShieldCheckmarkSharp className="m-4 text-black" />
            </span>
            <h1 className="font-medium text-gray-900 text-xl">
              Complete Your Verification
            </h1>
            <p className="text-sm text-gray-700">
              Create your unique username and password, then provide your BVN
              and KYC details. BVN And KYC.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 border rounded-lg text-white bg-[#510453]">
            <span className="bg-pink-300 w-12 h-12 rounded-full">
              <BsCashCoin className="m-4 text-black" />
            </span>
            <h1 className="tracking-tighter font-semibold text-gray-900 text-white text-xl">
              Fund Your Wallet and Start <br />
              Transfering
            </h1>
            <p className="text-sm text-gray-700 text-white">
              Top Up your Ondepay wallet to enjoy Seamless transfers and
              Flawless payments anytime, anywhere.
            </p>
          </div>
        </motion.div>
        <div className="flex flex-row  justify-center mt-10 gap-4">
          <Link
            to="/playstore"
            className=" text-white py-3  hover:opacity-90 transition"
          >
            <img src={Store} width={150} alt="" />
          </Link>
          <Link
            to="/appstore"
            className=" text-primary  py-3  hover:bg-primary/10 transition"
          >
            <img src={App} width={150} alt="" />
          </Link>
        </div>
      </div>
      <FAQ />
      <More />

      <CTA />
    </div>
    </section>
  )
}
