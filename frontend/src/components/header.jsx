import React from 'react'

function Header() {
  return (
    <>
    {/* Nav */}
    <div className='flex justify-between text-white items-center mx-12 '>

    <div className='py-8 mx-8  flex items-center gap-3'>
      <div className="logo w-10"><img src="logo.png" /></div>
        <div className='font-bold text-xl'>Radar Teknologi Komputer </div>
    </div>
    <div className='py-8 mx-8'>
        <a href="" className="px-8 font-bold">Home</a>
        <a href="" className="px-8 font-bold">Service</a>
        <a href="" className="px-8 font-bold">Portofolio</a>
        <a href="" className="px-8 font-bold">Contact</a>
    </div>
    </div>
    {/* Navbar end */}
    </>
  )
}

export default Header