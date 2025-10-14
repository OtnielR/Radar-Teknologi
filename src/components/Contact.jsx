import React from 'react';

function Contact() {
  return (
    <div className="p-10">
      <div className="atas flex flex-row justify-center gap-[35px] items-center">
        <div>
          <h1 className="text-6xl font-bold">Contact</h1>
          <p className="w-[60%] pt-3">
            Untuk informasi lebih lanjut dan penawaran silahkan hubungi kami
          </p>
        </div>

        <div className="flex flex-row gap-10">
          <div>
            <div className="icon">
              <img
                src="icons8-email-48.png"
                alt=""
                className="bg-[#e34040] rounded-xl p-1 w-10"
              />
            </div>
            <h1 className="text-xl font-bold pt-2">Email</h1>
            <p className="pt-2">cs@radarteknologikomputer.id</p>
          </div>

          <div>
            <div className="icon">
              <img
                src="icons8-email-48.png"
                alt=""
                className="bg-[#e34040] rounded-xl p-1 w-10"
              />
            </div>
            <h1 className="text-xl font-bold pt-2">Phone</h1>
            <p className="pt-2">+62 822-1009-4228</p>
          </div>

          <div>
            <div className="icon">
              <img
                src="icons8-email-48.png"
                alt=""
                className="bg-[#e34040] rounded-xl p-1 w-10"
              />
            </div>
            <h1 className="text-xl font-bold pt-2">Social</h1>
            <p className="pt-2">@radarteknologikomputer</p>
          </div>
        </div>
      </div>

      <div className="bawah mt-10 flex justify-center items-center ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7932.698510448497!2d106.673797!3d-6.21759!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f98134b54ff3%3A0xd0e8009a05feb48c!2sPT.%20Radar%20Teknologi%20Komputer!5e0!3m2!1sen!2sid!4v1760255412554!5m2!1sen!2sid"
          width="1200"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Radar Teknologi Komputer"
          className='rounded-2xl'
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
