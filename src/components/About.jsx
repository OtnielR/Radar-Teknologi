import React from "react";

function About() {
  return (
    <section className="bg-white text-[#2a3240] py-24 px-6 md:px-28 flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row md:items-start md:justify-between gap-12">
        <div className="md:w-1/2 flex flex-col gap-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
            Tentang Kami
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Kami adalah perusahaan yang bergerak di bidang{" "}
            <strong className="text-[#e34040]">Teknologi Informasi (TI)</strong>.  
            Kami menyediakan layanan dan produk yang dirancang untuk memenuhi
            kebutuhan teknologi informasi Anda dengan solusi yang inovatif,
            efisien, dan berorientasi hasil.
          </p>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Melalui dedikasi dan pengalaman, kami berkomitmen untuk membantu
            masyarakat dan organisasi mengoptimalkan potensi teknologi agar
            lebih produktif, aman, dan modern.
          </p>
        </div>

        <div className="md:w-1/2 bg-[#f8f9fb] rounded-2xl p-8 shadow-lg space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#e34040] text-center">
            Layanan Utama Kami
          </h2>
          <ul className="space-y-5 text-gray-800 text-lg leading-relaxed">
            <li>
              <span className="font-semibold text-[#2a3240]">1. CSC Komputer:</span>{" "}
              Jasa Maintenance dan Service Komputer, Laptop, serta Printer.
            </li>
            <li>
              <span className="font-semibold text-[#2a3240]">
                2. Radar Education Center:
              </span>{" "}
              Kursus, Bootcamp, Workshop, Seminar, dan Sertifikasi IT.
            </li>
            <li>
              <span className="font-semibold text-[#2a3240]">3. AHSA Kreatif:</span>{" "}
              Jasa & Konsultan Website / Software Development.
            </li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-5xl mt-16 text-center">
        Kami percaya bahwa teknologi bukan hanya alat, tetapi fondasi kemajuan.
        Dengan layanan kami, kami ingin berkontribusi dalam mendorong inovasi
        digital yang berkelanjutan di Indonesia.
      </p>
    </section>
  );
}

export default About;
