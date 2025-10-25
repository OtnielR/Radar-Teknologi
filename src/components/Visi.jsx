import React from "react";

function Visi() {
  return (
    <section className="bg-[#2a3342] w-full relative">
      <div className="flex flex-col justify-center text-center py-14 px-6">
        <h1 className="text-3xl md:text-4xl text-white font-bold mb-4 tracking-wide">
          Visi
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Menjadi perusahaan teknologi informasi terbaik se-Indonesia.
        </p>
      </div>

      <div className="relative bg-white rounded-t-[3rem] px-6 py-20 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center place-items-center">
          <div className="relative flex flex-col items-center max-w-sm">
            <div className="absolute -top-12 md:-top-14 flex justify-center w-full">
              <div className="bg-[#e34040] p-6 md:p-7 rounded-full shadow-xl flex justify-center items-center border-4 border-white">
                <img src="mail.png" alt="Mail Icon" className="w-10 md:w-12" />
              </div>
            </div>
            <div className="mt-16 md:mt-24">
              <h2 className="font-semibold text-[#2a3342] text-lg sm:text-xl md:text-[1.15rem] leading-relaxed mb-3">
                Pelayanan prima dengan mengutamakan kualitas dan profesionalisme
                guna mencapai kepuasan pelanggan.
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Memberikan solusi terbaik dengan layanan cepat, ramah, dan
                terpercaya.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col items-center max-w-sm">
            <div className="absolute -top-12 md:-top-14 flex justify-center w-full">
              <div className="bg-[#e34040] p-6 md:p-7 rounded-full shadow-xl flex justify-center items-center border-4 border-white">
                <img src="pen.png" alt="Pen Icon" className="w-10 md:w-12" />
              </div>
            </div>
            <div className="mt-16 md:mt-24">
              <h2 className="font-semibold text-[#2a3342] text-lg sm:text-xl md:text-[1.15rem] leading-relaxed mb-3">
                Berinovasi dalam pengembangan jasa dan peningkatan sumber daya
                kerja.
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Mendorong inovasi berkelanjutan untuk menciptakan solusi digital
                yang adaptif dan relevan.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col items-center max-w-sm">
            <div className="absolute -top-12 md:-top-14 flex justify-center w-full">
              <div className="bg-[#e34040] p-6 md:p-7 rounded-full shadow-xl flex justify-center items-center border-4 border-white">
                <img src="grid.png" alt="Grid Icon" className="w-10 md:w-12" />
              </div>
            </div>
            <div className="mt-16 md:mt-24">
              <h2 className="font-semibold text-[#2a3342] text-lg sm:text-xl md:text-[1.15rem] leading-relaxed mb-3">
                Berkolaborasi guna mencerdaskan bangsa melalui skill aplikasi
                terapan.
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Mengembangkan kolaborasi yang memperluas akses dan kompetensi di
                bidang teknologi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Visi;
