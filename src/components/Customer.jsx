import React from 'react'
import {motion} from 'framer-motion'
const Customer = () => {
  return (
    <div className="bg-blue-50 py-16">
    <div className="px-6 md:px-12 text-center">
      <h1 className="font-bold text-4xl text-blue-700 mb-6">
        What My Students Say
      </h1>
      <p className="text-gray-600 text-lg mb-8">
        See how my students have transformed their guitar skills!
      </p>
    </div>

    {/* Testimonials Container */}
    <div className=" flex flex-col space-y-4  justify-center items-center md:flex-row space-x-6 px-6 md:px-12 py-6items-center">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          className="border rounded-lg shadow-lg p-6 w-96 h-auto bg-white text-center flex flex-col justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-gray-700 text-lg italic">{testimonial.text}</p>
          <p className="mt-4 font-semibold text-blue-600">
            - {testimonial.name}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
);
};

// Testimonials Data
const testimonials = [
{
  text: "I never thought I could learn the guitar so fast! McKenzie made every lesson engaging and easy to follow. 😃😁",
  name: "Alex M.",
},
{
  text: "The personalized approach helped me grow my confidence and skills. Now, I can play my favorite songs effortlessly! ✔",
  name: "Sarah T.",
},
{
  text: "I used to struggle with chords, but after a few sessions, I was playing fluently. Highly recommended! 😁👌",
  name: "James K.",
},
{
  text: "From complete beginner to performing for my friends—this has been an amazing journey! 😁😍",
  name: "Emily R.",
},
{
  text: "Not just a great teacher, but also a great mentor. The passion and dedication show in every lesson! 🤗🥰",
  name: "Chris D.",
},
];
  

export default Customer