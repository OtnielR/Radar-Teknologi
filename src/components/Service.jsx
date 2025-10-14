function Service() {
  return (
    <div className="w-full">
      <div className="title flex flex-col justify-center text-center">
        <h1 className="font-bold text-3xl">Service Kami</h1>
        <p>Berikut ini adalah jasa yang ada pada kami</p>
      </div>

      <div className="flex justify-center gap-12 py-30">
        <div className="relative flex flex-col items-center text-center shadow-2xl rounded-3xl p-12 w-96 bg-white">
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

        <div className="relative flex flex-col items-center text-center shadow-2xl rounded-3xl p-12 w-96 bg-white">
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

        <div className="relative flex flex-col items-center text-center shadow-2xl rounded-3xl p-12 w-96 bg-white">
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
