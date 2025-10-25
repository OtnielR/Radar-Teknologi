import React from "react";

function Contact() {
  return (
    <section id="contact" className="bg-white px-6 sm:px-12 py-16">

      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#2a3342]">Contact</h1>
        <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          Untuk informasi lebih lanjut dan penawaran, silakan hubungi kami melalui kontak berikut.
        </p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

        <div className="flex flex-row items-center gap-5 bg-gray-50 hover:bg-gray-100 transition-all shadow-md px-6 py-6 rounded-2xl w-full max-w-sm">
          <div className="flex-shrink-0">
            <div className="bg-[#e34040] p-3 rounded-xl">
              <img
                src="icons8-email-48.png"
                alt="Email Icon"
                className="w-10 h-10"
              />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#2a3342]">Email</h2>
            <p className="text-gray-700 text-sm sm:text-base">
              cs@radarteknologikomputer.id
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-5 bg-gray-50 hover:bg-gray-100 transition-all shadow-md px-6 py-6 rounded-2xl w-full max-w-sm">
          <div className="flex-shrink-0">
            <div className="bg-[#e34040] p-3 rounded-xl">
              <img
                src="icons8-phone-48.png"
                alt="Phone Icon"
                className="w-10 h-10"
              />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#2a3342]">Phone</h2>
            <p className="text-gray-700 text-sm sm:text-base">
              +62 822-1009-4228
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-5 bg-gray-50 hover:bg-gray-100 transition-all shadow-md px-6 py-6 rounded-2xl w-full max-w-sm">
          <div className="flex-shrink-0">
            <div className="bg-[#e34040] p-3 rounded-xl">
              <img
                src="icons8-instagram-48.png"
                alt="Social Icon"
                className="w-10 h-10"
              />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#2a3342]">Social</h2>
            <p className="text-gray-700 text-sm sm:text-base">
              @radarteknologikomputer
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <div className="w-full max-w-[1200px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7932.698510448497!2d106.673797!3d-6.21759!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f98134b54ff3%3A0xd0e8009a05feb48c!2sPT.%20Radar%20Teknologi%20Komputer!5e0!3m2!1sen!2sid!4v1760255412554!5m2!1sen!2sid"
            allowFullScreen=""
            loading="lazy"
            title="Radar Teknologi Komputer"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl border-0 shadow-md"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
