export default function Footer() {
  return (
    <div className="flex flex-col justify-center px-10 mx-19">
      <div className="atas flex flex-row justify-between bg-white items-center px-10 py-4 rounded-lg shadow-2xl">
        <div className="">
          <h1 className="items-center text-2xl font-bold">Semangat Menjelajahi Teknologi? Kami juga. Ayo Mulai Bersama!</h1>

        </div>
        <div className="text-lg text-white bg-[#2a3342] rounded-lg">
          <button className="py-2 px-8 font-bold">Chat on WhatsApp</button></div>
      </div>



      <div className="bawah flex justify-between my-10 gap-6">
        <div className="kiri items-center text-center bg-[#2a3342] py-25 px-25 rounded-lg w-5/12">
          <div className="flex flex-row items-center justify-center gap-2">
            <img src="logo.png" alt="" className="logo w-15" />
            <div className="flex flex-col">
              <h2 className="text-4xl text-white font-bold text-left whitespace-nowrap">Radar Teknologi</h2>
              <h1 className="text-5xl text-white font-bold text-left">Komputer</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between w-270 items-start bg-white py-10 px-20 rounded-lg shadow-2xl">
          <div>
            <div className="bg-[#2a3342] text-white text-center font-semibold px-5 py-2 rounded-lg mb-10">
              Profesional Partner
            </div>
            <div className="flex flex-wrap gap-10 mb-3 text-lg">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
            </div>
            <div className="flex flex-wrap gap-10 mb-5 text-lg">
              <a href="#">Portofolio</a>
              <a href="#">Blogs</a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center w-full text-sm border-t pt-6">
            <p>© 2025 Radar Teknologi Komputer. All rights reserved.</p>
            <div className="flex gap-8 mt-2 md:mt-0">
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

