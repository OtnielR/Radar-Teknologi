import React from "react";

function IsiContent() {
  return (
    <section className="w-full bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 py-10">
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight break-words">
              Wajib Tahu! Cara menggunakan Fungsi SUM, AVERAGE, dan Count di
              Excel untuk pemula
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Microsoft Excel adalah salah satu perangkat lunak spreadsheet
              paling populer yang digunakan untuk mengelola data. Excel
              dilengkapi dengan banyak fungsi penting yang dapat membantu Anda
              mengolah data secara efisien.
            </p>

            <button className="mt-2 px-6 py-2 bg-[#e34040] text-white font-medium rounded-lg hover:bg-[#c92d2d] transition-colors w-full md:w-fit">
              Baca Tutorial
            </button>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-lg border border-gray-100">
              <img
                src="ningpt2.jpg"
                alt="Tutorial Excel"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        <hr className="border-gray-100" />
      </div>
    </section>
  );
}

export default IsiContent;
