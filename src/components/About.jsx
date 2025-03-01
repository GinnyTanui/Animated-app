import React from 'react'
import { delay, motion } from 'framer-motion'  

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }, // Slightly faster stagger effect
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <motion.div
      className="bg-blue-50 py-12 px-6 md:px-20 lg:px-32"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={textVariants} className="text-center">
        <motion.h2 className="text-4xl font-extrabold text-blue-600 mb-6">
          About Me
        </motion.h2>
      </motion.div>

      <motion.div variants={textVariants} className="max-w-3xl mx-auto text-center">
        <motion.p className="text-gray-700 text-lg leading-relaxed">
          Hey, I'm{" "}
          <span className="font-bold text-gray-900">Kaiser McCkKenzie</span>, a
          passionate guitarist with{" "}
          <span className="text-blue-500 font-bold">4 years of experience</span>. 
          My love for music began when I first heard Tracy Chapman play, and I knew I had to pick up the guitar. 
          I remember struggling with my first chords, but through patience and practice, I discovered the magic of music.
        </motion.p>
      </motion.div>

      <motion.div variants={textVariants} className="max-w-3xl mx-auto text-center mt-6">
        <motion.p className="text-gray-700">
          Over the years, I have performed on various stages, composed original pieces, 
          and helped aspiring musicians unlock their full potential. 
          <span className="font-semibold">
            My mission is to make learning guitar enjoyable, rewarding, and accessible to everyone
          </span>—no matter their skill level!
        </motion.p>
      </motion.div>

      <motion.div variants={textVariants} className="max-w-3xl mx-auto text-center mt-6">
        <motion.p className="text-lg font-semibold text-gray-900">
          "Music is the universal language of mankind." - Henry Wadsworth Longfellow 😁✨
        </motion.p>
      </motion.div>

      <motion.div variants={textVariants} className="text-center mt-8">
        <motion.button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all shadow-lg">
          Start Your Guitar Journey Today!
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default About;



