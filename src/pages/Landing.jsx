import { motion } from "framer-motion";
import App from "../assets/appstore-Duw9Ew9d.png";
import Store from "../assets/play-DZr-00hM.png";
import intro from "../assets/intro-sm-DN4XBZYe.png";
import About from "../assets/about1-B_jg3c0Z.png";
import About2 from "../assets/about2-CbTu8vxM.png";
import About3 from "../assets/about3-CyL2btlz.png";

import { Link } from "react-router-dom";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import More from "../components/More";

const Landing = () => (
  <section className="max-w-7xl mx-auto relative py-28 tracking-lighter overflow-hidden">
    <div className=" px-4 flex flex-col items-center ">
      <div className="flex flex-col gap-2 mt-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 border border-gray-900 py-1  rounded-full  mx-auto "
        >
          <span className=" flex items-center text-center bg-gray-900 rounded-full py-4 px-4">
            ⚡
          </span>
          <p className="pr-2  text-sm ">
            {" "}
            Instant Transfer Zero Barriers, Complete Control
          </p>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl  tracking-tighter font-semibold text-[#510453] mb-6 mt-6"
        >
          Flawless Payments,
          <br />
          Your Money Made Easy.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-700 mb-6 max-w-[500px] mx-auto"
        >
          Powering entreprenuers all over Africa with lighting-fast payments and
          zero complications.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-row  justify-center gap-4"
        >
          <Link className=" text-white py-3   hover:opacity-90 transition">
            <img src={Store} width={150} alt="" />
          </Link>
          <Link className=" text-primary  py-3  hover:bg-primary/10 transition">
            <img src={App} width={150} alt="" />
          </Link>
        </motion.div>
      </div>
      <div>
        <img src={intro} alt="" />
      </div>
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl text-center tracking-tighter font-semibold mb-6 mt-6"
        >
          The Smart Choice For <br />
          Seamless Payments
        </motion.h1>

        <div className="flex justify-between lg:flex-row flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, x: 30 }}
            transition={{ duration: 0.8 }}
            className=" mb-6 mt-6 flex flex-col gap-4 "
          >
            <h1 className="tracking-tighter font-semibold lg:text-4xl text-3xl ">Always Reliable</h1>
            <p className=" text-gray-700">
              Zero downtime guaranteed. Your money moves wen you need it, every
              single time.
            </p>
            <ul className="text-gray-700 flex flex-col gap-2">
              <li>99.99% Uptime</li>
              <li>Instant Transaction Processing</li>
              <li>Network Redundancy Across Africa</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <img src={About} width={500} alt="" />
          </motion.div>
        </div>

        <div className="flex justify-between lg:flex-row flex-col p-4 items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <img src={About2} width={500} alt="" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, x: 30 }}
            transition={{ duration: 0.8 }}
            className=" mb-6 mt-6 flex flex-col gap-4 "
          >
            <h1 className="tracking-tighter font-semiboldlg:text-4xl text-3xl">Fast And Simple</h1>
            <p className=" text-gray-700">
              Financial transitions so smooth, you will forget theyr`e happening
            </p>
            <ul className="text-gray-700 flex flex-col gap-2">
              <li>instant Cross-border Transfers</li>
              <li>Zero Hidden Fees</li>
              <li>One-Click Transactions</li>
            </ul>
          </motion.div>
        </div>

        <div className="flex justify-between lg:flex-row flex-col p-4 items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, x: 30 }}
            transition={{ duration: 0.8 }}
            className=" mb-6 mt-6 flex flex-col gap-4 "
          >
            <h1 className="tracking-tighter font-semibold lg:text-4xl text-3xl">Unmatched customer Care</h1>
            <p className=" text-gray-700">
              We`re not just a platform, We`re your finacial partner. available
              24/7
            </p>
            <ul className="text-gray-700 flex flex-col gap-2">
              <li>Multilingual Support Team</li>
              <li>Average Response Time: Under 3 Minutes</li>
              <li>Personal Problem Resolution</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <img src={About3} width={500} alt="" />
          </motion.div>
        </div>

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl text-center tracking-tighter font-semibold mb-6 mt-6"
          >
            Getting Started
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-700 mb-12 text-center"
          >
            begin your journey with Ondepay in just a few simple steps!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-col-1 lg:grid-cols-3 text-lg text-gray-700 gap-4 mb-6"
          >
            <div className="flex flex-col gap-4 p-8 border rounded-lg">
              <span className="bg-pink-300 w-12 h-12 rounded-full">
                thumbs up
              </span>
              <h1 className="font-bold text-gray-900 text-xl mt-2">
                Sign up and Verify Your <br /> Details
              </h1>
              <p className="text-sm text-gray-700">
                Simply provide your email and phone number. then verify your
                name with a quick OTP. It`s fast, secure, and hassle-free.
              </p>
            </div>

            <div className="flex flex-col gap-4 p-8 border rounded-lg">
              <span className="bg-pink-300 w-12 h-12 rounded-full">shield</span>
              <h1 className="font-bold text-gray-900 text-xl">
                Complete Your Verification
              </h1>
              <p className="text-sm text-gray-700">
                Create your unique username and password, then provide your BVN
                and KYC details. BVN And KYC.
              </p>
            </div>

            <div className="flex flex-col gap-4 p-8 border rounded-lg text-white bg-[#510453]">
              <span className="bg-pink-300 w-12 h-12 rounded-full">Cash</span>
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
              <Link to='/playstore' className=" text-white py-3  hover:opacity-90 transition">
                <img src={Store} width={150} alt="" />
              </Link>
              <Link to="/appstore" className=" text-primary  py-3  hover:bg-primary/10 transition">
                <img src={App} width={150} alt="" />
              </Link>
            </div>
        </div>
        <FAQ />
        <More />
        
        <CTA />
      </div>
    </div>
  </section>
);

export default Landing;
