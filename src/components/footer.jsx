import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center px-6 md:px-10 py-10 bg-[#f8f9fa]">
    
      <div className="flex flex-col md:flex-row justify-between items-center bg-white px-6 md:px-10 py-6 rounded-2xl shadow-xl text-center md:text-left gap-4 md:gap-0">
        <h1 className="text-xl md:text-2xl font-bold text-[#2a3342] leading-snug">
          Semangat Menjelajahi Teknologi? Kami juga. <br className="hidden md:block" /> Ayo Mulai Bersama!
        </h1>
        <button className="bg-[#2a3342] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#3a4457] transition">
          Chat on WhatsApp
        </button>
      </div>

      
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-stretch my-12 gap-10">
        
        <div className="flex flex-col justify-center items-center text-center bg-[#2a3342] text-white rounded-2xl p-10 w-full lg:w-1/2 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-4">
            <img
              src="logo.png"
              alt="Logo Radar Teknologi Komputer"
              className="w-16 h-16 object-contain mb-3 sm:mb-0"
            />
            <div className="flex flex-col leading-tight sm:text-left text-center">
              <h2 className="text-3xl md:text-4xl font-bold">Radar Teknologi</h2>
              <h1 className="text-4xl md:text-5xl font-extrabold">Komputer</h1>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col justify-between bg-white rounded-2xl shadow-xl w-full lg:w-1/2 p-8 md:p-12">
          <div>
            <div className="bg-[#2a3342] text-white text-center font-semibold px-5 py-2 rounded-lg mb-8 inline-block">
              Profesional Partner
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8 text-lg text-[#2a3342]">
              <a href="#" className="hover:text-[#e34040] transition">Home</a>
              <a href="#" className="hover:text-[#e34040] transition">About</a>
              <a href="#" className="hover:text-[#e34040] transition">Services</a>
              <a href="#" className="hover:text-[#e34040] transition">Portofolio</a>
              <a href="#" className="hover:text-[#e34040] transition">Blogs</a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center w-full text-sm border-t pt-6 mt-8 text-gray-600">
            <p className="text-center md:text-left">
              © 2025 Radar Teknologi Komputer. All rights reserved.
            </p>
            <div className="flex gap-6 mt-3 md:mt-0">
              <a href="#" className="hover:text-[#e34040] transition">Terms</a>
              <a href="#" className="hover:text-[#e34040] transition">Privacy</a>
            </div>
          </div>
        </div>
      </div>

    
      <div className="flex justify-center md:justify-end gap-6 text-[#2a3342] mt-6">
        <a href="#" className="hover:text-[#e34040] transition">
          <i className="fab fa-facebook-f text-xl"></i>
        </a>
        <a href="#" className="hover:text-[#e34040] transition">
          <i className="fab fa-instagram text-xl"></i>
        </a>
        <a href="#" className="hover:text-[#e34040] transition">
          <i className="fab fa-linkedin-in text-xl"></i>
        </a>
      </div>
    </footer>
  );
}
