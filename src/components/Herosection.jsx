import React from "react";

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center bg-[#2a3240] text-white px-6 md:px-20 pt-32 md:pt-24 pb-12 min-h-screen">
      <div className="flex flex-col gap-6 md:w-1/2 text-center md:text-left order-1 md:order-none">
        <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight">
          Solusi Kebutuhan <br className="hidden md:block" /> Teknologi Informasi
        </h1>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
          Kami adalah mitra anda mengatasi masalah di bidang IT Support dan Helpdesk serta Pendidikan Teknologi.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="bg-[#e34040] px-5 py-2 rounded-md font-semibold text-sm sm:text-base tracking-wide hover:bg-[#c92d2d] transition-all">
            RADAR TEKNOLOGI KOMPUTER
          </button>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center order-2 md:order-none mt-10 md:mt-0">
        <img
          src="hero-img.png"
          alt="Hero Illustration"
          className="w-[280px] sm:w-[380px] md:w-[500px] lg:w-[550px] object-contain"
        />
      </div>
    </section>
  );
}

export default HeroSection;
