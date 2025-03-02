import React from 'react'
import { Instagram, Linkedin} from "lucide-react";
const Footer = () =>  {
  return (
    <div>
     <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <p className="mb-4">Follow me on social media:</p>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 hover:text-pink-500" />
          </a>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-blue-500" />
          </a>
          
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer