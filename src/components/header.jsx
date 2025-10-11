import React from 'react'

function Header() {
  return (
    <>
    <div className='flex justify-between text-white items-center mx-12 '>

    <div className='pt-8 mx-8  flex items-center gap-3'>
      <div className="logo w-15"><img src="logo.png" /></div>
        <div className='font-bold text-2xl mx-2'>Radar Teknologi Komputer </div>
    </div>
    <div className='pt-8 mx-8'>
        <a href="" className="px-8 font- text-xl">Home</a>
        <a href="" className="px-8 font- text-xl">Service</a>
        <a href="" className="px-8 font- text-xl">Portofolio</a>
        <a href="" className="px-8 font- text-xl">Contact</a>
    </div>
    </div>
    </>
  )
}

export default Header