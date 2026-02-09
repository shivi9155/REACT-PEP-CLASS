import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans  bg-gradient-to-r from-blue-500 to-indigo-200 text-black">
      
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="flex justify-between items-center px-8 py-4">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <div className="space-x-6">
            <button onClick={() => scrollToSection("home")}>Home</button>
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("projects")}>Projects</button>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-200 text-white"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          Welcome to My Portfolio
        </motion.h1>

        <p className="text-xl">You stayed on this page for {seconds} seconds</p>

        <button
          onClick={() => scrollToSection("about")}
          className="mt-10 bg-white text-indigo-600 px-6 py-2 rounded-2xl shadow-lg hover:scale-105 transition"
        >
          Scroll Down ↓
        </button>
      </section>

    
      <section id="about" className="min-h-screen p-16 bg-gray-100">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg max-w-3xl">
          I am a passionate web developer skilled in React, JavaScript, and
          modern UI design. I love building interactive and responsive
          applications.
        </p>
      </section>

      <section id="projects" className="min-h-screen p-16">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>
        <input placeholder="DayCare Management System" className="border-2 rounded-lg p-4 bg-white m-2" href=''/>

        
          <input placeholder="DayCare Management System" className="border-2 rounded-lg p-4 bg-white m-2"/>
            <input placeholder="DayCare Management System" className="border-2 rounded-lg p-4 bg-white"/>
      </section>

      <section id="contact" className="min-h-screen p-16 bg-gray-100">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>

        <form className="max-w-xl space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            placeholder="Your Message"
            className="w-full border p-3 rounded-lg"
            rows="4"
          ></textarea>

          <button className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-pink-200 transition">
            Send Message
          </button>
        </form>
      </section>

      
      <footer className="text-center py-6 bg-black text-white">
         2026 My Portfolio. All rights reserved.
      </footer>
    </div>
  );
}
