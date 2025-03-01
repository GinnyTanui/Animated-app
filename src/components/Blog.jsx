import React from 'react'
import { motion } from 'framer-motion'
const  Blog = () => {
  return (
    <div className='bg-blue-50 py-16'> 
      <div className='px-6 md:px-12 text-center'> 
        <h1 className='font-bold text-blue-700 mb-6 text-2xl'>
            Tips and Tricks😉
        </h1>

      </div>  
       {/* Testimonials Container */}
      <div className ='flex flex-col space-y-4 px-6 md:px-12 justify-center items-center'> 
        {blogs.map((blog, index) => (
            <motion.div 
            key={index} 
            className='border rounded-lg shadow-lg p-6 max-w-6xl h-48 bg-white text-center flex flex-col space-y-2'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}>
              <h2 className='font-semibold italic text-xl text-blue-800'>{blog.heading}</h2> 
              <p className='text-gray-700'>{blog.description}</p>
                </motion.div>
        ))}

      </div>
   
    </div>
  )
}

export default Blog 
//Blog Data 
const blogs = [
    {
        heading:"The 5 Essential Chords Every Beginner Must Know" ,
        description:"If you are just starting out on the guitar, learning these five fundamental chords will set you up for success. In this guide, I will break down each chord, show you the easiest finger placements, and help you practice smooth transitions"

    }, 
    {
        heading: "Strumming Secrets: How to Make Your Guitar Sound Better", 
        description: "Many beginners struggle with strumming patterns and rhythm. But don not worry! In this post, I will share tips on how to improve your strumming technique, stay in time, and bring more expression to your playing"
    },
    {
        heading: "Acoustic vs. Electric Guitar: Which One Should You Learn First?", 
        description: "Are you unsure whether to start with an acoustic or electric guitar? Both have their pros and cons. This article will help you choose the right guitar based on your musical taste, budget, and learning goals"
    }, 
    {
        heading:"Overcoming Common Beginner Mistakes", 
        description: "From improper hand positioning to inconsistent practice habits, every guitarist makes mistakes in the beginning. In this blog, I will highlight common mistakes and how to fix them, so you can progress faster and avoid frustration"
    }, 
    {
        heading: "How to Stay Motivated While Learning Guitar", 
        description: "Ever feel like giving up? Learning an instrument is a journey, and staying motivated is key. In this post, I will share strategies to keep practicing fun and rewarding, even when progress feels slow"
    }
]