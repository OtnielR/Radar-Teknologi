function Service() {
  return (
    <div className="w-full" id="service">
      <div className="title flex flex-col justify-center text-center">
        <h1 className="font-bold text-3xl">Service Kami</h1>
        <p>Berikut ini adalah jasa yang ada pada kami</p>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-12 justify-center items-center gap-20 py-30">
        {/* Card 1 */}
        <div className="relative flex flex-col items-center text-center shadow-2xl rounded-3xl p-12 w-96 bg-white transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:shadow-3xl hover:bg-gray-50">
          <div className="absolute -top-30">
            <img src="csc.png" alt="CSC Komputer" className="w-66 h-66 object-contain" />
          </div>
          <div className="mt-24">
            <h1 className="text-2xl font-bold">CSC Komputer</h1>
            <p className="text-base mt-3">
              Perdagangan jasa service komputer, laptop, dan printer
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative flex flex-col items-center text-center shadow-2xl rounded-3xl p-12 w-96 bg-white transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:shadow-3xl hover:bg-gray-50">
          <div className="absolute -top-25">
            <img src="radar-edu.png" alt="Radar Education Center" className="w-56 h-56 object-contain" />
          </div>
          <div className="mt-24">
            <h1 className="text-2xl font-bold">Radar Education Center</h1>
            <p className="text-base mt-3">
              Pengadaan pelatihan kursus komputer, In House Training & Sertifikasi
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative flex flex-col items-center text-center shadow-2xl rounded-3xl p-12 w-96 bg-white transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:shadow-3xl hover:bg-gray-50">
          <div className="absolute -top-25">
            <img src="ahsa.png" alt="AHSA Kreatif" className="w-56 h-56 object-contain" />
          </div>
          <div className="mt-24">
            <h1 className="text-2xl font-bold">AHSA Kreatif</h1>
            <p className="text-base mt-3">
              Instalasi server jaringan komputer dan pembuatan aplikasi berbasis web serta mobile
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
