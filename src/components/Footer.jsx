import React from "react";
import img from "../assets/logo-DGsXvJCb.png";
import App from "../assets/appstore-Duw9Ew9d.png";
import Store from "../assets/play-DZr-00hM.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <section className="bg-[#510453] py-10 pb-28">
      <div className="max-w-7xl mx-auto text-white grid grid-co-2 px-4 lg:grid-cols-5 md:grid-cols-2 pt-5 px-4 gap-8">
        <div className="flex flex-col gap-4">
          <img src={img} className="w-32" alt="" />
          <p className="text-sm">
            Empowering Your Projects. Enancing Your Success. Every Step of the
            way
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold">Home</h1>
          <ul className="text-sm flex flex-col gap-4">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/howToUse">How To Use</Link>
            </li>
            <li>
              <Link to="/FAQS">FAQ`s</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold">App</h1>
          <ul className="text-sm flex flex-col gap-4">
            <li>
              <Link to="/about">Mobile App Download</Link>
            </li>
            <li>
              <Link to="/contact">Privacy policy</Link>
            </li>
            <li>
              <Link to="/howToUse">Terms and Conditions</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-bold">All Pages</h1>
          <ul className="text-sm flex flex-col gap-4">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/howToUse">How To Use</Link>
            </li>
            <li>
              <Link to="/contact">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/howToUse">Terms and Conditions</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 bg-[#59085c] py-4 flex flex-col justify-center items-center rounded-lg shadow">
          <h1 className="font-bold">Download our App</h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col  justify-center"
          >
            <Link className=" text-white py-3   hover:opacity-90 transition">
              <img src={Store} width={150} alt="" />
            </Link>
            <Link className=" text-primary  py-3  hover:bg-primary/10 transition">
              <img src={App} width={150} alt="" />
            </Link>
          </motion.div>
        </div>

       
          </div>
          <div className="max-w-7xl mx-auto mt-10 pt-5 px-4 text-white border-t text-center">
          <p className="text-sm">&#169; 2025 Ondepay. All rights reserved</p>
          
        </div>
    </section>
  );
}
