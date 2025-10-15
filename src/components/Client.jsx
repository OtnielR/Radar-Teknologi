import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";


export default function PartnerCarousel() {

  let clientLogoPath = ["/client/bhaktianindya.png", "/client/client-1.png", "/client/client-2.png", "/client/client-3.png", "/client/client-4.png", "/client/client-5.png", "/client/client-6.png", "/client/client-7.png", "/client/client-8.png", "/client/client-9.png", "/client/client-10.png", "/client/client-11.png",]
  let numberOfSection = Math.ceil(clientLogoPath.length / 4)
  const swiperSection = []


  for (let i = 0; i < numberOfSection; i++) {
    swiperSection.push(<>
      <SwiperSlide>
        <div className="flex justify-center items-center gap-60">
          <img src={clientLogoPath[i * numberOfSection]} alt="Logo 1" className="w-50 h-50 object-contain" />
          <img src={clientLogoPath[i * numberOfSection + 1]} alt="Logo 1" className="w-50 h-50 object-contain" />
          <img src={clientLogoPath[i * numberOfSection + 2]} alt="Logo 1" className="w-50 h-50 object-contain" />
          <img src={clientLogoPath[i * numberOfSection + 3]} alt="Logo 1" className="w-50 h-50 object-contain" />
        </div>
      </SwiperSlide>
    </>)
  }


  return (
    <div className="w-full flex-col justify-center items-center py-20 bg-white" id="portofolio">
      <div className="flex flex-col justify-center items-center pt-10 pb-20">
        <h1 className="text-3xl font-bold">Client Kami</h1>
        <p className="pt-3">Berikut beberapa perusahaan, instansi, sekolah dan kampus yang sudah bergabung bersama kami</p>
      </div>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-[90%]"
      >

        {swiperSection}
      </Swiper>
    </div>
  );
}
