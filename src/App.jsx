import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Navbar from './Components/Navbar'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Education from './Components/Education'
import Certifications from './Components/Certification'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


const Home = () => {

  useEffect(() => {
    const getVisitor = async () => {
      try {
        const res = await fetch("https://ipapi.co/json");
        const data = await res.json();

        await axios.post(`${import.meta.env.VITE_API_URL}/api/visitors`, {
          ip: data.ip,
          country: data.country_name,
          city: data.city,
          device: navigator.platform,
          browser: navigator.userAgent
        });

      } catch (err) {
        console.log(err);
      }
    };

    getVisitor();

  }, []);

  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
