import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import logo from "../assets/logo-dark-BhJABPia.png";
import { Ri24HoursFill, RiCloseLine, RiMenu3Fill } from '@remixicon/react'
import { RiAlignRight } from 'react-icons/ri'
import { motion } from 'framer-motion';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  

  const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () => {
  setIsOpen(!isOpen)
}

  return (
    <nav className="fixed  left-0 right-0 z-50  ">
      <motion.div
       initial={{ opacity: 0, y: -30 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto  py-7 pb-5 px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link to="/" className="text-xl text-primary ">
          <img src={logo} className="w-32" alt="" />
        </Link>

        <div className="hidden md:flex space-x-6 text-neutral-700 tracking-tighter ">
          <Link to="/" className=" hover:text-neutral-700 py-2 px-4">
            Home
          </Link>
          <Link to="/about" className="hover:text-neutral-700 py-2 px-4">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-neutral-700 py-2 px-4">
            Contact
          </Link>
        </div>

        <div className="hidden md:flex gap-3 items-center">
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="text-gray-700 hover:text-primary transition"
              >
                Dashboard
              </Link>
              <Link
                to="/payment"
                className="text-gray-700 hover:text-primary transition"
              >
                Payments
              </Link>
              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                className="text-red-500 hover:text-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              
              <Link
                to="/signup"
                className="px-4 py-2 bg-primary text-black rounded-md hover:bg-primary/90 transition"
              >
                Sign Up
                </Link>
                <Link
                to="/login"
                className="bg-yellow-600 text-black px-6 py-2 rounded-md font-medium shadow hover:scale-105 transition"
              >
                Login
              </Link>
            </>
          )}
        </div>
        {/* Mobile menu toggle */}
        <div className="md:hidden">
                    <button onClick={toggleMenu} className='text-white focus:outline-none'
                        aria-label={isOpen ? "Open Menu" : "Close Menu"}>
                    {isOpen ? <RiCloseLine className='text-gray-900' /> : <RiMenu3Fill className='text-gray-900' />}
                    </button>
                </div>
      </motion.div>
      {isOpen &&
        (
          <div className="md:hidden text-black backdrop-blur-md border-b
                border-neutral-200 p-4 rounded-xl mt-2">
            <div className='flex flex-col text-center space-y-4'>
              <Link to="/" className="hover:text-neutral-700 py-2 px-4">
                Home
              </Link>
              <Link to="/about" className="hover:text-neutral-700 py-2 px-4">
                About Us
              </Link>
              <Link to="contact" className="hover:text-neutral-700 py-2 px-4">
                Contact
              </Link>
                   
              <Link to="/login" className=" text-black
                    py-2 px-4 rounded-lg hover:bg-neutral-700 transition">
                Login
              </Link>
            
                  
            </div>
          </div>
        )
      }
    </nav>
  );
};
export default Navbar;
