import { motion } from "framer-motion";
import App from "../assets/appstore-Duw9Ew9d.png";
import Store from "../assets/play-DZr-00hM.png";
import intro from "../assets/intro-sm-DN4XBZYe.png";
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
import SmartChoices from "./SmartChoices";

const Landing = () => (
  <section className="max-w-8xl mx-auto relative py-28 tracking-lighter overflow-hidden">
    <div className=" px-4 flex flex-col items-center ">
      <div className="flex flex-col gap-2 mt-1 lg:mt-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center w-[300px] lg:w-[400px] h-10 md:h-14  gap-3 border border-gray-900  rounded-full  mx-auto "
        >
          <span className=" flex items-center text-center bg-gray-900 rounded-full w-10 h-10 md:h-14 md:w-14 px-2 md:px-4 ">
            ⚡
          </span>
          <p className=" text-[10px] lg:text-sm">
            {" "}
            Instant Transfer Zero Barriers, Complete Control
          </p>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-7xl font-medium  tracking-tighter  text-[#510453] mb-6 mt-6"
        >
          Flawless Payments,
          <br />
          Your Money Made Easy.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm md:text-lg text-gray-900 mb-6 max-w-[500px] mx-auto"
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
        <img src={intro} className="w-[300px] md:w-[500px]" alt="" />
      </div>
    </div>
    <SmartChoices />
  </section>
);

export default Landing;
