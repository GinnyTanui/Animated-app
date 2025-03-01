import React from 'react'
import Image from '../images/guitar-removebg-preview.png' 
import { delay, motion } from 'framer-motion' 
import { useState } from "react";
import { Menu, X } from "lucide-react" 
import {Link} from 'react-scroll'

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const heroSectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.5, delayChildren: 1.0 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.6, ease: "easeOut" } },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-blue-300 to-blue-500 min-h-screen">
      {/* Navbar */}
      <motion.div
        className="max-w-6xl mx-auto py-4 px-6"
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <nav className="flex justify-between items-center">
          {/* Left Side - Home */}
          <ul className="text-white font-semibold text-lg">
            <li className="hover:text-gray-200 cursor-pointer"><Link to="header" smooth={true} duration={500}>Home</Link></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Right Side - Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-white font-semibold">
            <li className="hover:text-gray-200 cursor-pointer"><Link to="about" smooth={true} duration={500}>About Me</Link></li>
            <li className="hover:text-gray-200 cursor-pointer"><Link to="blog" smooth={true} duration={500}>Blog</Link></li>
            <li className="hover:text-gray-200 cursor-pointer"><Link to="customer" smooth={true} duration={500}>Customer</Link></li>
            <li className="hover:text-gray-200 cursor-pointer"></li>
          </ul>
        </nav>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          className="md:hidden flex flex-col items-center space-y-4 py-4 bg-blue-600 text-white font-semibold"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <li className="hover:text-gray-200 cursor-pointer"><Link to="about" smooth={true} duration={500}>About Me</Link></li>
          <li className="hover:text-gray-200 cursor-pointer"><Link to="blog" smooth={true} duration={500}>Blog</Link></li>
          <li className="hover:text-gray-200 cursor-pointer"><Link to="customer" smooth={true} duration={500}>Customer</Link></li>
        </motion.ul>
      )}

      {/* Hero Section */}
      <motion.div
        variants={heroSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="pt-32 px-6 flex flex-col md:flex-row justify-evenly items-center text-center md:text-left">
          <div className="flex flex-col space-y-4 max-w-2xl">
            <div className="text-4xl text-white font-bold">
              <motion.p variants={textVariants}>
                Strumming Soles, Creating Melodies - Unlock Your Guitar Potential
                Today!
              </motion.p>
            </div>
            <div>
              <motion.p variants={textVariants} className="text-white">
                With years of experience playing and teaching guitar, I have helped
                students of all levels master the art of music. Whether you are a
                beginner or looking to refine your skills, my personalized lessons
                will guide you every step of the way.
              </motion.p>
            </div>
          </div>
          <div>
            <motion.div
              variants={textVariants}
              className="w-80 drop-shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img src={Image} alt="Guitar" />
            </motion.div>
          </div>
        </div>
        <div className="py-4 px-6 text-center">
          <motion.button
            variants={textVariants}
            className="bg-white text-blue-700 font-semibold px-4 py-2 rounded-lg shadow-lg hover:bg-gray-200 transition"
          >
            Start Learning Today
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
