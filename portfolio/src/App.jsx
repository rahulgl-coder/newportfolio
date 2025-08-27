import { useState } from 'react'


import './App.css'
import Navbar from './Navbar'
import { Mainbanner } from './Mainbanner'
import { Skills } from './Skills'
import Projects from './Projects'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const projectList = [
  {
    title: "E-commerce Website",
    description: "A full-featured shopping website with cart, orders, and admin dashboard.",
    link: "https://example.com/ecommerce"
  },
  {
    title: "Chat App",
    description: "Real-time chat app with private messaging.",
    link: "https://example.com/chat"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Tailwind showcasing my skills and projects.",
    link: "https://example.com/portfolio"
  }
];
function App() {


  return (
    <div>
    <Navbar/>
    <Mainbanner/>
    <Skills/>
    <Projects projects={projectList}/>
    </div>
  )

  }
export default App
