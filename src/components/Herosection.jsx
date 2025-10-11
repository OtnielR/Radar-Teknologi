import React from 'react'

function Herosection() {
  return (
    <div className='flex justify-center items-center gap-8 pb-12 h-screen mx-35'>
        <div className="left flex flex-col gap-5 justify-center ">
            <h1 className='text-white font-bold text-7xl'>Solusi Kebutuhan <br />Teknologi Informasi</h1>
            <p className='text-white text-xl w-'>Kami adalah mitra anda mengatasi masalah dibidang IT Support and Helpdesk serta Pendidikan Teknologi</p>
            <div className='relative'>

            <h2 className="button text-white font-bold bg-[#e34040] px-2 py-1 text-center text-lg absolute rounded-lg">RADAR TEKNOLOGI KOMPUTER</h2>
            </div>
        </div>
        <div className="right">
            <img src="hero-img.png" alt="" className='w-250' />
        </div>
    </div>
  )
}

export default Herosection