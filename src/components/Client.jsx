import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function PartnerCarousel() {
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


        <SwiperSlide>
          <div className="flex justify-center items-center gap-60">
            <img src="/client/bhaktianindya.png" alt="Logo 1" className="w-50 h-50 object-contain" />
            <img src="/client/client-1.png" alt="Logo 2" className="w-50 h-50 object-contain" />
            <img src="/client/client-2.png" alt="Logo 3" className="w-50 h-50 object-contain" />
            <img src="/client/client-3.png" alt="Logo 4" className="w-50 h-50 object-contain" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center gap-60">
            <img src="/client/client-4.png" alt="Logo 5" className="w-50 h-50 object-contain" />
            <img src="/client/client-5.png" alt="Logo 6" className="w-50 h-50 object-contain" />
            <img src="/client/client-6.png" alt="Logo 7" className="w-50 h-50 object-contain" />
            <img src="/client/client-7.jpg" alt="Logo 8" className="w-50 h-50 object-contain" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center gap-60">

            <img src="/client/client-8.png" alt="Logo 9" className="w-50 h-50 object-contain" />
            <img src="/client/client-9.jpg" alt="Logo 10" className="w-50 h-50 object-contain" />
            <img src="/client/client-10.png" alt="Logo 11" className="w-50 h-50 object-contain" />
            <img src="/client/client-11.png" alt="Logo 12" className="w-50 h-50 object-contain" />

          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
